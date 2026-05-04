# 2회차 — GitHub 협업 워크플로우와 오픈소스 운영 기본기

> **첫 줄 (직전 회차 전이 문장, 마스터 플랜 §3.3 그대로):**
> *"1회차에서 우리는 '왜 오픈소스인가'를 본 것이다. 오늘부터는 '어떻게 참여하는가'를 본다. 그 시작은 코드가 아니라 단어다."*

---

## 회차 표지 (강사·학생 모두용)

| 항목 | 값 |
|----|----|
| 회차 | 2회차 (총 6회 중) |
| 일자/시간 | 2026-05-07 (목) 19:00~21:00 |
| 강의 90분 + 멘토링 60분 | 19:00~20:30 강의 / 20:30~21:30 멘토링 |
| 핵심 메시지 | **오픈소스의 기본 언어는 코드가 아니라 Issue · Branch · Commit · Pull Request · Review 다섯 단어다.** |
| 선수 지식 | GitHub 계정 보유, 1회차 후보 프로젝트 3개 정리, 한 가지 언어 기본 (Python/JS 권장), AI 챗봇 1개 (Claude 또는 Copilot) 사용 경험 |
| 선수 도구 | git CLI (2.40+ 권장), GitHub CLI(`gh`) 선택, VS Code 또는 동급 에디터, 브라우저 |
| 이 회차가 끝나면 | (1) 팀 GitHub 저장소가 살아있다 (2) 라벨 붙은 Issue 5개 + 머지된 PR 1개가 있다 (3) A/B 트랙이 1줄 선언으로 정해졌다 (4) 역할 분담 매트릭스가 완성됐다 |

### 학습 목표 (Learning Objectives — 핸드아웃 첫 페이지 박스)

> **LO 1**. 학생은 GitHub Flow(브랜치 생성 → 변경 → PR → 리뷰 → 병합 → 브랜치 삭제)를 자기 손으로 1사이클 실행할 수 있다.
>
> **LO 2**. 학생은 좋은 Issue(재현 가능한 버그 리포트, 명확한 기능 제안)와 좋은 PR(제목, 요약, 스크린샷, 이슈 링크)을 작성할 수 있다.
>
> **LO 3**. 학생은 팀 저장소에 README/Issue/PR을 갖추고, 본인 트랙(A 외부 기여 / B 자체 운영)을 확정할 수 있다.

### 평가와의 연결 (학생용 안내, 핸드아웃 두 번째 박스)

> 오늘 이 활동을 안 하면 다음 평가에서 점수가 깎인다는 사실을 미리 알리는 것이 마스터 플랜 §3.1의 룰이다.
>
> - 첫 머지 PR을 못 만들면 → **GitHub 협업 20%** 채점에서 1차 측정점이 0점.
> - 트랙을 정하지 않으면 → **실제 기여·운영 25%**의 진입점이 비어 있는 채로 3회차 시작.
> - PR 본문에 AI 로그를 안 남기면 → **AI 활용 능력 20%**의 누적이 끊어진다 (4회차에 본격화 전제).

---

## 강사용 메타 (Run-of-Show 압축판)

> 운영표(`_workspace/02_pedagogy_runbook.md` §2.2)와 동기화. 시각이 어긋나면 운영표가 우선이며, 작가에게 즉시 SendMessage.

| 시각 | 분량 | 모드 | 활동 / 실습 ID | 핵심 산출 |
|----|---|----|----|----|
| 0:00~0:03 | 3분 | 강의 | 직전 전이 + 핵심 메시지 (샌드위치 도입) | — |
| 0:03~0:08 | 5분 | 도입 훅 | **EX-2A** 인기 OSS Issues 단어 빈도 | 칠판 단어 5개 |
| 0:08~0:13 | 5분 | 강의 | LO 3개 + 오늘 산출물 약속 | 핸드아웃 LO 박스 |
| 0:13~0:25 | 12분 | 라이브 데모 | **EX-2B** 강사 라이브 GitHub Flow | 학생 7단계 체크리스트 ✓ |
| 0:25~0:55 | 30분 | 실습 | **EX-2C** 팀 저장소 첫 PR 사이클 | 팀당 머지 PR 1 + Issue 5 |
| 0:55~1:05 | 10분 | 강의 | 좋은 Issue/PR 해부학 | 다음 회차 빌드업 |
| 1:05~1:20 | 15분 | AI 미니 | **EX-2D** AI로 PR 본문 다듬기 | AI 출력 + 사람 검증 |
| 1:20~1:25 | 5분 | 트랙 결정 | **EX-2E** 트랙 1줄 선언 | 팀 1줄 선언 |
| 1:25~1:30 | 5분 | 회고 + 전이 | KPT + 다음 회차 전이 + 핵심 메시지 재노출 | KPT 1줄 |
| 1:30~2:30 | 60분 | 멘토링 | 트랙 사인 + 역할 매트릭스 + Issue 품질 점검 | 사인 + 매트릭스 + 라벨 체계 |

### 슬라이드 매핑 (마크다운 헤딩 → 슬라이드)

> 본 문서의 H2(`##`)는 슬라이드 섹션, H3(`###`)는 개별 슬라이드. 불릿은 한 줄당 한 메시지를 지킨다.

### 강사 톤 가이드

- 반말, 친근하지만 전문적. "여러분"보다 "너희"가 자연스러운 자리는 그대로 둔다.
- 라이브 코딩에서 실수하면 숨기지 말고 **"실수에서 배우는 게 OSS다"** 한 마디로 넘긴다.
- AI 출력을 그대로 화면에 띄우되 반드시 "여기서 내가 어떤 부분을 의심해야 하지?"를 학생에게 묻는다.

---

## 사전 학습 (수업 전 30분, 학생용)

> **왜 지금 이걸 배우는가**: 1회차에서 우리는 GitHub을 "구경"했다. 이번 주는 "참여"한다. 강의 시간에 처음 git을 깔면 30분이 그대로 사라진다. 사전 학습으로 도구를 손에 쥔 채로 들어와야 90분이 살아난다.

### A. 도구 점검 체크리스트 (10분)

학생은 강의 시작 전에 아래 4개를 통과시켜 놓는다.

```bash
# 1) git 버전 (2.40+ 권장)
git --version

# 2) git 사용자 설정 (커밋 작성자)
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"

# 3) GitHub CLI 설치 확인 (선택, 권장)
gh --version

# 4) GitHub CLI 인증 (선택)
gh auth login
```

체크리스트:
- ☐ `git --version` 이 2.40 이상 출력 (구버전이어도 강의 진행은 가능, 단 일부 옵션 차이)
- ☐ `user.name`, `user.email` 설정 완료 (이메일은 GitHub 계정과 일치 권장)
- ☐ `gh auth login` 통과 또는 PAT(Personal Access Token) 발급 ([GitHub Docs, "Managing your personal access tokens"][gh-pat])
- ☐ VS Code에서 git diff·git history 확장이 동작

### B. 1회차 산출물 다시 꺼내기 (10분)

1회차에서 우리는 후보 프로젝트 3개를 정리표로 만들었다. 강의 시작 전에 그 표를 한 번 더 본다.

> 만약 1회차 결석으로 후보 표가 없다면, 사전 학습 시간 10분 안에 GitHub Trending([GitHub Trending][gh-trending])에서 관심 도메인 1개의 인기 저장소 3개를 추려둔다. 강의 시간에 0분부터 따라잡을 수 있다.

학생용 표 양식 (1회차 산출물 그대로 재사용):

| 후보 # | 저장소 (org/repo) | 분야 | 라이선스 | 최근 커밋 | 기여 진입점 후보 |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

### C. 사전 읽기 — 10분 (3개 중 2개 이상)

| 자료 | 발행처 | URL | 우선순위 |
|---|---|---|---|
| GitHub flow | GitHub Docs | https://docs.github.com/en/get-started/using-github/github-flow | ★★★ (필수) |
| About pull requests | GitHub Docs | https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests | ★★★ (필수) |
| About issues | GitHub Docs | https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues | ★★ |
| (한국어) GitHub 한국어 가이드 [KO] | GitHub Korea | https://docs.github.com/ko | ★★ |

읽으면서 머릿속에 남겨야 할 한 줄 정의:

> *"GitHub Flow는 짧은 브랜치와 PR 중심의 협업 워크플로우이며, PR은 변경 제안을 논의하고 리뷰한 뒤 병합하는 핵심 협업 기능이다."* — GitHub Docs ([gh-flow], [gh-pr])

---

## 0:00~0:03 — 직전 전이 + 핵심 메시지 (샌드위치 도입)

> **왜 지금 이걸 배우는가**: 마스터 플랜 §7의 샌드위치 룰. 핵심 메시지를 회차 도입에 한 번, 마무리에 한 번 똑같이 노출해야 학생 머리에 박힌다.

### 슬라이드 #1 — 표지

```
2회차
GitHub 협업 워크플로우와 오픈소스 운영 기본기

오픈소스의 기본 언어는 코드가 아니라
Issue · Branch · Commit · Pull Request · Review 다섯 단어다.
```

### 강사 스크립트 (60초)

