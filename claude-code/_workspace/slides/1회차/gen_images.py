#!/usr/bin/env python3
"""Parallel image generation for 1회차 slides via codex exec image_gen.

Reads 01_slide_plan.json, fires up to 5 parallel `codex exec` calls per batch,
each generating one PNG and saving to assets/img/{slide_id}.png.
Writes 02_image_index.json with per-image status.
"""
import json, os, subprocess, sys, time, concurrent.futures, pathlib

ROOT = pathlib.Path("/Users/robin/Documents/KOI/claude-code")
PLAN = ROOT / "_workspace/slides/1회차/01_slide_plan.json"
OUT_DIR = ROOT / "outputs/슬라이드/1회차/assets/img"
INDEX = ROOT / "_workspace/slides/1회차/02_image_index.json"
LOG_DIR = ROOT / "_workspace/slides/1회차/imagegen_logs"
LOG_DIR.mkdir(parents=True, exist_ok=True)

STYLE_PREFIX = (
    "minimalist editorial illustration, soft pastel palette with indigo and "
    "violet accents, generous whitespace, dark background gradient mesh, no "
    "text inside the image, abstract geometric and metaphor-driven composition,"
    " modern minimal dark aesthetic, smooth depth, subtle glow"
)

LANDSCAPE_KINDS = {"cover", "section", "closing"}


def load_plan():
    plan = json.load(open(PLAN))
    items = []
    for s in plan["slides"]:
        if not s.get("image_slot") or s["image_slot"] == "none":
            continue
        size = "landscape" if s["kind"] in LANDSCAPE_KINDS else "square"
        items.append({
            "slide_id": s["id"],
            "kind": s["kind"],
            "size": size,
            "brief": s["image_slot"],
        })
    return items


def make_prompt(item):
    target = OUT_DIR / f"{item['slide_id']}.png"
    return (
        f"Use the built-in image_gen tool to generate one PNG image. "
        f"Prompt: \"{STYLE_PREFIX} — {item['brief']}\". "
        f"Size: {item['size']}. Quality: high. Format: png. "
        f"Save the output PNG as {target}. "
        f"Do not include any text/letters inside the image. "
        f"After saving, just print: DONE {item['slide_id']}"
    )


def generate(item):
    sid = item["slide_id"]
    target = OUT_DIR / f"{sid}.png"
    if target.exists() and target.stat().st_size > 50000:
        return {"slide_id": sid, "status": "skipped_existing", "size": item["size"], "path": f"assets/img/{sid}.png"}

    prompt = make_prompt(item)
    log = LOG_DIR / f"{sid}.log"
    started = time.time()
    try:
        proc = subprocess.run(
            ["codex", "exec", "--skip-git-repo-check", "--sandbox", "workspace-write", prompt],
            capture_output=True, text=True, timeout=300,
        )
        log.write_text(f"=== STDOUT ===\n{proc.stdout}\n\n=== STDERR ===\n{proc.stderr}\n")
        elapsed = time.time() - started
        if target.exists() and target.stat().st_size > 50000:
            return {"slide_id": sid, "status": "ok", "size": item["size"], "path": f"assets/img/{sid}.png", "elapsed_sec": round(elapsed, 1)}
        return {"slide_id": sid, "status": "missing_after_generation", "size": item["size"], "elapsed_sec": round(elapsed, 1)}
    except subprocess.TimeoutExpired:
        return {"slide_id": sid, "status": "timeout", "size": item["size"]}
    except Exception as e:
        return {"slide_id": sid, "status": f"error: {e}", "size": item["size"]}


def main():
    items = load_plan()
    print(f"[plan] {len(items)} images to generate")
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex:
        futures = {ex.submit(generate, it): it for it in items}
        for i, fut in enumerate(concurrent.futures.as_completed(futures)):
            r = fut.result()
            results.append(r)
            done_count = i + 1
            print(f"[{done_count:02d}/{len(items)}] {r['slide_id']}: {r['status']}", flush=True)

    results.sort(key=lambda x: x["slide_id"])
    success = [r for r in results if r["status"] in ("ok", "skipped_existing")]
    failed = [r for r in results if r["status"] not in ("ok", "skipped_existing")]

    index = {
        "회차": 1,
        "design_tone": "modern minimal dark + animated gradient mesh",
        "style_prefix": STYLE_PREFIX,
        "tool": "codex exec image_gen",
        "batch_size": 5,
        "total_images": len(items),
        "success_count": len(success),
        "failed_count": len(failed),
        "images": [
            {**r, "size": "1792x1024" if r.get("size") == "landscape" else "1024x1024"}
            for r in results
        ],
    }
    INDEX.write_text(json.dumps(index, indent=2, ensure_ascii=False))
    print(f"\n[done] success={len(success)} failed={len(failed)} → {INDEX}")
    if failed:
        print("[failed]", [f["slide_id"] for f in failed])


if __name__ == "__main__":
    main()
