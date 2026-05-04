#!/usr/bin/env python3
"""Create Markdown skeletons for the Open Source x AI course docs."""

from __future__ import annotations

import argparse
from pathlib import Path


SESSION_TITLES = [
    "AI 시대의 오픈소스: 왜 지금 다시 중요한가",
    "GitHub 협업 워크플로우와 오픈소스 운영 기본기",
    "오픈소스 라이선스, 거버넌스, 커뮤니티 운영",
    "AI를 활용한 오픈소스 기여와 운영 자동화",
    "AI 멀티 에이전트로 오픈소스 프로젝트 개발하기",
    "프로젝트 발표, 오픈소스 커리어, 다음 기여로 이어가기",
]

SESSION_DATES = [
    "2026-05-06 19:00-21:00",
    "2026-05-07 19:00-21:00",
    "2026-05-14 19:00-21:00",
    "2026-05-21 19:00-21:00",
    "2026-05-28 19:00-21:00",
    "2026-06-04 19:00-21:00",
]


def write(path: Path, content: str, force: bool) -> str:
    path.parent.mkdir(parents=True, exist_ok=True)
    existed = path.exists()
    if path.exists() and not force:
        return f"kept {path}"
    path.write_text(content, encoding="utf-8")
    return f"{'overwrote' if existed else 'created'} {path}"


def plan_template() -> str:
    return """# 교육 기획서

## 과정 개요

## 기획 배경

## 대상 학습자

## 학습 목표

## 운영 구조

## 팀 프로젝트 트랙

## 회차별 산출물

## 평가 기준

## 운영 리스크와 대응

## 성공 기준
"""


def curriculum_template() -> str:
    return """# 커리큘럼

## 과정 요약

## 역량 맵

## 전체 일정

## 회차별 상세

## 프로젝트 트랙 운영

## 평가 루브릭

## 강사 준비사항
"""


def lecture_template(index: int, title: str, date: str) -> str:
    return f"""# {index}회차 강의자료: {title}

## 메타데이터

| 항목 | 내용 |
| --- | --- |
| 일시 | {date} |
| 핵심 메시지 |  |
| 목표 산출물 |  |

## 학습 목표

## 사전 준비

## 시간 계획

## 핵심 강의 노트

## 실습 블록

## 멘토링 가이드

## AI 활용 가이드

## 과제

## Source Notes
"""


def qa_template() -> str:
    return """# 품질 검토

## Source Fidelity

## Cross-Document Consistency

## Citation Gaps

## Instructional Quality

## Recommended Edits
"""


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--out-dir", default="docs", help="Output directory for Markdown skeletons")
    parser.add_argument("--force", action="store_true", help="Overwrite existing files")
    args = parser.parse_args()

    root = Path(args.out_dir)
    results = [
        write(root / "00-education-plan.md", plan_template(), args.force),
        write(root / "01-curriculum.md", curriculum_template(), args.force),
    ]

    for index, (title, date) in enumerate(zip(SESSION_TITLES, SESSION_DATES), start=1):
        results.append(
            write(
                root / "lectures" / f"session-{index:02d}.md",
                lecture_template(index, title, date),
                args.force,
            )
        )

    results.append(write(root / "99-quality-review.md", qa_template(), args.force))

    for result in results:
        print(result)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