> "지난주, 너희는 GitHub Trending에서 후보 3개를 골라왔다. 그게 1막이었다. 1막 결론은 '오픈소스는 AI 시대의 학습·협업·커리어·제품 확산 방식'이라는 한 줄이었다.
>
> 오늘은 2막. 한 줄 메시지로 바꾸자. **'오픈소스의 기본 언어는 코드가 아니라 단어 다섯 개다.'** 그 다섯 개가 뭐냐. Issue, Branch, Commit, Pull Request, Review. 이걸 너희 손가락이 외울 때까지 오늘 90분 동안 반복할 거다.
>
> 끝나는 시점에 너희 GitHub에는 살아있는 저장소, 라벨 붙은 Issue 5개, 머지된 PR 1개가 남는다. 안 남으면 다음 주 평가가 비어 있는 채로 시작한다."

### 슬라이드 #2 — 지난 주 너희가 만든 것

```
1회차 → 후보 프로젝트 3개 + 팀 결성 + 프로필 README 초안
                    ↓
2회차 → 팀 저장소 + Issue 5개 + 첫 머지 PR + 트랙 확정
                    ↓
3회차 → 신뢰 구조 (LICENSE/CONTRIBUTING/COC/SECURITY/Templates)
```

> 1회차 도입에서 1회차 작가가 약속한 전이 — *"오늘 우리는 후보 3개를 손에 쥐었다. 다음 주에는 그중 하나에 깃발을 꽂는다."* — 의 "다음 주"가 바로 오늘이다. 강사는 1회차 슬라이드에서 이 문장 캡처를 한 장 보여주고 시작한다.

---

## 0:03~0:08 — EX-2A 인기 OSS Issues 단어 빈도 (도입 훅)

> **왜 지금 이걸 배우는가**: 핵심 메시지("코드가 아니라 단어")를 5분 안에 학생 입으로 말하게 만든다. 강의 첫 5분에 학생이 직접 입을 떼면 그 다음 85분이 살아난다.

### 슬라이드 #3 — 화면을 갈라서 인기 OSS Issue 탭 3개

```
[좌] vercel/next.js Issues  | [중] huggingface/transformers Issues  | [우] astral-sh/uv Issues
```

> 강사는 사전 준비 단계에서 위 3개 저장소의 Issues 탭을 각각 띄워둔다. URL은 자료 풀(`§3.1` Tier-A)에서 그대로 가져온다.
>
> - https://github.com/vercel/next.js/issues
> - https://github.com/huggingface/transformers/issues
> - https://github.com/astral-sh/uv/issues

### 강사 스크립트 + 학생 활동

> "5분만 줄게. 이 세 화면에서 가장 자주 보이는 단어 3개를 찾아라. 손 들고 답해. 영어 단어 그대로."

학생 답안 예상 풀:

| 자주 등장 | 의미 | OSS 협업 언어로의 의미 |
|---|---|---|
| `repro` / `reproduction` | 버그를 재현할 수 있는 최소 코드/순서 | "재현 안 되는 버그는 안 고친다" |
| `feature request` | 기능 제안 | 코드 기여 전에 토론 먼저 |
| `bug` / `regression` | 버그 / 회귀(이전 동작이 깨짐) | 라벨로 트리아지 |
| `good first issue` | 처음 기여하는 사람용 | 메인테이너가 신규 기여자에게 던져둔 손짓 |
| `docs` / `documentation` | 문서 관련 | docs PR이 첫 기여로 추천되는 이유 |
| `help wanted` | 도움 요청 | 메인테이너가 손이 모자라다는 신호 |

### 체크리스트 (강사 운영)

- ☐ 학생이 손들고 답함 (3명 이상)
- ☐ 단어 5개 이상 칠판/슬라이드에 도출
- ☐ 한 줄 마무리: **"이 단어들이 GitHub 협업 언어다. 우리도 오늘 이걸 쓴다."**

### Fallback

학생이 답을 안 하면 강사가 직접 단어를 적고 "왜 이 단어가 가장 많이 보일까?"를 옆 사람과 30초 페어 토론으로 전환.

---

## 0:08~0:13 — LO 3개 + 오늘 산출물 약속 (강의)

> **왜 지금 이걸 배우는가**: 마스터 플랜 §7 규칙 4 — LO 3개를 회차 시작 5분 안에 학생에게 명시. 학생이 자기 위치를 안다.

### 슬라이드 #4 — 오늘 너희가 만들 것 (산출물 약속)

```
□ 팀 GitHub 저장소 1개  (public 또는 internal-but-soon-public)
□ 라벨 붙은 Issue 5개 이상
□ 첫 머지 PR 1개  (팀 내 PR도 OK)
□ 트랙 확정 1줄 선언문  (A or B)
□ 역할 분담 매트릭스  (Maintainer / Contributor / Docs / AI-Automation)
```

### 슬라이드 #5 — Learning Objectives 박스

```
LO 1.  GitHub Flow를 자기 손으로 1사이클 실행할 수 있다.
       (브랜치 → 변경 → PR → 리뷰 → 병합 → 브랜치 삭제)

LO 2.  좋은 Issue와 좋은 PR을 작성할 수 있다.
       (제목 / 요약 / 재현 / 스크린샷 / 이슈 링크)

LO 3.  팀 저장소를 살아있게 만들고, 본인 트랙(A/B)을 확정할 수 있다.
```

### 강사 스크립트 (90초)

> "체크박스 다섯 개를 봐. 90분 안에 다 채운다. 못 채우면 멘토링 60분에서 채운다. 그래도 안 채워지면 다음 주에 우리 시작점이 비어버린다.
>
> LO 1번에 '자기 손으로'가 굵게 적혀있는 거 봤지. 강사가 보여주는 걸 보는 게 아니라, 너희 손가락이 git checkout, git push, gh pr create를 친다."

---

## 0:13~0:25 — EX-2B 강사 라이브 GitHub Flow 시연 (12분)

> **왜 지금 이걸 배우는가**: 30분 실습(EX-2C) 직전에 7단계의 모범 답안을 한 번 본다. 강사가 한 번 시연하지 않으면, 학생은 30분 동안 막힌다.

### 슬라이드 #6 — GitHub Flow 7단계 체크리스트 (학생 핸드아웃 그대로)

학생은 시연을 보면서 핸드아웃에 ✓ 한다.

```
☐ 1. main에서 새 브랜치 생성       git switch -c <branch>
☐ 2. 변경 작업                       (편집)
☐ 3. add → commit                    git add . && git commit -m "..."
☐ 4. push                            git push -u origin <branch>
☐ 5. PR 발행                         gh pr create  (또는 웹 UI)
☐ 6. 리뷰 코멘트 1개 이상 → 머지   gh pr review --approve / gh pr merge
☐ 7. 브랜치 삭제                     git branch -d <branch>
```

### 강사 라이브 시연 — 정확한 명령어 시퀀스

> 강사는 데모용 저장소(예: `instructor/oss-edu-demo`)를 사전 준비. 빈 README만 있는 상태로 시작한다.

#### 1단계 — 저장소 클론, main 갱신

```bash
gh repo clone instructor/oss-edu-demo
cd oss-edu-demo
git switch main
git pull
```

#### 2단계 — 새 브랜치 (Branch / 브랜치)

```bash
git switch -c feat/add-greeting
```

> "왜 `git switch`냐고? 2019년에 git 2.23부터 `git checkout`을 두 명령(`switch`/`restore`)으로 쪼갰다. checkout도 동작은 한다. 단, switch가 의도가 더 명확하다."

#### 3단계 — 변경 (Commit)

데모용 README에 한 줄 추가.

```bash
echo "Hello from $(git config user.name)" >> README.md
git status
git diff
```

> "diff를 안 보고 add하면 OSS에서 비밀키 커밋 사고가 90% 여기서 난다. **`git diff`는 add 직전의 마지막 방어선이다.**"

#### 4단계 — Add + Commit

```bash
git add README.md
git commit -m "docs: add greeting line for demo"
```

> 커밋 메시지 컨벤션: 자료 풀 §3.2의 [Conventional Commits][conv]. `docs:`, `feat:`, `fix:`, `chore:`, `test:` 등 prefix를 사용하면 다음 회차 changelog 자동화가 쉬워진다.

#### 5단계 — Push (Push)

```bash
git push -u origin feat/add-greeting
```

> `-u`는 처음 push할 때만 필요. 이후엔 `git push`만으로 충분. `--set-upstream`이라고도 쓴다.

#### 6단계 — PR 발행 (Pull Request / 풀 리퀘스트)

CLI 방식:

```bash
gh pr create \
  --base main \
  --head feat/add-greeting \
  --title "docs: add greeting line for demo" \
  --body "## 무엇을\nREADME에 인사말 한 줄 추가.\n\n## 왜\n2회차 라이브 시연용.\n\n## 어떻게 검증\n- main에 머지 후 README에 줄이 보이면 끝.\n\n## 관련 이슈\n#1 (있다면)"
```

웹 UI 방식: 푸시 직후 GitHub가 화면 상단에 띄우는 노란 띠의 "Compare & pull request" 버튼.

> "두 방식 다 결과는 같다. CLI는 강사처럼 자동화 좋아하는 사람용, 웹은 처음 PR 보는 팀원에게 보여줄 때 직관적이다."

#### 7단계 — 리뷰 코멘트 → 머지 (Review / 리뷰 + Merge / 머지)

본인 PR이라도 1줄 코멘트를 다른 사람이 달아야 머지한다 (팀 룰). 강사는 데모용으로 보조 계정 또는 멘토 계정으로 코멘트.

```bash
# 다른 계정에서
gh pr review 1 --comment --body "LGTM. README 라인 끝에 줄바꿈 있는지만 확인."

# 머지
gh pr merge 1 --squash --delete-branch
```

> `--squash`는 PR 안의 여러 커밋을 한 커밋으로 합쳐 main에 올린다. 다른 옵션은 `--merge`(기본 머지 커밋), `--rebase`(rebase 머지). 팀이 처음이면 `--squash`가 가장 깔끔하다.

#### 결과 확인

```bash
git switch main
git pull
git log --oneline -5
```

### 강사 운영 노트

- ☐ 7단계 모두 시연 완료
- ☐ 학생 핸드아웃 체크리스트 ✓ 확인 (옆 사람과 1명 짝지어 본다)
- ☐ **실수 1번 이상 노출** ("아, 브랜치 이름 오타냈네. 됐다, 이대로 가자, 메시지로 보완.")
- ☐ "라이브에서 실수해도 OK — 실수에서 배우는 게 OSS다" 한 줄 마무리

### Fallback

- 인터넷 끊김 → 사전 녹화 30초 클립 또는 캡처 시퀀스로 대체.
- `gh` 인증 만료 → 웹 UI로 PR 발행 시연 (CLI 부분은 명령어만 슬라이드에 노출).
- 학생이 따라오기 너무 느리다 → 12분 시연을 8분으로 컷, 4분을 30분 실습 직전 "팀별 1명만 환경 점검" 시간으로 흡수.

---

## 0:25~0:55 — EX-2C 팀 저장소 첫 PR 사이클 (30분, 회차 2 핵심)

> **왜 지금 이걸 배우는가**: 본 회차의 핵심 산출물 "팀 저장소 + 첫 머지 PR"이 여기서 만들어진다. 90분 중 가장 무거운 30분. 이 시간이 빠지면 1회차→3회차 인과 사슬이 끊긴다.

### 산출 약속 (팀당)

```
[1] 팀 GitHub 저장소  (public 또는 internal-but-soon-public)
[2] 첫 머지 PR 1개   (팀원 1명이 발행, 다른 팀원이 리뷰)
[3] 라벨 붙은 Issue 5개
```

### 슬라이드 #7 — 30분을 어떻게 쓸 것인가 (시간 분배)

```
0:25~0:30  (5분)  팀 저장소 생성 + README 1줄 + 권한 부여
0:30~0:42 (12분)  팀원 각자 브랜치 생성 → 한 줄씩 추가 → push
0:42~0:50  (8분)  서로 PR 리뷰 → 머지
0:50~0:55  (5분)  Issue 5개 발행 + 라벨링
```

### Phase 1 — 팀 저장소 생성 (5분)

> 팀당 1명(가칭: Maintainer 역할)이 저장소를 만들고, 나머지 팀원을 Collaborator로 초대한다.

#### A. 웹 UI 방식

1. https://github.com/new 로 접속.
2. **Repository name**: 팀명-slug (예: `team-kafka-cafeteria-bot`).
3. **Description**: 한 줄. 트랙 결정 전이라도 한 줄은 적는다.
4. **Public** 선택 (또는 Private. 단, 3회차에 public 전환 권장 — 마스터 플랜 §3.1).
5. **Add a README file** 체크.
6. **Add .gitignore** → 팀 언어 선택 (Python/Node 등).
7. **Choose a license** → **None** (3회차에 결정). 라이선스 선택은 다음 주 핵심 주제.

#### B. CLI 방식 (`gh` 사용)

```bash
gh repo create team-kafka-cafeteria-bot \
  --public \
  --description "캠퍼스 학생식당 메뉴 알리미 봇 (B트랙)" \
  --add-readme \
  --gitignore Node \
  --clone

cd team-kafka-cafeteria-bot
```

#### C. 팀원 초대 (Collaborator)

웹: Settings → Collaborators → "Add people" → 팀원 GitHub ID 입력.

CLI:

```bash
gh repo edit --add-collaborator user1
gh repo edit --add-collaborator user2
gh repo edit --add-collaborator user3
```

> 팀원이 초대 메일을 수락해야 push 권한이 생긴다. 초대 메일 확인은 https://github.com/notifications 또는 이메일 받은편지함.

#### Phase 1 체크리스트

- ☐ 저장소 생성 완료 (URL을 팀 노션/단톡방에 공유)
- ☐ README 1줄 추가 (한 줄이라도)
- ☐ 모든 팀원이 Collaborator로 초대 + 수락
- ☐ 모든 팀원이 로컬에 clone 완료

### Phase 2 — 팀원 각자 브랜치 + 변경 + push (12분)

> 팀원 N명이 동시에 한 줄씩 README에 추가한다. 각자 다른 브랜치, 다른 PR, 결과는 N개의 PR.

#### 팀원 1 (Maintainer) 예시

```bash
git switch -c chore/intro-maintainer
echo "- 팀 메인테이너: @user1" >> README.md
git add README.md
git commit -m "chore: introduce maintainer @user1"
git push -u origin chore/intro-maintainer
```

#### 팀원 2 (Docs) 예시

```bash
git switch -c chore/intro-docs
echo "- 문서 담당: @user2" >> README.md
git add README.md
git commit -m "chore: introduce docs lead @user2"
git push -u origin chore/intro-docs
```

#### 팀원 3, 4, 5도 동일 패턴

> 모두 같은 파일(README.md)을 건드리는 게 의도다. 머지 순서에 따라 후순위 PR에 **머지 충돌(merge conflict)** 이 발생한다 — 그게 학습 포인트.

#### Phase 2 체크리스트

- ☐ 팀원 각자 자기 브랜치를 만든다 (브랜치 이름 규칙: `<type>/<short-desc>`)
- ☐ 각자 README에 한 줄씩 추가
- ☐ 각자 push (`git push -u origin <branch>`)
- ☐ GitHub Actions 등 CI 없는 상태라도 무방 (3회차에 추가)

### Phase 3 — PR 리뷰 + 머지 (8분)

> 짝꿍을 정해 서로 PR을 리뷰한다. 본인 PR을 본인이 머지하지 않는다 (팀 룰).

#### PR 발행 (CLI)

```bash
gh pr create \
  --base main \
  --head chore/intro-maintainer \
  --title "chore: introduce maintainer @user1" \
  --body "## 무엇을\nREADME에 메인테이너 소개 한 줄 추가.\n\n## 왜\n역할 분담을 README에 명시하기 위해.\n\n## 검증\n- 머지 후 README에 줄이 보이면 OK."
```

#### 리뷰 코멘트 (옆 팀원이 수행)

웹 UI: PR 페이지 → "Files changed" 탭 → 줄 옆 `+` → 코멘트 작성 → "Start a review" → "Submit review" → **Approve** 또는 **Comment** 또는 **Request changes**.

CLI:

```bash
# 옆 팀원 계정에서
gh pr review 1 --approve --body "좋다. 머지 OK."
```

#### 머지

```bash
gh pr merge 1 --squash --delete-branch
```

웹 UI: "Squash and merge" 버튼 → "Confirm squash and merge" → "Delete branch".

#### 머지 충돌 (Merge Conflict) 발생 시

> 두 번째 PR부터 충돌이 날 가능성 높음. 학습 포인트로 활용.

```bash
# 본인 브랜치를 main 기준으로 갱신
git switch chore/intro-docs
git fetch origin
git rebase origin/main

# 충돌 발생 → 충돌 파일 열어서 <<<<<<< 부터 >>>>>>> 까지 수동 해결
# README.md 수동 편집
git add README.md
git rebase --continue
git push --force-with-lease origin chore/intro-docs
```

> `--force-with-lease`는 일반 `--force`보다 안전 — 다른 사람이 그 사이 push했으면 멈춘다.

#### Phase 3 체크리스트

- ☐ 모든 팀원이 PR 발행
- ☐ 짝꿍 리뷰 코멘트 1개 이상
- ☐ 모든 PR 머지 (충돌 해결 포함)
- ☐ 머지 후 브랜치 자동 삭제 확인

### Phase 4 — Issue 5개 + 라벨 (5분)

> 팀이 1주일 동안 할 일을 5개 Issue로 쪼갠다. 라벨로 분류한다.

#### Issue 발행 (웹 UI)

저장소 → Issues 탭 → "New issue".

#### Issue 발행 (CLI)

```bash
gh issue create \
  --title "feat: 캠퍼스 식단 API 조사" \
  --body "## 무엇\n캠퍼스 식단을 제공하는 API 또는 스크래핑 대상 조사.\n\n## 완료 조건\n- API 또는 페이지 URL 3개\n- 응답 형식 캡처\n\n## 누구\n@user2" \
  --label "enhancement,good first issue"
```

#### 표준 라벨 5종 (학생 핸드아웃)

GitHub은 새 저장소에 기본 라벨을 자동 생성한다. 그 위에 팀이 5종을 표준화한다.

| 라벨 | 색상 (권장) | 의미 |
|---|---|---|
| `bug` | 빨강 (#d73a4a) | 버그 |
| `enhancement` | 파랑 (#a2eeef) | 새 기능/개선 |
| `documentation` | 청록 (#0075ca) | 문서 |
| `good first issue` | 보라 (#7057ff) | 첫 기여자 환영 |
| `help wanted` | 초록 (#008672) | 도움 요청 |

#### CLI로 라벨 일괄 생성

```bash
gh label create "good first issue" --color "7057ff" --description "Good for newcomers"
gh label create "help wanted" --color "008672" --description "Extra attention is needed"
# bug, enhancement, documentation은 GitHub 기본 라벨로 이미 존재
```

#### Phase 4 체크리스트

- ☐ Issue 5개 발행
- ☐ 각 Issue에 라벨 1개 이상
- ☐ 최소 1개에 `good first issue` 라벨 (3회차 외부 신규 기여자 시뮬레이션용)
- ☐ Issue가 이슈 본문(설명)을 가진다 (제목만 있는 Issue는 1주일 후 못 알아본다)

### EX-2C 전체 체크리스트 (산출물 검수)

| 항목 | 통과 기준 |
|---|---|
| 팀 저장소 | URL이 단톡방/노션에 공유됨 |
| 첫 머지 PR | 머지 PR `#1` 또는 `#2`가 닫힘(merged) 상태 |
| 라벨 붙은 Issue 5개 | Issues 탭에서 "5 Open" 이상 + 각 Issue에 라벨 |
| 권한 분배 | 팀원 모두 Collaborator |
| 브랜치 정리 | 머지된 브랜치는 모두 삭제됨 |

### Fallback (운영 노트)

| 상황 | 대응 |
|---|---|
| `git push` 권한 거부 | Collaborator 초대 미수락. 받은 메일에서 "View invitation" 클릭. |
| 2단계 인증(2FA) 미설정 | GitHub이 push 차단할 수 있음. PAT 발급 또는 SSH 키 등록 ([gh-pat]). |
| 머지 충돌 학생이 못 풀음 | 멘토가 1팀에 5분 안에 1번만 라이브로 풀어주고, 다른 팀은 영상으로 학습. |
| 30분 안에 못 끝낸 팀 | 멘토링 첫 30분으로 이월. 단, KPT(회고)는 보존. |
| GitHub 권한·브라우저 문제 | GitHub Codespaces 또는 강사 데모 저장소(`instructor/oss-edu-demo`)에 fork-PR. |

---

## 0:55~1:05 — 좋은 Issue / 좋은 PR의 해부학 (10분 강의)

> **왜 지금 이걸 배우는가**: EX-2C에서 만든 5개 Issue가 "제목만 있는 빈 Issue"가 되지 않게, 좋은 골격을 지금 배운다. 다음 주(3회차)에 Issue/PR Template을 직접 만들 때의 사전 골격이기도 하다.

### 슬라이드 #8 — 좋은 Issue 5요소 (BUG 리포트 기준)

```
1. 제목   짧고 검색 가능한 한 줄 (e.g. "Crash on file open with non-ASCII path")
2. 환경   OS / 버전 / 의존성 / 재현 환경 (1~3줄)
3. 재현   1, 2, 3 순서로 누가 따라해도 같은 결과 (Steps to reproduce)
4. 기대 vs 실제   "이래야 했는데 이렇게 됐다" 두 줄
5. 보조자료   스크린샷 / 로그 / 최소 재현 코드 (Minimal Reproducible Example, MRE)
```

> 출처: GitHub Docs, "About issues" ([gh-issues]).

### 슬라이드 #9 — 좋은 PR 6요소

```
1. 제목   <type>: <짧은 요약>      e.g. "fix: handle non-ASCII path in open()"
2. 무엇을  변경의 핵심 1~3줄
3. 왜      이 변경이 왜 필요한가 (이슈 링크 권장)
4. 어떻게  핵심 알고리즘/접근의 한 단락
5. 검증   어떻게 테스트했나 (스크린샷/터미널 출력)
6. 관련   Closes #<issue> / Fixes #<issue> / Refs #<issue>
```

> 출처: GitHub Docs, "About pull requests" ([gh-pr]) / "Managing and standardizing pull requests" ([gh-pr-std]).

### 학생 핸드아웃 — 빈 PR Template (3회차 사전 빌드업)

> 다음 회차에 .github/pull_request_template.md로 저장소에 박아 넣을 양식. 오늘은 PR 본문에 손으로 채운다.

```markdown
## 무엇을 (What)

<!-- 변경의 핵심을 1~3줄로 -->

## 왜 (Why)

<!-- 이 변경이 왜 필요한가 -->
<!-- Closes #<issue> 또는 Refs #<issue> -->

## 어떻게 (How)

<!-- 핵심 접근, 알고리즘, 디자인 결정 -->

## 검증 (How to Verify)

<!-- 테스트 / 스크린샷 / 명령어 -->

## 체크리스트

- [ ] 로컬에서 동작 확인
- [ ] 관련 이슈 링크
- [ ] 문서 업데이트 (필요 시)
- [ ] AI 사용 로그 (4회차부터 강제)
```

### 좋은 Issue/PR 비교 — Before/After (강사 시연)

#### Bad Issue (학생이 자주 쓰는 패턴)

```
제목: 안 됨

본문: 실행하면 에러가 남. 도와주세요.
```

> "이걸 받은 메인테이너는 5초 안에 close 한다. 정보가 0이라."

#### Good Issue (5요소 적용)

```
제목: Crash on `open()` with non-ASCII path on Windows

## 환경
- OS: Windows 11 (24H2)
- Python: 3.12.3
- 패키지: ourtool 0.4.1

## 재현
1. mkdir 한글폴더
2. cd 한글폴더
3. ourtool open "테스트.txt"

## 기대 vs 실제
기대: 파일 내용 출력
실제: UnicodeDecodeError ('utf-8' codec can't decode...)

## 로그
(첨부: traceback 전체 7줄)

## 최소 재현
https://gist.github.com/.../mre.py
```

> "이걸 받은 메인테이너는 30초 안에 라벨 붙이고 트리아지 한다. 좋은 Issue는 좋은 PR을 부르고, 좋은 PR은 좋은 머지를 부른다."

### 강사 한 줄 마무리

> "다음 주 3회차에는 이 양식을 .github 폴더에 박아 넣어 자동화한다. 오늘은 5개 Issue가 5요소를 가졌는지 멘토링에서 검수받자."

---

## 1:05~1:20 — EX-2D AI로 PR 본문 다듬기 (15분, AI 미니 활동)

> **왜 지금 이걸 배우는가**: 마스터 플랜 보강 요청 2 — AI 활용을 4·5회차에만 몰지 않는다. 2회차의 AI 미니 활동이 바로 이 EX-2D다. 학생은 첫 PR 본문을 AI로 다듬으며 "AI 사용 로그" 개념을 처음 도입한다.

### 슬라이드 #10 — AI 미니 활동의 의도

```
오늘 너희가 만든 첫 머지 PR의 본문이 ...
부실하다. (한 줄짜리)

→ AI로 6요소 양식에 맞춰 다시 써본다.
→ 사람이 1줄 이상 검증/수정한다.
→ 그 흔적을 "AI 사용 로그"에 기록한다.

이게 4·5회차의 사전 리허설이다.
```

### Step 1 — AI 도구 선택 (학생 자유)

자료 풀 §3.2 / §4 카탈로그 기준:

| 도구 | 학생 무료 옵션 | 본 활동에 권장도 |
|---|---|---|
| Claude (claude.ai 웹) | 무료 티어 | ★★★ (긴 컨텍스트, 한국어 자연) |
| GitHub Copilot Chat | Copilot Free (월 50회 채팅) | ★★★ (PR 컨텍스트 자동 인식) |
| GitHub Copilot in Pull Requests | Copilot Free 한도 안 | ★★ (UI 자동) |
| Cursor | 무료 티어 | ★★ (IDE에서 git diff 직접) |

### Step 2 — AI 프롬프트 (예시)

> 학생 핸드아웃에 그대로 박아둘 프롬프트. 첫 등장이라 손에 쥐어준다.

```
역할: 너는 오픈소스 메인테이너다.
입력: 아래 PR 변경사항(diff)과 현재 PR 본문이다.

[현재 PR 본문]
chore: introduce maintainer @user1

[git diff]
```diff
+ - 팀 메인테이너: @user1
```

작업: 아래 6요소 양식에 맞춰 PR 본문을 다시 써라.
1. 무엇을 (What)
2. 왜 (Why)
3. 어떻게 (How)
4. 검증 (How to Verify)
5. 관련 이슈 (Refs)
6. 체크리스트 (Checklist)

제약:
- 한국어로 써라.
- 사실에 없는 내용을 추정해서 적지 마라. 모르면 "TBD" 또는 "팀 결정 필요"로 표시해라.
- 줄당 한 메시지 원칙. 100단어 이내.
```

### Step 3 — AI 출력 받기 (예상 패턴)

AI가 잘 답한 경우 (예시):

```markdown
## 무엇을
README에 팀 메인테이너 @user1 소개 한 줄 추가.

## 왜
역할 분담을 README에 명시해 외부 기여자가 누구에게 멘션할지 알 수 있게 함.
관련: TBD (Issue 미발행)

## 어떻게
README.md 끝에 한 줄 append.

## 검증
- 머지 후 main 브랜치 README에 줄이 보임
- @user1 멘션이 GitHub에서 링크로 동작

## 관련 이슈
TBD

## 체크리스트
- [x] 로컬 동작 확인
- [ ] 관련 이슈 링크 (없음 — TBD)
- [ ] 문서 외 코드 변경 없음
```

AI가 잘못 답하는 패턴 (학생이 검증해야 할 부분):

| 헛소리 패턴 | 학생이 잡아야 할 것 |
|---|---|
| 변경하지 않은 파일을 변경했다고 적음 | git diff 실제 결과와 대조 |
| 존재하지 않는 Issue 번호를 임의 생성 | Issues 탭에 실제로 있는지 확인 |
| "테스트 추가" 같은 거짓 검증 항목 | 실제로 테스트가 추가됐는지 |
| 영어 응답 (한국어 요청 무시) | 다시 요청 또는 직접 번역 |

### Step 4 — 사람 검증 + PR 본문 업데이트

> 학생은 AI 출력을 그대로 복사하지 않는다. **최소 1줄 이상**을 자기 손으로 수정/보완한다.

수정 패턴 예시:
- "TBD"를 실제 값으로 채움 (없으면 "Issue 미발행"으로 명시)
- AI가 틀린 사실을 잡아 수정
- 한국어 어색한 부분을 자연스럽게

PR 본문 업데이트 (CLI):

```bash
gh pr edit 1 --body "$(cat <<'EOF'
## 무엇을
README에 팀 메인테이너 @user1 소개 한 줄 추가.

## 왜
역할 분담을 README에 명시.

## 검증
- 머지 후 main 브랜치 README에 줄이 보임

## 관련 이슈
없음 (역할 분담 README 추가 전 단계)

## 체크리스트
- [x] 로컬 동작 확인
- [x] AI로 본문 다듬기 (Claude / 사람이 1줄 수정)
EOF
)"
```

### Step 5 — AI 사용 로그 (양식, 학생 핸드아웃)

> 4회차에 본격화될 표를 처음 채운다. 양식은 5열로 통일.

```markdown
## AI 사용 로그 — 2회차 EX-2D

| 작업 | 도구/모델 | 프롬프트 (요약) | AI 출력 (요약) | 사람이 검증한 부분 |
|---|---|---|---|---|
| PR 본문 6요소 양식 변환 | Claude (claude.ai 웹, 2026-05-07) | "diff와 현재 본문 → 6요소로 다시 써줘. 사실에 없는 건 TBD." | 6요소 골격 출력 + TBD 명시 | TBD 1개를 "Issue 미발행"으로 교체. 검증 항목 1개 삭제(테스트 없는데 적혀 있어서) |
```

### EX-2D 체크리스트

- ☐ AI에게 PR diff + 본문 입력
- ☐ AI 출력을 받음 (스크린샷 또는 텍스트로 저장)
- ☐ 사람이 **1줄 이상** 수정/보완
- ☐ PR 본문을 GitHub에서 업데이트 (`gh pr edit` 또는 웹 UI)
- ☐ AI 사용 로그 표 1행 채움

### Fallback

- AI가 부정확한 답을 주면 **그 자체가 학습**. 학생은 "이게 왜 틀렸는지" 1줄 메모해서 로그에 남긴다.
- 무료 티어 한도 초과 → 옆 사람과 페어로 1번만 시도, 결과 공유.
- AI 도구가 회사 정책상 막혀 있음 → Copilot Free 또는 Codespaces 안의 Copilot 사용.

### 강사 한 줄 마무리

> "AI는 빈칸을 채우는 도구가 아니라, 너희가 빈칸을 의식하게 만드는 도구다. 'TBD'가 보이는 순간 인간이 일하는 시작점이다."

---

## 1:20~1:25 — EX-2E 트랙 확정 1줄 선언 (5분)

> **왜 지금 이걸 배우는가**: 트랙 결정을 강의 시간 내에 강제한다. 멘토링 60분에서 최종 사인. 2회차에 안 정하면 3회차 시작이 비어있다.

### 슬라이드 #11 — 트랙 선택 가이드 (마스터 플랜 §4.2)

```
신호                                            → 권장 트랙
팀원 절반 이상이 PR 경험 있음                    → A
팀이 명확한 "직접 만들고 싶은 도구" 아이디어 보유 → B
팀원 다수 첫 OSS + 시간 제약 큼                  → B (난이도 조정 용이)
팀이 특정 OSS의 응답 SLA 미리 확인               → A
시간 부족 / 외부 응답 늦음                       → A→B 전환 또는 하이브리드
```

### 1줄 선언문 양식

```
우리 팀 [팀명]은 [A/B]트랙. [무엇을 / 어디에 기여할지] 한다.
```

### 예시 선언문

A트랙:
> *"우리 팀 옴팡이는 A트랙. huggingface/transformers 의 docs 디렉토리에 한국어 번역 PR 1건 이상을 6주 안에 만든다."*

B트랙:
> *"우리 팀 카프카는 B트랙. 캠퍼스 학생식당 메뉴 알리미 봇을 만든다 — Slack/Discord webhook으로 매일 11:00에 알림."*

A→B 하이브리드(잠정):
> *"우리 팀 모카는 A트랙으로 시도. 4회차에 외부 응답 없으면 자체 mini-tool로 B 보조."*

### 체크리스트

- ☐ 1줄 선언문을 노션/단톡방/저장소 README에 박음
- ☐ 멘토링에서 사인 받음 (강사 또는 멘토)
- ☐ 트랙별 후속 액션 1줄을 본인 머리에 적음 (3회차 진입 전)

### 트랙별 후속 액션 (선언 직후 멘토링용)

#### A트랙 후속

- ☐ 후보 외부 OSS 1개 확정 (1회차 후보 3개에서 1개로 좁힘)
- ☐ 그 OSS의 CONTRIBUTING.md 읽음
- ☐ `good-first-issue` 라벨 붙은 이슈 5개 골라 본 팀 저장소 Issues에 분석 노트로 기록
- ☐ 외부 메인테이너 응답 SLA 확인 (최근 PR 머지 주기)

#### B트랙 후속

- ☐ 자체 프로젝트 1개 확정 (마스터 플랜 §4 추천 풀 또는 자체 아이디어)
- ☐ 본 팀 저장소를 그 프로젝트로 명명/리네임
- ☐ 첫 Issue 5개를 자체 프로젝트의 1주차 작업으로 채움
- ☐ "외부 누군가가 fork·issue를 남기게 하는" 6주 목표 1줄

---

## 1:25~1:30 — 회고 + 다음 회차 전이 (KPT 5분)

> **왜 지금 이걸 배우는가**: 마스터 플랜 §7 샌드위치 룰 마무리. 핵심 메시지를 마지막에 한 번 더 노출.

### KPT 양식 (학생 핸드아웃)

```
Keep   (오늘 좋았던 것 / 다음에도 유지할 것)  ━━━━
       └ 한 줄

Problem (오늘 어려웠던 것 / 막힌 부분)      ━━━━
       └ 한 줄

Try    (다음 주에 시도해볼 것)              ━━━━
       └ 한 줄
```

### 슬라이드 #12 — 다음 회차 전이 문장 (마스터 플랜 §3.3 그대로)

```
오늘 우리는 저장소를 살아있게 만들었다.

다음 주에는 그 저장소가 외부 사람도 신뢰할 수 있게
— 라이선스, CONTRIBUTING, 운영 규칙으로 —
골격을 세운다.
```

### 슬라이드 #13 — 핵심 메시지 재노출 (샌드위치 마무리)

```
오픈소스의 기본 언어는 코드가 아니라
Issue · Branch · Commit · Pull Request · Review 다섯 단어다.

오늘 너희는 그 다섯 단어를 손가락으로 한 번씩 쳤다.
다음 주에도 친다. 매주 친다. 6주 후에는 외운다.
```

### 강사 마무리 멘트 (60초)

> "지금 너희 GitHub에 가봐. 어제까지 비어 있었던 자리에 저장소가 있고, Issue 5개가 라벨 색깔별로 줄지어 있고, PR이 머지된 초록색 체크가 있다.
>
> 1주일 전에 이 화면을 보던 너희와 지금 이 화면을 보는 너희는 같은 사람이 아니다. 이게 GitHub Trending을 '구경'하던 사람과 '참여'하는 사람의 첫 차이다.
>
> 다음 주 5/14 19시에 만나자. 너희 저장소에 LICENSE를 박을 거다. 그 전까지 KPT 1줄, 단톡방에."

---

## 1:30~2:30 — 멘토링 60분 가이드

> **왜 지금 이걸 배우는가**: 강의에서 만든 산출물에 멘토 사인을 받고, 다음 주까지의 약속을 카드로 남긴다. 멘토링이 없으면 강의 90분이 공중에 뜬다.

### 표준 절차 (운영표 §4 합치)

```
0:00~0:10  팀 헬스 체크 10분
0:10~0:45  팀별 코칭 35분 (팀당 1명 멘토 기준 5팀이면 7분씩)
0:45~0:55  다음 주 약속 카드 10분
0:55~1:00  정리 + 사진 5분
```

### Phase 1 — 팀 헬스 체크 10분

> 2회차부터 매주 동일한 첫 10분. 마스터 플랜 위험 §5.3(팀 해체) 완충.

질문 4개:

1. **사람**: 지난 주 1회차 이후 팀원 이탈/추가 없었나? 출석 다 했나?
2. **속도**: 팀 헌법(1회차)에 정한 회의 주기를 지켰나?
3. **기술**: 30분 EX-2C에서 막힌 사람이 있었나? 누구, 어디서?
4. **감정**: 팀 분위기 1~5점 (1=망함 / 5=최고). 4점 미만이면 1줄 이유.

### Phase 2 — 팀별 코칭 35분 (팀당 7분 기준)

> 멘토는 다음 6개 항목을 7분 안에 빠르게 점검. 팀당 2분 점검 + 5분 코칭.

#### 점검 항목 (☐ 6개)

1. ☐ 팀 저장소 URL — 클릭 가능, public 또는 internal-but-soon-public
2. ☐ 첫 머지 PR — Closed(merged) 상태, 리뷰 코멘트 1개 이상
3. ☐ 라벨 붙은 Issue 5개 — 라벨이 다 붙어 있고 본문이 채워짐
4. ☐ 트랙 1줄 선언문 — A or B 명시
5. ☐ 역할 분담 매트릭스 — 4역할 사람 매핑 완료
6. ☐ AI 사용 로그 1행 — EX-2D에서 채워짐

#### 역할 분담 매트릭스 (학생 핸드아웃)

```
| 역할 | 책임 | 담당자 |
|----|----|----|
| Maintainer | 머지 권한 / 릴리즈 / 외부 응답 | @user1 |
| Contributor (Code) | 기능 구현 / 버그 수정 PR | @user2 |
| Docs | README, CONTRIBUTING, changelog | @user3 |
| AI-Automation | AI 사용 로그 정리 / changelog 자동화 | @user4 |
```

> 팀이 3명이면 한 명이 2역할 겸직, 5명이면 Contributor 2명. 마스터 플랜 §3.3 산출물 그대로.

#### 흔한 코칭 케이스

| 증상 | 코칭 |
|---|---|
| Issue 본문이 한 줄 ("로그인") | 5요소(환경/재현/기대-실제/보조자료) 1개씩 채워보기 |
| 머지 PR 1개도 없음 | 멘토 5분 라이브 — 팀원 1명을 골라 끝까지 함께 |
| 트랙 선언이 모호함 | 마스터 플랜 §4.2 신호표를 보고 즉시 결정 |
| AI 사용 로그가 빈칸 | "오늘 PR 본문 만들 때 AI 안 썼냐? 썼으면 적어라" |
| 팀원 1명이 모든 작업 | 멘토가 1명 차례로 7단계 한 번씩 손으로 시연 강제 |

### Phase 3 — 다음 주 약속 카드 10분

> 1회차 멘토링 마지막에 도입한 양식. 2회차 끝에 다시 채운다.

```markdown
## 다음 주 약속 카드 — 팀 [팀명] / 2026-05-07 → 2026-05-14

### 트랙
- A or B: ___
- 1줄 선언: ___

### 다음 주(3회차)까지 할 것 (팀)
- ☐ 라이선스 후보 1~2개 미리 토론
- ☐ Issue 5개 중 2개 이상 작업 시작 (브랜치 생성)
- ☐ A트랙: 외부 OSS 1개 확정 + CONTRIBUTING.md 읽음
- ☐ B트랙: 자체 프로젝트 명명 / Logo 또는 한 줄 슬로건

### 다음 주(3회차)까지 할 것 (개인)
- @user1: ___
- @user2: ___
- @user3: ___

### 멘토 사인
- 트랙 사인: ☐ 멘토명 ___
- Issue 5개 라벨 사인: ☐ 멘토명 ___
- 역할 매트릭스 사인: ☐ 멘토명 ___
```

### Phase 4 — 정리 + 사진 5분

- 팀 사진 (선택) — 2회차 시작 시점 단체 컷, 6회차 마무리에 비교용.
- 멘토는 각 팀 약속 카드를 PDF로 보존 (감사용).

### 멘토 운영 노트 (마스터 플랜 위험 §5.3 / §5.4 완충)

| 신호 | 즉시 대응 |
|---|---|
| 팀 분위기 3점 이하 | 멘토링 후 강사·멘토 합류 5분 1:1 청취 |
| 팀원 1명 결석 + 연락 두절 | 다음 주 시작 전 강사가 개별 메시지 |
| AI 로그 빈칸 + PR 본문이 AI 출력 그대로 | 4회차 채점 기준(검증 흔적 0점) 사전 경고 |
| 트랙이 정해졌는데 1주일 만에 흔들림 | 3회차 시작 시 "잠정 변경 OK" 룰 명시 |

---

## 사후 과제 (수업 후 1주일, 학생용)

> **왜 지금 이걸 배우는가**: 3회차 진입 전에 저장소가 차분히 정리돼야 한다. 5/14에 LICENSE/CONTRIBUTING을 박는 활동의 사전 설거지.

### 필수 과제 (3회차 시작까지)

| # | 과제 | 산출물 | 마감 |
|---|---|---|---|
| 1 | Issue 5개를 7개로 늘리기 (관리 감각 학습) | Issues 탭 7 Open | 5/13(수) 자정 |
| 2 | 팀원 각자 자기 GitHub 프로필에 팀 저장소 pinned 추가 | 프로필 화면 캡처 | 5/13 |
| 3 | A트랙: 외부 OSS의 CONTRIBUTING.md 읽고 핵심 3줄 메모 / B트랙: 자체 프로젝트 한 단락 비전 문서 | 메모 또는 vision.md | 5/13 |
| 4 | 다음 회차 사전 학습 — 라이선스 6종 이름만이라도 외우기 (MIT, Apache-2.0, GPL-2.0/3.0, AGPL-3.0, LGPL, MPL-2.0) | 자가 점검 | 5/14 강의 시작 전 |

### 선택 과제 (학생 자율, 누적 가산점)

| # | 과제 | 보상 |
|---|---|---|
| S1 | EX-2D AI 사용 로그를 표가 아닌 issue 형태로 저장소에 발행 (`tracking: AI usage log`) | AI 활용 평가 가산 |
| S2 | 팀 헌법(1회차)을 팀 저장소 `docs/team-charter.md`로 옮김 | 발표·문서화 평가 가산 |
| S3 | `gh issue list --state=open` 출력을 매주 월요일 단톡방에 자동 공유 (cron + script) | 자동화 첫 경험 |
| S4 | 자료 풀 §3.2 [KO] 자료(GitHub Korea 한국어 가이드) 1꼭지 정독 | 한국어 자료 누적 |

### 자가 점검 (3회차 입장 직전)

```
☐ 팀 저장소 URL 외움
☐ Issue 7 Open / 라벨 다 붙음
☐ 머지 PR 1개 이상 / squash 머지 사용
☐ 트랙 1줄 선언이 README에 박힘
☐ 역할 4명 매트릭스
☐ AI 사용 로그 표가 어디 있는지 알고 있음
```

---

## 강사 트러블슈팅 (FAQ + 흔한 사고)

> **왜 지금 이걸 배우는가**: 30분 실습 도중 일어나는 사고 95%는 권한·인증·충돌 셋이다. 강사가 5초 안에 진단할 수 있어야 한다.

### F1. "권한이 없다"고 push가 거부된다

증상:
```
remote: Permission to org/repo.git denied to user.
fatal: unable to access 'https://github.com/org/repo.git/': The requested URL returned error: 403
```

진단 순서:
1. `gh auth status` — 로그인 상태 확인.
2. 저장소 Settings → Collaborators 페이지에서 본인 이름 보임?
3. 초대 메일 또는 https://github.com/notifications 에서 invitation accept?
4. 2FA 설정됨? PAT 만료?

해결:
- Collaborator 미수락 → 초대 수락
- 2FA 미설정 → Profile → Settings → Password and authentication → Two-factor authentication
- HTTPS 인증 캐시 꼬임 → `gh auth refresh` 또는 PAT 재발급
- SSH 키 쓰는 학생 → `~/.ssh/id_ed25519.pub` 내용을 GitHub Settings → SSH and GPG keys 에 등록

### F2. "non-fast-forward" 에러 (push 거부)

증상:
```
! [rejected]        feat/x -> feat/x (non-fast-forward)
hint: Updates were rejected because the tip of your current branch is behind
```

진단: 다른 사람이 같은 브랜치에 먼저 push 했다.

해결:
```bash
git fetch origin
git rebase origin/feat/x
# 충돌 해결 후
git push --force-with-lease origin feat/x
```

> **`--force` 대신 `--force-with-lease`**. 두 명령의 차이를 학생에게 30초로 설명: "force는 무지성 덮어쓰기, force-with-lease는 다른 사람이 그 사이 push했으면 멈춘다."

### F3. 머지 충돌이 안 풀린다

증상: rebase 도중 같은 줄을 둘이 고쳐서 `<<<<<<<`, `=======`, `>>>>>>>` 마커가 보임.

해결:
```bash
# 마커가 있는 파일 열어서 셋 다 지우고 원하는 결과만 남김
# 예시: README.md
<<<<<<< HEAD
- 팀 메인테이너: @user1
=======
- 문서 담당: @user2
>>>>>>> chore/intro-docs

# → 둘 다 살리려면
- 팀 메인테이너: @user1
- 문서 담당: @user2

# 저장 후
git add README.md
git rebase --continue
```

> "마커는 git이 너에게 결정을 떠넘긴 것이다. 마커 셋 다 지우고 원하는 줄만 남기면 끝."

### F4. PR 본문에 비밀키를 실수로 commit 했다

> 마스터 플랜 위험 §5.5. 즉시 회수.

```bash
# 1) 키 즉시 폐기 (해당 서비스 console에서)
# 2) 새 키 발급
# 3) 히스토리에서 제거 (git filter-repo 권장)

# git filter-repo 설치
pip install git-filter-repo

# 파일 통째로 제거
git filter-repo --path config/secrets.yaml --invert-paths

# 또는 파일 안의 특정 문자열 마스킹
git filter-repo --replace-text replacements.txt
# replacements.txt 안에:
# AKIA0123456789==>***REMOVED***

# 4) force-push (협업자에게 사전 통보)
git push --force-with-lease origin main

# 5) 협업자는 다시 clone하거나 git fetch + git reset --hard origin/main
```

> 팀 단톡방에 사고 사실을 공개적으로 적는다. 숨기는 게 더 큰 사고로 이어진다.

### F5. "fatal: refusing to merge unrelated histories"

증상: 두 저장소를 합치려고 할 때.

해결:
```bash
git pull origin main --allow-unrelated-histories
```

> 흔히 본인 로컬 init한 폴더에 GitHub 저장소를 그대로 합칠 때 발생. 강의 중에 발생하면 학생에게 "그냥 새로 clone하고 거기서 작업해라"가 더 빠를 때 많다.

### F6. AI 도구가 회사/학교 정책상 막혀 있다

대안 우선순위:
1. Codespaces 안에서는 외부 LLM 호출이 제약 적음 (단, 토큰 별도)
2. Copilot Free (학교 이메일로 Education 계정 가능 — https://education.github.com)
3. 페어 워크 — 다른 학생의 Claude 화면을 보고 같이 검증
4. AI 없이 PR 본문을 6요소로 직접 쓰는 것도 합법 (단, AI 로그는 "도구 사용 0, 직접 작성" 한 줄로 기록)

### F7. 학생이 git을 한 번도 써본 적 없다

5분 응급 처치 (멘토링 첫 5분 또는 사전 학습 보충):

```bash
# 0) 가장 짧은 git 입문
git --version
git config --global user.name "Name"
git config --global user.email "email@x.com"

# 1) 하나의 사이클을 손에 익힘
git clone https://github.com/<team>/<repo>.git
cd repo
git switch -c first-branch
echo "hi" >> README.md
git add README.md
git commit -m "chore: my first commit"
git push -u origin first-branch
gh pr create
```

> 7개 명령어를 외울 때까지 다른 거 안 가르친다. 다른 명령은 이걸 외운 다음에.

---

## 부록 A: 슬라이드 변환 가이드

> **왜 지금 이걸 배우는가**: 본 마크다운을 Slidev/Marp/Keynote로 변환할 때, 어디가 슬라이드 구분점인지 명시.

### 변환 룰

- `## ` (H2) → 슬라이드 섹션 구분 (1섹션 = 슬라이드 묶음)
- `### 슬라이드 #N — 제목` → 단일 슬라이드 1장
- 그 외 `### ` 헤딩 → 강사 노트로 들어감 (학생 핸드아웃에는 그대로 노출)
- 코드 블록 → 슬라이드에는 핵심 5줄 이내, 전체는 핸드아웃에
- 표 → 슬라이드에는 6행 이내, 더 길면 둘로 쪼갬

### 예상 슬라이드 수 (본 회차)

| 구간 | 슬라이드 수 (#) |
|---|---|
| 표지 + 도입 + LO | #1~#5 (5장) |
| GitHub Flow 시연 | #6 (1장, 시연이 메인) |
| 좋은 Issue/PR 해부학 | #8~#9 (2장) |
| AI 미니 활동 | #10 (1장 + 라이브 데모) |
| 트랙 결정 | #11 (1장) |
| 마무리 (전이 + 핵심 메시지) | #12~#13 (2장) |
| **합계** | **약 13장 (90분 기준 6.9분/슬라이드)** |

### Slidev 변환 명령 (선택)

```bash
# Slidev 설치 (한 번만)
npm install -g @slidev/cli

# 본 마크다운 일부를 slides.md로 추출 후
slidev slides.md
# → 브라우저에서 발표 모드 / PDF 내보내기 가능
```

> 자료 풀 §3.6 (6회차 자료) — Slidev 공식 사이트 https://sli.dev .

### Marp 변환 (대안)

```bash
npm install -g @marp-team/marp-cli
marp slides.md --pdf
# slides.pdf 출력
```

---

## 부록 B: 학생용 빠른 참조 카드 (1쪽 인쇄용)

> 강의 시작 전 1쪽 인쇄해서 책상에. 90분 동안 무한 참조.

### B.1 GitHub Flow 7단계

```
1. git switch -c <branch>          # 새 브랜치
2. (편집)                            # 변경
3. git add . && git commit -m "..."  # 커밋
4. git push -u origin <branch>      # 푸시
5. gh pr create                      # PR 발행
6. gh pr review --approve / --comment + gh pr merge --squash --delete-branch
7. git switch main && git pull       # 정리
```

### B.2 자주 막히는 명령

```
git status                # 지금 뭐가 변경됐나
git diff                  # add 전 마지막 방어선
git log --oneline -5      # 최근 커밋 5개
git branch                # 내 브랜치 목록
git switch -               # 직전 브랜치로 (- 한 글자)
git restore <file>        # 변경 취소 (로컬, 미add)
git reset HEAD <file>     # add 취소
git fetch origin          # 원격 변경 가져오기 (머지 안 함)
git pull --rebase         # 가져오면서 rebase
```

### B.3 좋은 Issue 5요소 (BUG 기준)

```
1. 제목 (검색 가능, 한 줄)
2. 환경 (OS / 버전)
3. 재현 (1, 2, 3 순서)
4. 기대 vs 실제
5. 보조 (스크린샷 / 로그 / MRE)
```

### B.4 좋은 PR 6요소

```
1. 제목  <type>: <요약>
2. 무엇을  1~3줄
3. 왜      이슈 링크
4. 어떻게  접근
5. 검증   테스트/스크린샷
6. 관련   Closes #N
```

### B.5 라벨 5종

```
bug          (#d73a4a)
enhancement  (#a2eeef)
documentation (#0075ca)
good first issue (#7057ff)
help wanted  (#008672)
```

### B.6 AI 사용 로그 양식

```
| 작업 | 도구/모델 | 프롬프트 | AI 출력 | 사람이 검증한 부분 |
```

### B.7 막혔을 때 호출 순서

```
1) 옆 사람에게 화면 보여주기 (1분)
2) 강사·멘토에게 손 들기 (3분 안에)
3) 단톡방에 #help-2회차 (5분 안에)
4) Stack Overflow / GitHub Discussions
```

---

## 부록 C: A/B 트랙별 2회차 마무리 액션 (간략)

> 트랙별로 다음 주(3회차)까지의 행동이 갈린다. 본 회차 마지막에 트랙별 박스로 노출.

### A트랙 (외부 OSS 기여)

```
☐ 후보 외부 OSS 1개 확정 (1회차 후보 3개 → 1개)
☐ 그 OSS의 CONTRIBUTING.md 읽고 핵심 3줄 메모
☐ good-first-issue 5개를 본 팀 저장소 Issue로 옮겨 적기 (분석 노트)
☐ 메인테이너 응답 SLA 확인 (최근 머지 PR 5개의 머지 주기 평균)
☐ 본 팀 저장소를 "분석/실험용"으로 명시 (README에 한 줄)
```

### B트랙 (자체 공개 저장소)

```
☐ 자체 프로젝트 명명 + 한 단락 비전(vision.md)
☐ 본 팀 저장소를 "메인 프로젝트"로 명시
☐ Issue 5개를 1주차 작업으로 채움 (구체적, 7일 안에 끝낼 단위)
☐ 6주 후 "외부 누군가가 fork·issue 남기게" 1줄 목표
☐ (선택) 로고 또는 슬로건 1줄
```

### A→B 하이브리드 (잠정)

```
☐ A로 시작, 4회차 시점에 외부 응답 없으면 B 보조로 전환
☐ B 보조는 "외부 OSS 분석에 도움되는 mini-tool" 형태 권장
☐ 4회차 멘토링에서 의사결정
```

---

## 부록 D: 인용 출처

> 본 회차에서 사용한 모든 외부 자료. 자료 풀 `_workspace/03_reference_pool.md` §1·§3.2 등재 출처만 사용.

### D.1 본문 각주 정의

[gh-flow]: https://docs.github.com/en/get-started/using-github/github-flow
[gh-pr]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[gh-pr-std]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/managing-and-standardizing-pull-requests
[gh-issues]: https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues
[gh-trending]: https://github.com/trending
[gh-pat]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
[conv]: https://www.conventionalcommits.org/

### D.2 1차 출처 표 (자료 풀 §1, 본 회차 사용분)

| # | 제목 | 발행처 | 발행일 | URL |
|---|---|---|---|---|
| [2] | About pull requests | GitHub Docs | live (조회 2026-05-04) | https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests |
| [4] | GitHub flow | GitHub Docs | live (조회 2026-05-04) | https://docs.github.com/en/get-started/using-github/github-flow |
| [5] | About issues | GitHub Docs | live (조회 2026-05-04) | https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues |

### D.3 보조 출처 (자료 풀 §1.1)

| 약칭 | 제목 | 발행처 | URL |
|---|---|---|---|
| GH-Issues-Docs | About issues | GitHub Docs | https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues |
| GH-PR-Std | Managing and standardizing pull requests | GitHub Docs | https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/managing-and-standardizing-pull-requests |
| GH-Profile-README | Managing your profile README | GitHub Docs | https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme |
| GH-CLI | GitHub CLI manual | GitHub | https://cli.github.com/manual/ |

### D.4 자료 풀 §3.2 사례 저장소 (본 회차 노출분)

| # | 저장소 | 라이선스 | 본문에서의 등장 | URL |
|---|---|---|---|---|
| 2A-1 | firstcontributions/first-contributions | MIT | 사후 과제(선택) — 첫 PR 튜토리얼 | https://github.com/firstcontributions/first-contributions |
| 2A-3 | public-apis/public-apis | MIT | docs PR 입문 예시 (강의 안 직접 노출 아니나 학생 자율 탐색) | https://github.com/public-apis/public-apis |
| 2A-4 | freeCodeCamp/freeCodeCamp | BSD-3-Clause | A트랙 한국어 번역 후보 | https://github.com/freeCodeCamp/freeCodeCamp |
| 2A-5 | vercel/next.js (docs/) | MIT | EX-2A 단어 빈도 화면 | https://github.com/vercel/next.js |
| (1A-2) | huggingface/transformers | Apache-2.0 | EX-2A 단어 빈도 화면 | https://github.com/huggingface/transformers |
| (1A-5) | astral-sh/uv | MIT/Apache-2.0 | EX-2A 단어 빈도 화면 | https://github.com/astral-sh/uv |

### D.5 AI 도구 (자료 풀 §3.2 B / §4 카탈로그)

| 도구 | 본 회차 용도 | URL |
|---|---|---|
| GitHub Copilot Free | EX-2D 선택지 1 | https://github.com/features/copilot |
| Claude (claude.ai 웹) | EX-2D 선택지 2 (권장) | https://claude.ai |
| Conventional Commits | 커밋 메시지 컨벤션 | https://www.conventionalcommits.org/ |

### D.6 인용 양식 일관성 체크 (자료 풀 §2)

본 문서는 자료 풀 §2의 형식 A(본문 각주형) + 형식 C(표 안 인용)를 사용. 형식 B(블록 인용)는 본 회차에 사용 안 함.

---

## 부록 E: 회차 간 일관성 점검표 (작가 자가 검증)

> content-qa-reviewer가 본 회차를 감사할 때 동일 항목을 본다.

### E.1 마스터 플랜 정렬 (§3.3 매트릭스)

- ☑ 핵심 메시지: "오픈소스의 기본 언어는 코드가 아니라 Issue · Branch · Commit · PR · Review" — 도입(슬라이드 #1)과 마무리(슬라이드 #13) 양쪽에 동일 문장 (샌드위치 룰).
- ☑ LO 1·2·3 모두 슬라이드 #5 박스에 명시.
- ☑ 도입 훅: 인기 OSS Issues 단어 빈도 (EX-2A) — 마스터 플랜 도입 훅과 일치.
- ☑ 직전 전이 문장: "1회차에서 우리는 '왜'를 봤다. 오늘부터는 '어떻게'를 본다. 그 시작은 코드가 아니라 단어다." — 슬라이드 #1 강사 스크립트.
- ☑ 다음 회차 전이 문장: "오늘 우리는 저장소를 살아있게 만들었다. 다음 주에는 ..." — 슬라이드 #12.
- ☑ 누적 산출물 5개 — EX-2C(저장소+PR+Issue), EX-2E(트랙), 멘토링(역할 매트릭스), EX-2D(AI 로그) 모두 매핑.
- ☑ 평가 매핑: GitHub 협업 20% 1차 측정점(EX-2C) / 실제 기여 25% 진입점(EX-2E) — 본 문서 "평가와의 연결" 박스에 명시.
- ☑ AI 활용 미니 활동 1개 이상: EX-2D(보강 요청 2 반영).

### E.2 운영표(02) 정렬 (§2.2)

- ☑ 시간 분배 운영표와 동일: 0:00~1:30 강의 / 1:30~2:30 멘토링.
- ☑ 실습 ID 5개 모두 노출: EX-2A, EX-2B, EX-2C, EX-2D, EX-2E.
- ☑ 위험 신호 & 대응(EX-2C 30% 미완) → 본 문서 Fallback 섹션에 명시.

### E.3 자료 풀(03) 정렬 (§3.2)

- ☑ Tier-A 사례 저장소 5개 이상 자료 풀에서 인용 (firstcontributions, freeCodeCamp, public-apis, next.js, transformers, uv).
- ☑ AI 도구는 자료 풀 §3.2 B에서만 인용 (Copilot Free, Claude, Conventional Commits).
- ☑ 1차 출처 [2][4][5]를 부록 D.2에 표 형식으로 명시.
- ☑ [KO] 자료 노출: 자료 풀 §3.2 C의 GitHub Korea(docs.github.com/ko) — 사전 학습 C 섹션.

### E.4 lecture-writing-style 스킬 정렬

- ☑ 분 단위 진행 헤딩 (`## 0:00~0:03 — ...`).
- ☑ 모든 섹션 첫 줄 "왜 지금 이걸 배우는가" 한 문장.
- ☑ 코드/명령어 fenced code, 학생이 복사 가능.
- ☑ 강사 톤: 반말 강의 톤(친근하지만 전문적).
- ☑ 외래어 첫 등장 시 병기: PR/풀 리퀘스트 (Phase 3 Phase 머리), Issue/이슈, Branch/브랜치 (슬라이드 #6 직전), Review/리뷰 (Phase 3 머리), Merge/머지 (Phase 3 머리), Pull Request/풀 리퀘스트 (슬라이드 #6 6단계).
- ☑ 인용은 자료 풀 등재 출처만 사용.
- ☑ A/B 트랙 분기 — 부록 C에서 명시 (본 회차는 트랙 결정 회차이므로 강의 본문은 공통, 부록에 분기).

---

## 부록 F: 작가의 가정 (이 회차 작성 시 추정한 사항)

> 마스터 플랜·운영표·자료 풀이 명시하지 않아 lecture-author가 추정으로 채운 부분. 사용자 피드백 시 우선 검토 대상.

| # | 가정 | 근거 | 영향 |
|---|---|---|---|
| F1 | 학생 git 버전이 2.40+ | `git switch`/`restore`가 git 2.23부터, 안정적 사용은 2.40+ 권장 (강의 시연용) | 구버전이어도 강의 동작은 가능. 일부 옵션 차이 강사가 즉석 보완 |
| F2 | `gh` CLI 사용을 권장 (필수 아님) | 자료 풀 §3.1 / 사전 학습 C에 등재. 웹 UI 대안 병기 | 학생이 인증 못 풀어도 웹 UI로 동일 결과 |
| F3 | 팀 인원 3~5명, 평균 4명 | 마스터 플랜 §0 / §9 추정 | EX-2C 4명 기준 시간 배분 (12분/30분 안에 4 PR 가능) |
| F4 | 학생이 사전 학습 30분을 한다 | 마스터 플랜 §7 사전 학습 권장 | 안 하면 0:00~0:13 안에 강사가 5분 도구 점검 흡수 — Run-of-Show 복원력 |
| F5 | EX-2D AI 도구로 Claude (claude.ai 웹) 또는 Copilot Free 둘 중 하나 | 자료 풀 §3.2 B / §4 카탈로그 학생 무료 옵션 | 회사 정책상 막힌 학생 대안은 Fallback F6에 명시 |
| F6 | 트랙 결정은 본 회차 강의 마지막 5분(EX-2E)에 잠정, 멘토링에서 최종 사인 | 마스터 플랜 §4.2 / 운영표 §2.2 | 3회차 시작 시 "잠정 변경 OK" 룰 명시(부록 E.4 Fallback) |
| F7 | 강사가 데모 저장소 `instructor/oss-edu-demo`를 사전 준비 | EX-2B 시연용. 운영표 EX-2B 준비물에 명시 | 사전 준비 안 됐으면 라이브로 즉석 만들기(시연 시간 2분 추가) |
| F8 | 한국 대학 강의장에 GitHub 접근이 자유로움 | 일반 가정 | 캠퍼스 방화벽 차단 시 사전 IT 협의 필요 — 운영팀 책임 |
| F9 | 멘토 1인당 팀 2~3개 | 마스터 플랜 §9 | 5팀 = 멘토 2명. 7팀 이상이면 멘토 3명 또는 팀별 코칭 시간 5분으로 단축 |

---

## 마무리 — 회차 끝 문장

> *"오늘 너희는 GitHub에 첫 흔적을 남겼다. 머지된 PR 1개. 라벨 붙은 Issue 5개. 이것이 6주 누적의 1주차 흔적이다.*
>
> *다음 주에 우리는 그 흔적이 외부 사람도 신뢰할 수 있게 — LICENSE, CONTRIBUTING, Code of Conduct, SECURITY, Issue/PR Template으로 — 골격을 세운다.*
>
> *오픈소스의 기본 언어는 코드가 아니라 Issue · Branch · Commit · Pull Request · Review 다섯 단어다. 이 다섯 단어는 6주 후 너희 손가락에 박혀 있을 거다."*

---
