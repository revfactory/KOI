# 2회차 — GitHub 협업 워크플로우와 오픈소스 운영 기본기

> **첫 줄 (직전 회차 전이 문장):**
> *"1회차에서 우리는 '왜 오픈소스인가'를 본 것이다. 오늘부터는 '어떻게 참여하는가'를 본다. 그 시작은 코드가 아니라 단어다."*
>
> **핵심 메시지:**
> *오픈소스의 기본 언어는 코드가 아니라 Issue · Branch · Commit · Pull Request · Review 다섯 단어다*

---

## 회차 표지

- **회차**: 2회차 (총 6회 중)
- **일자/시간**: 2026-05-07 (목) 19:00~21:00
- **강의와 멘토링**: 19:00~20:30 강의 90분 / 20:30~21:30 멘토링 60분
- **선수 지식**: GitHub 계정 보유, 1회차 후보 프로젝트 3개 정리, 한 가지 언어 기본(Python/JS 권장), AI 챗봇 1개(Claude 또는 Copilot) 사용 경험
- **선수 도구**: git CLI(2.40+ 권장), GitHub CLI(`gh`) 선택, VS Code 또는 동급 에디터, 브라우저
- **이 회차가 끝나면**: 팀 GitHub 저장소가 살아 있고, 라벨 붙은 Issue 5개와 머지된 PR 1개가 있으며, A/B 트랙이 1줄 선언으로 정해지고, 역할 분담 매트릭스가 완성된다.

> 표기 규칙 — 외래어는 첫 등장 시 영문 + 한글(약어)을 병기한다(예: Pull Request(풀 리퀘스트, PR)). 두 번째부터는 한글 또는 약어로 통일한다.

### 학습 목표 (Learning Objectives — 핸드아웃 첫 페이지 박스)

> **LO 1**. 학생은 GitHub Flow(브랜치 생성 → 변경 → PR → 리뷰 → 병합 → 브랜치 삭제)를 자기 손으로 1사이클 실행할 수 있다.
>
> **LO 2**. 학생은 좋은 Issue(재현 가능한 버그 리포트, 명확한 기능 제안)와 좋은 PR(제목, 요약, 스크린샷, 이슈 링크)을 작성할 수 있다.
>
> **LO 3**. 학생은 팀 저장소에 README/Issue/PR을 갖추고, 본인 트랙(A 외부 기여 / B 자체 운영)을 확정할 수 있다.

### 평가와의 연결

오늘 만드는 산출물은 이후 평가의 첫 측정점이다.

- 첫 머지 PR을 만들지 못하면 **GitHub 협업 20%** 채점에서 1차 측정점이 비어 있다.
- 트랙을 정하지 않으면 **실제 기여·운영 25%**의 진입점이 비어 있는 채로 3회차를 시작한다.
- PR 본문에 AI 로그를 남기지 않으면 **AI 활용 능력 20%**의 누적 기록이 끊긴다. AI 활용은 4회차부터 본격화되지만, 오늘 한 번 먼저 연습한다.

---

## 사전 학습 (수업 전 30분, 학생용)

1회차에서 우리는 GitHub을 "구경"했다. 이번 주는 "참여"한다. 강의 시간에 처음 git을 깔면 30분이 그대로 사라진다. 사전 학습으로 도구를 손에 쥔 채로 들어와야 90분 실습이 살아난다.

### A. 도구 점검 체크리스트 (10분)

학생은 강의 시작 전에 아래 4개 명령을 통과시켜 놓는다.

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

- ☐ `git --version`이 2.40 이상 출력된다. 구버전이어도 강의 진행은 가능하지만 일부 옵션 차이가 있다.
- ☐ `user.name`, `user.email` 설정을 완료했다. 이메일은 GitHub 계정과 일치시키는 것을 권장한다.
- ☐ `gh auth login`을 통과했거나 PAT(Personal Access Token)를 발급했다. 참고: [GitHub Docs, "Managing your personal access tokens"][gh-pat]
- ☐ VS Code에서 git diff와 git history 확장이 동작한다.

### B. 1회차 산출물 다시 꺼내기 (10분)

1회차에서 우리는 후보 프로젝트 3개를 정리표로 만들었다. 강의 시작 전에 그 표를 한 번 더 본다.

1회차 결석으로 후보 표가 없다면 사전 학습 시간 10분 안에 GitHub Trending([GitHub Trending][gh-trending])에서 관심 도메인 1개의 인기 저장소 3개를 추려둔다. 그래야 수업 시작부터 따라갈 수 있다.

학생용 후보 기록 양식:

1. **후보 1**
   - 저장소(org/repo): ___
   - 분야: ___
   - 라이선스: ___
   - 최근 커밋: ___
   - 기여 진입점 후보: ___
2. **후보 2**
   - 저장소(org/repo): ___
   - 분야: ___
   - 라이선스: ___
   - 최근 커밋: ___
   - 기여 진입점 후보: ___
3. **후보 3**
   - 저장소(org/repo): ___
   - 분야: ___
   - 라이선스: ___
   - 최근 커밋: ___
   - 기여 진입점 후보: ___

### C. 사전 읽기 — 10분 (3개 중 2개 이상)

- **GitHub flow** — GitHub Docs  
  https://docs.github.com/en/get-started/using-github/github-flow  
  우선순위: ★★★ (필수)

- **About pull requests** — GitHub Docs  
  https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests  
  우선순위: ★★★ (필수)

- **About issues** — GitHub Docs  
  https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues  
  우선순위: ★★

- **GitHub 한국어 가이드 [KO]** — GitHub Korea  
  https://docs.github.com/ko  
  우선순위: ★★

읽으면서 머릿속에 남겨야 할 한 줄 정의:

> *"GitHub Flow는 짧은 브랜치와 PR 중심의 협업 워크플로우이며, PR은 변경 제안을 논의하고 리뷰한 뒤 병합하는 핵심 협업 기능이다."* — GitHub Docs ([gh-flow], [gh-pr])

---

## 0:00~0:03 — 직전 전이 + 핵심 메시지 (샌드위치 도입)

### 슬라이드 #1 — 표지

```text
2회차
GitHub 협업 워크플로우와 오픈소스 운영 기본기

오픈소스의 기본 언어는 코드가 아니라
Issue · Branch · Commit · Pull Request · Review 다섯 단어다.
```

오늘은 1회차에서 고른 후보 프로젝트를 실제 협업 공간으로 옮기는 날이다. 끝나는 시점에는 팀 GitHub 저장소, 라벨 붙은 Issue 5개, 머지된 PR 1개가 남아야 한다.

### 슬라이드 #2 — 지난 주 만든 것과 오늘 만들 것

```text
1회차 → 후보 프로젝트 3개 + 팀 결성 + 프로필 README 초안
                    ↓
2회차 → 팀 저장소 + Issue 5개 + 첫 머지 PR + 트랙 확정
                    ↓
3회차 → 신뢰 구조 (LICENSE/CONTRIBUTING/COC/SECURITY/Templates)
```

1회차 도입에서 약속한 전이 문장, *"오늘 우리는 후보 3개를 손에 쥐었다. 다음 주에는 그중 하나에 깃발을 꽂는다."*의 "다음 주"가 바로 오늘이다.

---

## 0:03~0:08 — 인기 OSS Issues 단어 빈도 (도입 훅)

핵심 메시지의 "코드가 아니라 단어"를 실제 저장소 Issue 화면에서 확인한다. 아래 세 저장소의 Issues 탭을 보고 자주 보이는 단어를 찾는다.

### 슬라이드 #3 — 화면을 갈라서 인기 OSS Issue 탭 3개

```text
[좌] vercel/next.js Issues
[중] huggingface/transformers Issues
[우] astral-sh/uv Issues
```

실습 URL:

- https://github.com/vercel/next.js/issues
- https://github.com/huggingface/transformers/issues
- https://github.com/astral-sh/uv/issues

5분 동안 세 화면에서 가장 자주 보이는 단어 3개를 찾아 적는다. 영어 단어 그대로 적어도 된다.

학생 답안 예상 풀:

- **`repro` / `reproduction`**: 버그를 재현할 수 있는 최소 코드나 순서. OSS 협업에서는 "재현 안 되는 버그는 고치기 어렵다"는 뜻으로 쓰인다.
- **`feature request`**: 기능 제안. 코드 기여 전에 토론이 먼저 필요하다는 신호다.
- **`bug` / `regression`**: 버그 또는 회귀(이전 동작이 깨짐). 라벨로 트리아지(triage, 분류)한다.
- **`good first issue`**: 처음 기여하는 사람용 이슈. 메인테이너가 신규 기여자에게 열어 둔 진입점이다.
- **`docs` / `documentation`**: 문서 관련 이슈. docs PR이 첫 기여로 추천되는 이유와 연결된다.
- **`help wanted`**: 도움 요청. 메인테이너가 외부 기여자의 도움이 필요하다는 신호다.

정리 문장:

> 이 단어들이 GitHub 협업 언어다. 우리도 오늘 이 단어를 직접 쓴다.

---

## 0:08~0:13 — LO 3개 + 오늘 산출물 약속 (강의)

### 슬라이드 #4 — 오늘 만들 것 (산출물 약속)

```text
□ 팀 GitHub 저장소 1개  (public 또는 internal-but-soon-public)
□ 라벨 붙은 Issue 5개 이상
□ 첫 머지 PR 1개  (팀 내 PR도 OK)
□ 트랙 확정 1줄 선언문  (A or B)
□ 역할 분담 매트릭스  (Maintainer / Contributor / Docs / AI-Automation)
```

### 슬라이드 #5 — Learning Objectives 박스

```text
LO 1.  GitHub Flow를 자기 손으로 1사이클 실행할 수 있다.
       (브랜치 → 변경 → PR → 리뷰 → 병합 → 브랜치 삭제)

LO 2.  좋은 Issue와 좋은 PR을 작성할 수 있다.
       (제목 / 요약 / 재현 / 스크린샷 / 이슈 링크)

LO 3.  팀 저장소를 살아있게 만들고, 본인 트랙(A/B)을 확정할 수 있다.
```

오늘 체크박스 5개를 90분 안에 채운다. 못 채운 항목은 멘토링 60분에서 반드시 보완한다. 다음 주 3회차는 이 산출물이 있다는 전제로 시작한다.

---

## 0:13~0:25 — GitHub Flow 7단계 시연 (12분)

30분 실습에 들어가기 전에 GitHub Flow의 한 사이클을 눈으로 보고 손으로 체크한다. 여기서 보는 7단계가 곧 팀 실습의 모범 답안이다.

### 슬라이드 #6 — GitHub Flow 7단계 체크리스트

학생은 시연을 보면서 핸드아웃에 ✓ 한다.

```text
☐ 1. main에서 새 브랜치 생성       git switch -c <branch>
☐ 2. 변경 작업                       (편집)
☐ 3. add → commit                    git add . && git commit -m "..."
☐ 4. push                            git push -u origin <branch>
☐ 5. PR 발행                         gh pr create  (또는 웹 UI)
☐ 6. 리뷰 코멘트 1개 이상 → 머지   gh pr review --approve / gh pr merge
☐ 7. 브랜치 삭제                     git branch -d <branch>
```

### GitHub Flow 명령어 시퀀스

아래 예시는 데모용 저장소 `instructor/oss-edu-demo`를 기준으로 한다. 팀 실습에서는 각 팀 저장소 이름으로 바꿔 실행한다.

#### 1단계 — 저장소 클론, main 갱신

```bash
gh repo clone instructor/oss-edu-demo
cd oss-edu-demo
git switch main
git pull
```

#### 2단계 — 새 브랜치(Branch / 브랜치)

```bash
git switch -c feat/add-greeting
```

`git switch`는 2019년 git 2.23부터 등장한 브랜치 이동·생성 명령이다. `git checkout`도 동작하지만, `switch`가 의도를 더 명확하게 드러낸다.

#### 3단계 — 변경(Commit / 커밋 전 작업)

데모용 README에 한 줄을 추가한다.

```bash
echo "Hello from $(git config user.name)" >> README.md
git status
git diff
```

`git diff`는 add 직전의 마지막 방어선이다. diff를 보지 않고 add하면 비밀키나 원치 않는 파일을 커밋할 위험이 커진다.

#### 4단계 — Add + Commit

```bash
git add README.md
git commit -m "docs: add greeting line for demo"
```

커밋 메시지는 [Conventional Commits][conv] 방식을 따른다. `docs:`, `feat:`, `fix:`, `chore:`, `test:` 같은 prefix를 사용하면 다음 회차 changelog 자동화가 쉬워진다.

#### 5단계 — Push

```bash
git push -u origin feat/add-greeting
```

`-u`는 처음 push할 때만 필요하다. 이후엔 `git push`만으로 충분하다. 같은 뜻으로 `--set-upstream`이라고도 쓴다.

#### 6단계 — PR 발행(Pull Request / 풀 리퀘스트)

CLI 방식:

```bash
gh pr create \
  --base main \
  --head feat/add-greeting \
  --title "docs: add greeting line for demo" \
  --body "## 무엇을\nREADME에 인사말 한 줄 추가.\n\n## 왜\n2회차 GitHub Flow 연습용.\n\n## 어떻게 검증\n- main에 머지 후 README에 줄이 보이면 끝.\n\n## 관련 이슈\n#1 (있다면)"
```

웹 UI 방식:

- 푸시 직후 GitHub 화면 상단의 노란 띠에서 **Compare & pull request** 버튼을 누른다.
- base가 `main`, compare가 방금 만든 브랜치인지 확인한다.
- 제목과 본문을 채우고 PR을 만든다.

CLI와 웹 UI는 결과가 같다. CLI는 자동화에 좋고, 웹 UI는 처음 PR을 보는 팀원에게 흐름을 설명하기 쉽다.

#### 7단계 — 리뷰 코멘트 → 머지(Review / 리뷰 + Merge / 머지)

본인 PR이라도 다른 팀원이 1줄 이상 코멘트를 달아야 머지한다. 팀 프로젝트에서는 "내가 만든 변경을 다른 사람이 읽는다"는 절차 자체가 중요하다.

```bash
# 다른 팀원 계정에서
gh pr review 1 --comment --body "LGTM. README 라인 끝에 줄바꿈 있는지만 확인."

# 머지
gh pr merge 1 --squash --delete-branch
```

`--squash`는 PR 안의 여러 커밋을 한 커밋으로 합쳐 main에 올린다. 다른 옵션은 `--merge`(기본 머지 커밋), `--rebase`(rebase 머지)다. 팀이 처음이면 `--squash`가 가장 깔끔하다.

#### 결과 확인

```bash
git switch main
git pull
git log --oneline -5
```

체크:

- ☐ 7단계 흐름을 한 번 봤다.
- ☐ `git diff`를 add 전에 확인해야 하는 이유를 설명할 수 있다.
- ☐ `docs:`, `feat:`, `fix:` 같은 Conventional Commits prefix를 한 가지 이상 말할 수 있다.
- ☐ PR은 변경 제안과 리뷰, 병합을 한 화면에 묶는 협업 단위라는 점을 이해했다.

---

## 0:25~0:55 — 팀 저장소 첫 PR 사이클 (30분, 회차 2 핵심)

본 회차의 핵심 산출물인 "팀 저장소 + 첫 머지 PR + Issue 5개"를 여기서 만든다. 이 시간이 빠지면 1회차 후보 탐색과 3회차 신뢰 구조 만들기가 연결되지 않는다.

### 산출 약속 (팀당)

```text
[1] 팀 GitHub 저장소  (public 또는 internal-but-soon-public)
[2] 첫 머지 PR 1개   (팀원 1명이 발행, 다른 팀원이 리뷰)
[3] 라벨 붙은 Issue 5개
```

### 슬라이드 #7 — 30분을 어떻게 쓸 것인가 (시간 분배)

```text
0:25~0:30  (5분)  팀 저장소 생성 + README 1줄 + 권한 부여
0:30~0:42 (12분)  팀원 각자 브랜치 생성 → 한 줄씩 추가 → push
0:42~0:50  (8분)  서로 PR 리뷰 → 머지
0:50~0:55  (5분)  Issue 5개 발행 + 라벨링
```

### Phase 1 — 팀 저장소 생성 (5분)

팀당 1명(가칭: Maintainer 역할)이 저장소를 만들고, 나머지 팀원을 Collaborator로 초대한다.

#### A. 웹 UI 방식

1. https://github.com/new 로 접속한다.
2. **Repository name**에 팀명 slug를 입력한다. 예: `team-kafka-cafeteria-bot`
3. **Description**에 한 줄을 적는다. 트랙 결정 전이라도 한 줄은 적는다.
4. **Public**을 선택한다. Private으로 시작해도 되지만 3회차에 public 전환을 권장한다.
5. **Add a README file**을 체크한다.
6. **Add .gitignore**에서 팀 언어를 선택한다. 예: Python, Node
7. **Choose a license**는 **None**으로 둔다. 라이선스 선택은 다음 주 핵심 주제다.

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

#### C. 팀원 초대(Collaborator)

웹 UI:

1. Settings로 이동한다.
2. Collaborators를 연다.
3. **Add people**을 누른다.
4. 팀원 GitHub ID를 입력한다.

CLI:

```bash
gh repo edit --add-collaborator user1
gh repo edit --add-collaborator user2
gh repo edit --add-collaborator user3
```

팀원이 초대 메일을 수락해야 push 권한이 생긴다. 초대 메일 확인은 https://github.com/notifications 또는 이메일 받은편지함에서 한다.

#### Phase 1 체크리스트

- ☐ 저장소 생성 완료: URL을 팀 노션 또는 단톡방에 공유했다.
- ☐ README 1줄 추가: 한 줄이라도 저장소 설명이 들어 있다.
- ☐ 모든 팀원이 Collaborator로 초대되었고 수락했다.
- ☐ 모든 팀원이 로컬에 clone했다.

### Phase 2 — 팀원 각자 브랜치 + 변경 + push (12분)

팀원 N명이 동시에 한 줄씩 README에 추가한다. 각자 다른 브랜치, 다른 PR을 만든다. 결과는 N개의 PR이다.

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

모두 같은 파일(`README.md`)을 건드리는 것이 의도다. 머지 순서에 따라 후순위 PR에 **머지 충돌(merge conflict)** 이 발생할 수 있고, 그 자체가 학습 포인트다.

#### Phase 2 체크리스트

- ☐ 팀원 각자 자기 브랜치를 만들었다. 브랜치 이름 규칙은 `<type>/<short-desc>`다.
- ☐ 각자 README에 한 줄씩 추가했다.
- ☐ 각자 push했다. 예: `git push -u origin <branch>`
- ☐ GitHub Actions 등 CI가 없는 상태라도 무방하다. 3회차에 추가한다.

### Phase 3 — PR 리뷰 + 머지 (8분)

짝꿍을 정해 서로 PR을 리뷰한다. 본인 PR을 본인이 머지하지 않는 것을 팀 룰로 둔다.

#### PR 발행 (CLI)

```bash
gh pr create \
  --base main \
  --head chore/intro-maintainer \
  --title "chore: introduce maintainer @user1" \
  --body "## 무엇을\nREADME에 메인테이너 소개 한 줄 추가.\n\n## 왜\n역할 분담을 README에 명시하기 위해.\n\n## 검증\n- 머지 후 README에 줄이 보이면 OK."
```

#### 리뷰 코멘트 (옆 팀원이 수행)

웹 UI:

1. PR 페이지를 연다.
2. **Files changed** 탭으로 간다.
3. 줄 옆 `+`를 눌러 코멘트를 작성한다.
4. **Start a review**를 누른다.
5. **Submit review**에서 **Approve**, **Comment**, **Request changes** 중 하나를 선택한다.

CLI:

```bash
# 옆 팀원 계정에서
gh pr review 1 --approve --body "좋다. 머지 OK."
```

#### 머지

```bash
gh pr merge 1 --squash --delete-branch
```

웹 UI에서는 **Squash and merge** 버튼을 누른 뒤 **Confirm squash and merge**, **Delete branch** 순서로 진행한다.

#### 머지 충돌(Merge Conflict) 발생 시

두 번째 PR부터 충돌이 날 가능성이 높다. 아래처럼 본인 브랜치를 main 기준으로 갱신하고 충돌 파일을 직접 정리한다.

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

`--force-with-lease`는 일반 `--force`보다 안전하다. 다른 사람이 그 사이 push했으면 멈춘다.

#### Phase 3 체크리스트

- ☐ 모든 팀원이 PR을 발행했다.
- ☐ 짝꿍 리뷰 코멘트가 1개 이상 달렸다.
- ☐ 모든 PR이 머지되었다. 충돌이 나면 해결까지 포함한다.
- ☐ 머지 후 브랜치 자동 삭제를 확인했다.

### Phase 4 — Issue 5개 + 라벨 (5분)

팀이 1주일 동안 할 일을 5개 Issue로 쪼갠다. 라벨로 분류한다.

#### Issue 발행 (웹 UI)

저장소 → Issues 탭 → **New issue** 순서로 들어간다.

#### Issue 발행 (CLI)

```bash
gh issue create \
  --title "feat: 캠퍼스 식단 API 조사" \
  --body "## 무엇\n캠퍼스 식단을 제공하는 API 또는 스크래핑 대상 조사.\n\n## 완료 조건\n- API 또는 페이지 URL 3개\n- 응답 형식 캡처\n\n## 누구\n@user2" \
  --label "enhancement,good first issue"
```

#### 표준 라벨 5종

GitHub은 새 저장소에 기본 라벨을 자동 생성한다. 그 위에 팀이 5종을 표준화한다.

- **`bug`**: 버그. 권장 색상은 빨강 `#d73a4a`.
- **`enhancement`**: 새 기능 또는 개선. 권장 색상은 파랑 `#a2eeef`.
- **`documentation`**: 문서. 권장 색상은 청록 `#0075ca`.
- **`good first issue`**: 첫 기여자 환영. 권장 색상은 보라 `#7057ff`.
- **`help wanted`**: 도움 요청. 권장 색상은 초록 `#008672`.

#### CLI로 라벨 일괄 생성

```bash
gh label create "good first issue" --color "7057ff" --description "Good for newcomers"
gh label create "help wanted" --color "008672" --description "Extra attention is needed"
# bug, enhancement, documentation은 GitHub 기본 라벨로 이미 존재
```

#### Phase 4 체크리스트

- ☐ Issue 5개를 발행했다.
- ☐ 각 Issue에 라벨 1개 이상을 붙였다.
- ☐ 최소 1개에 `good first issue` 라벨을 붙였다.
- ☐ 각 Issue에 본문 설명이 있다. 제목만 있는 Issue는 1주일 후 맥락을 잃기 쉽다.

### 전체 체크리스트 (산출물 검수)

- **팀 저장소**: URL이 단톡방 또는 노션에 공유되어 있다.
- **첫 머지 PR**: 머지 PR `#1` 또는 `#2`가 닫힘(merged) 상태다.
- **라벨 붙은 Issue 5개**: Issues 탭에서 "5 Open" 이상이고 각 Issue에 라벨이 있다.
- **권한 분배**: 팀원 모두 Collaborator다.
- **브랜치 정리**: 머지된 브랜치는 모두 삭제되었다.

### 막혔을 때 빠른 대응

- **`git push` 권한 거부**: Collaborator 초대 미수락일 가능성이 높다. 받은 메일에서 **View invitation**을 클릭한다.
- **2단계 인증(2FA) 미설정**: GitHub이 push를 차단할 수 있다. PAT 발급 또는 SSH 키 등록을 확인한다. 참고: [gh-pat]
- **머지 충돌을 못 풀겠음**: 충돌 마커(`<<<<<<<`, `=======`, `>>>>>>>`)가 있는 파일을 열고, 남길 줄만 남긴 뒤 `git add`, `git rebase --continue`를 실행한다.
- **30분 안에 못 끝냄**: 회고는 그대로 하고, 멘토링 첫 30분에 저장소·PR·Issue를 마무리한다.
- **GitHub 권한 또는 브라우저 문제**: GitHub Codespaces를 쓰거나 데모 저장소를 fork한 뒤 PR 흐름만 먼저 연습한다.

---

## 0:55~1:05 — 좋은 Issue / 좋은 PR의 해부학 (10분 강의)

방금 만든 5개 Issue가 제목만 있는 빈 Issue가 되지 않도록 좋은 Issue와 좋은 PR의 골격을 익힌다. 다음 주 3회차에는 이 양식을 `.github` 폴더의 템플릿으로 저장한다.

### 슬라이드 #8 — 좋은 Issue 5요소 (BUG 리포트 기준)

```text
1. 제목   짧고 검색 가능한 한 줄 (e.g. "Crash on file open with non-ASCII path")
2. 환경   OS / 버전 / 의존성 / 재현 환경 (1~3줄)
3. 재현   1, 2, 3 순서로 누가 따라해도 같은 결과 (Steps to reproduce)
4. 기대 vs 실제   "이래야 했는데 이렇게 됐다" 두 줄
5. 보조자료   스크린샷 / 로그 / 최소 재현 코드 (Minimal Reproducible Example, MRE)
```

출처: GitHub Docs, "About issues" ([gh-issues]).

### 슬라이드 #9 — 좋은 PR 6요소

```text
1. 제목   <type>: <짧은 요약>      e.g. "fix: handle non-ASCII path in open()"
2. 무엇을  변경의 핵심 1~3줄
3. 왜      이 변경이 왜 필요한가 (이슈 링크 권장)
4. 어떻게  핵심 알고리즘/접근의 한 단락
5. 검증   어떻게 테스트했나 (스크린샷/터미널 출력)
6. 관련   Closes #<issue> / Fixes #<issue> / Refs #<issue>
```

출처: GitHub Docs, "About pull requests" ([gh-pr]) / "Managing and standardizing pull requests" ([gh-pr-std]).

### 학생 핸드아웃 — 빈 PR Template (3회차 사전 빌드업)

다음 회차에 `.github/pull_request_template.md`로 저장소에 넣을 양식이다. 오늘은 PR 본문에 손으로 채운다.

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

### 좋은 Issue/PR 비교 — Before/After

#### Bad Issue (학생이 자주 쓰는 패턴)

```text
제목: 안 됨

본문: 실행하면 에러가 남. 도와주세요.
```

이 Issue는 정보가 너무 적다. 받은 사람이 무엇을 실행해야 하는지, 어떤 환경에서 에러가 나는지, 기대 결과가 무엇인지 알 수 없다.

#### Good Issue (5요소 적용)

```markdown
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

좋은 Issue는 좋은 PR을 부르고, 좋은 PR은 좋은 머지를 부른다. 오늘 만든 5개 Issue가 5요소를 갖추었는지 멘토링에서 점검받는다.

---

## 1:05~1:20 — AI로 PR 본문 다듬기 (15분, AI 미니 활동)

2회차에서 AI 사용 로그 개념을 처음 도입한다. 오늘 만든 첫 PR 본문을 AI로 6요소 양식에 맞춰 다듬고, 사람이 최소 1줄 이상 검증·수정한다.

### 슬라이드 #10 — AI 미니 활동의 의도

```text
오늘 만든 첫 머지 PR의 본문이 ...
부실하다. (한 줄짜리)

→ AI로 6요소 양식에 맞춰 다시 써본다.
→ 사람이 1줄 이상 검증/수정한다.
→ 그 흔적을 "AI 사용 로그"에 기록한다.

이게 4·5회차의 사전 리허설이다.
```

### Step 1 — AI 도구 선택 (학생 자유)

- **Claude (claude.ai 웹)**: 무료 티어 사용 가능. 긴 컨텍스트와 한국어 문장 다듬기에 유리하다.
- **GitHub Copilot Chat**: Copilot Free에서 월 50회 채팅을 제공한다. PR 컨텍스트를 IDE 안에서 보기 좋다.
- **GitHub Copilot in Pull Requests**: Copilot Free 한도 안에서 사용할 수 있다. GitHub UI에서 바로 제안받는 흐름에 적합하다.
- **Cursor**: 무료 티어 사용 가능. IDE에서 git diff를 직접 붙여 넣기 편하다.

### Step 2 — AI 프롬프트 (예시)

학생 핸드아웃에 그대로 둘 수 있는 프롬프트다. 첫 활동에서는 프롬프트를 새로 만들기보다 아래 양식을 그대로 써도 된다.

````text
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
````

### Step 3 — AI 출력 받기 (예상 패턴)

AI가 잘 답한 경우:

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

AI가 잘못 답하는 패턴과 사람이 잡아야 할 것:

- **변경하지 않은 파일을 변경했다고 적음**: `git diff` 실제 결과와 대조한다.
- **존재하지 않는 Issue 번호를 임의 생성**: Issues 탭에 실제로 있는 번호인지 확인한다.
- **"테스트 추가" 같은 거짓 검증 항목을 적음**: 실제로 테스트가 추가됐는지 확인한다.
- **한국어 요청을 무시하고 영어로 응답함**: 다시 요청하거나 직접 번역한다.

### Step 4 — 사람 검증 + PR 본문 업데이트

학생은 AI 출력을 그대로 복사하지 않는다. **최소 1줄 이상**을 자기 손으로 수정하거나 보완한다.

수정 패턴 예시:

- "TBD"를 실제 값으로 채운다. 없으면 "Issue 미발행"으로 명시한다.
- AI가 틀린 사실을 잡아 수정한다.
- 한국어가 어색한 부분을 자연스럽게 고친다.

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

### Step 5 — AI 사용 로그 양식

4회차에 본격화될 양식을 오늘 처음 채운다. 표 대신 아래 필드 5개를 한 묶음으로 기록한다.

```markdown
## AI 사용 로그 — 2회차

- **작업**: PR 본문 6요소 양식 변환
- **도구/모델**: Claude (claude.ai 웹, 2026-05-07)
- **프롬프트 요약**: "diff와 현재 본문을 6요소로 다시 써줘. 사실에 없는 건 TBD."
- **AI 출력 요약**: 6요소 골격 출력 + TBD 명시
- **사람이 검증한 부분**: TBD 1개를 "Issue 미발행"으로 교체. 테스트를 추가하지 않았는데 검증 항목에 적힌 내용을 삭제.
```

### 체크리스트

- ☐ AI에게 PR diff와 본문을 입력했다.
- ☐ AI 출력을 받았다. 스크린샷 또는 텍스트로 저장한다.
- ☐ 사람이 **1줄 이상** 수정하거나 보완했다.
- ☐ PR 본문을 GitHub에서 업데이트했다. `gh pr edit` 또는 웹 UI를 사용한다.
- ☐ AI 사용 로그 1묶음을 채웠다.

### Fallback

- AI가 부정확한 답을 주면 그 자체가 학습이다. "이게 왜 틀렸는지" 1줄 메모해서 로그에 남긴다.
- 무료 티어 한도 초과 시 옆 사람과 페어로 1번만 시도하고 결과를 공유한다.
- AI 도구가 학교나 회사 정책상 막혀 있으면 Copilot Free 또는 Codespaces 안의 Copilot을 사용한다.
- AI 없이 PR 본문을 직접 6요소로 쓰는 것도 가능하다. 이 경우 AI 로그에는 "도구 사용 0, 직접 작성"이라고 남긴다.

정리 문장:

> AI는 빈칸을 채우는 도구가 아니라, 빈칸을 의식하게 만드는 도구다. `TBD`가 보이는 순간 사람이 검증할 지점이 생긴다.

---

## 1:20~1:25 — 트랙 확정 1줄 선언 (5분)

트랙 결정은 3회차 진입 조건이다. 오늘 강의 끝에서는 잠정 결정이라도 1줄로 선언하고, 멘토링에서 최종 점검받는다.

### 슬라이드 #11 — 트랙 선택 가이드

```text
신호                                            → 권장 트랙
팀원 절반 이상이 PR 경험 있음                    → A
팀이 명확한 "직접 만들고 싶은 도구" 아이디어 보유 → B
팀원 다수 첫 OSS + 시간 제약 큼                  → B (난이도 조정 용이)
팀이 특정 OSS의 응답 SLA 미리 확인               → A
시간 부족 / 외부 응답 늦음                       → A→B 전환 또는 하이브리드
```

### 1줄 선언문 양식

```text
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

- ☐ 1줄 선언문을 노션, 단톡방, 저장소 README 중 한 곳에 적었다.
- ☐ 멘토링에서 확인받았다.
- ☐ 트랙별 후속 액션 1줄을 본인 메모에 적었다.

### 트랙별 후속 액션

#### A트랙 후속

- ☐ 후보 외부 OSS 1개를 확정한다. 1회차 후보 3개에서 1개로 좁힌다.
- ☐ 그 OSS의 `CONTRIBUTING.md`를 읽는다.
- ☐ `good-first-issue` 라벨 붙은 이슈 5개를 골라 본 팀 저장소 Issues에 분석 노트로 기록한다.
- ☐ 외부 메인테이너 응답 SLA를 확인한다. 최근 PR 머지 주기를 본다.

#### B트랙 후속

- ☐ 자체 프로젝트 1개를 확정한다.
- ☐ 본 팀 저장소를 그 프로젝트로 명명하거나 리네임한다.
- ☐ 첫 Issue 5개를 자체 프로젝트의 1주차 작업으로 채운다.
- ☐ "외부 누군가가 fork·issue를 남기게 하는" 6주 목표 1줄을 적는다.

---

## 1:25~1:30 — 회고 + 다음 회차 전이 (KPT 5분)

마지막 5분에는 KPT를 쓰고 다음 회차로 넘어간다. 핵심 메시지를 한 번 더 확인한다.

### KPT 양식

```text
Keep   (오늘 좋았던 것 / 다음에도 유지할 것)  ━━━━
       └ 한 줄

Problem (오늘 어려웠던 것 / 막힌 부분)      ━━━━
       └ 한 줄

Try    (다음 주에 시도해볼 것)              ━━━━
       └ 한 줄
```

### 슬라이드 #12 — 다음 회차 전이 문장

```text
오늘 우리는 저장소를 살아있게 만들었다.

다음 주에는 그 저장소가 외부 사람도 신뢰할 수 있게
— 라이선스, CONTRIBUTING, 운영 규칙으로 —
골격을 세운다.
```

### 슬라이드 #13 — 핵심 메시지 재노출 (샌드위치 마무리)

```text
오픈소스의 기본 언어는 코드가 아니라
Issue · Branch · Commit · Pull Request · Review 다섯 단어다.

오늘 우리는 그 다섯 단어를 손가락으로 한 번씩 쳤다.
다음 주에도 친다. 매주 친다. 6주 후에는 외운다.
```

---

## 1:30~2:30 — 멘토링 60분 가이드

강의에서 만든 산출물을 점검받고 다음 주까지의 약속을 카드로 남긴다. 멘토링이 끝나면 팀 저장소, 첫 PR, Issue 5개, 트랙 선언, 역할 분담, AI 사용 로그가 모두 확인되어야 한다.

### 표준 절차

```text
0:00~0:10  팀 헬스 체크 10분
0:10~0:45  팀별 코칭 35분
0:45~0:55  다음 주 약속 카드 10분
0:55~1:00  정리 5분
```

### Phase 1 — 팀 헬스 체크 10분

질문 4개:

1. **사람**: 지난 주 1회차 이후 팀원 이탈이나 추가가 있었나? 출석은 괜찮은가?
2. **속도**: 팀 헌법(1회차)에 정한 회의 주기를 지켰나?
3. **기술**: 30분 팀 저장소 실습에서 막힌 사람이 있었나? 누구, 어디서 막혔나?
4. **감정**: 팀 분위기는 1~5점 중 몇 점인가? 4점 미만이면 이유를 한 줄로 적는다.

### Phase 2 — 팀별 코칭 35분

#### 점검 항목 (☐ 6개)

1. ☐ 팀 저장소 URL — 클릭 가능, public 또는 internal-but-soon-public
2. ☐ 첫 머지 PR — Closed(merged) 상태, 리뷰 코멘트 1개 이상
3. ☐ 라벨 붙은 Issue 5개 — 라벨이 다 붙어 있고 본문이 채워짐
4. ☐ 트랙 1줄 선언문 — A or B 명시
5. ☐ 역할 분담 매트릭스 — 4역할 사람 매핑 완료
6. ☐ AI 사용 로그 1묶음 — PR 본문 다듬기 활동에서 작성

#### 역할 분담 매트릭스

팀이 3명이면 한 명이 2역할을 겸직하고, 5명이면 Contributor를 2명 둔다.

- **Maintainer**: 머지 권한, 릴리즈, 외부 응답 담당. 담당자: @user1
- **Contributor (Code)**: 기능 구현, 버그 수정 PR 담당. 담당자: @user2
- **Docs**: README, CONTRIBUTING, changelog 담당. 담당자: @user3
- **AI-Automation**: AI 사용 로그 정리, changelog 자동화 담당. 담당자: @user4

#### 자주 생기는 보완 포인트

- **Issue 본문이 한 줄("로그인")뿐임**: 5요소(환경, 재현, 기대-실제, 보조자료)를 하나씩 채운다.
- **머지 PR 1개도 없음**: 팀원 1명을 골라 브랜치 생성부터 PR 머지까지 끝낸다.
- **트랙 선언이 모호함**: 트랙 선택 가이드를 보고 A, B, 하이브리드 중 하나로 즉시 쓴다.
- **AI 사용 로그가 빈칸**: 오늘 PR 본문을 만들 때 AI를 썼는지 확인하고, 썼다면 5개 필드로 기록한다.
- **팀원 1명이 모든 작업을 함**: 남은 팀원이 각각 7단계를 한 번씩 손으로 수행한다.

### Phase 3 — 다음 주 약속 카드 10분

1회차 멘토링 마지막에 도입한 양식을 2회차 끝에 다시 채운다.

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

### 확인
- 트랙 확인: ☐ ___
- Issue 5개 라벨 확인: ☐ ___
- 역할 매트릭스 확인: ☐ ___
```

### Phase 4 — 정리 5분

- 팀 저장소 URL, PR URL, Issue 목록 URL을 한 곳에 모은다.
- KPT 1줄을 팀 채널에 남긴다.
- 다음 주 3회차 전까지 해야 할 개인 작업을 각자 캘린더에 넣는다.

---

## 사후 과제 (수업 후 1주일, 학생용)

3회차 진입 전에 저장소가 차분히 정리되어야 한다. 2026-05-14에는 LICENSE와 CONTRIBUTING을 다루므로, 그 전에 Issue와 트랙을 정돈한다.

### 필수 과제 (3회차 시작까지)

1. **Issue 5개를 7개로 늘리기**
   - 목적: 관리 감각 학습
   - 산출물: Issues 탭 7 Open
   - 마감: 2026-05-13(수) 자정
2. **팀원 각자 자기 GitHub 프로필에 팀 저장소 pinned 추가**
   - 산출물: 프로필 화면 캡처
   - 마감: 2026-05-13
3. **트랙별 사전 작업**
   - A트랙: 외부 OSS의 `CONTRIBUTING.md`를 읽고 핵심 3줄 메모
   - B트랙: 자체 프로젝트 한 단락 비전 문서 작성
   - 산출물: 메모 또는 `vision.md`
   - 마감: 2026-05-13
4. **다음 회차 사전 학습**
   - 내용: 라이선스 6종 이름만이라도 외우기
   - 범위: MIT, Apache-2.0, GPL-2.0/3.0, AGPL-3.0, LGPL, MPL-2.0
   - 산출물: 자가 점검
   - 마감: 2026-05-14 강의 시작 전

### 선택 과제 (학생 자율, 누적 가산점)

- **AI 사용 로그를 Issue 형태로 발행**: 표가 아니라 저장소 Issue로 발행한다. 라벨 예시는 `tracking: AI usage log`다. AI 활용 평가 가산 대상이다.
- **팀 헌법을 저장소로 옮기기**: 1회차 팀 헌법을 `docs/team-charter.md`로 옮긴다. 발표·문서화 평가 가산 대상이다.
- **Issue 목록 자동 공유**: `gh issue list --state=open` 출력을 매주 월요일 단톡방에 자동 공유한다. cron과 script를 쓰면 자동화 첫 경험이 된다.
- **한국어 GitHub 자료 읽기**: GitHub Korea 한국어 가이드(https://docs.github.com/ko) 중 1꼭지를 정독한다.

### 자가 점검 (3회차 입장 직전)

```text
☐ 팀 저장소 URL 외움
☐ Issue 7 Open / 라벨 다 붙음
☐ 머지 PR 1개 이상 / squash 머지 사용
☐ 트랙 1줄 선언이 README에 박힘
☐ 역할 4명 매트릭스
☐ AI 사용 로그가 어디 있는지 알고 있음
```

---

## 부록 A: 학생용 빠른 참조 카드 (1쪽 인쇄용)

강의 시작 전 1쪽으로 인쇄해서 90분 동안 참조한다.

### A.1 GitHub Flow 7단계

```text
1. git switch -c <branch>          # 새 브랜치
2. (편집)                            # 변경
3. git add . && git commit -m "..."  # 커밋
4. git push -u origin <branch>      # 푸시
5. gh pr create                      # PR 발행
6. gh pr review --approve / --comment + gh pr merge --squash --delete-branch
7. git switch main && git pull       # 정리
```

### A.2 자주 막히는 명령

```text
git status                # 지금 뭐가 변경됐나
git diff                  # add 전 마지막 방어선
git log --oneline -5      # 최근 커밋 5개
git branch                # 내 브랜치 목록
git switch -              # 직전 브랜치로 (- 한 글자)
git restore <file>        # 변경 취소 (로컬, 미add)
git reset HEAD <file>     # add 취소
git fetch origin          # 원격 변경 가져오기 (머지 안 함)
git pull --rebase         # 가져오면서 rebase
```

### A.3 좋은 Issue 5요소 (BUG 기준)

```text
1. 제목 (검색 가능, 한 줄)
2. 환경 (OS / 버전)
3. 재현 (1, 2, 3 순서)
4. 기대 vs 실제
5. 보조 (스크린샷 / 로그 / MRE)
```

### A.4 좋은 PR 6요소

```text
1. 제목  <type>: <요약>
2. 무엇을  1~3줄
3. 왜      이슈 링크
4. 어떻게  접근
5. 검증   테스트/스크린샷
6. 관련   Closes #N
```

### A.5 라벨 5종

```text
bug                (#d73a4a)
enhancement        (#a2eeef)
documentation      (#0075ca)
good first issue   (#7057ff)
help wanted        (#008672)
```

### A.6 AI 사용 로그 양식

```text
작업:
도구/모델:
프롬프트 요약:
AI 출력 요약:
사람이 검증한 부분:
```

### A.7 막혔을 때 호출 순서

```text
1. 옆 사람에게 화면 보여주기 (1분)
2. 강의 도움 요청 채널에 질문 올리기 (3분 안에)
3. 단톡방에 #help-2회차로 상황 공유 (5분 안에)
4. Stack Overflow / GitHub Discussions 검색
```

---

## 부록 B: A/B 트랙별 2회차 마무리 액션 (간략)

트랙별로 다음 주(3회차)까지의 행동이 갈린다. 본 회차 마지막에 트랙별 박스로 확인한다.

### A트랙 (외부 OSS 기여)

```text
☐ 후보 외부 OSS 1개 확정 (1회차 후보 3개 → 1개)
☐ 그 OSS의 CONTRIBUTING.md 읽고 핵심 3줄 메모
☐ good-first-issue 5개를 본 팀 저장소 Issue로 옮겨 적기 (분석 노트)
☐ 메인테이너 응답 SLA 확인 (최근 머지 PR 5개의 머지 주기 평균)
☐ 본 팀 저장소를 "분석/실험용"으로 명시 (README에 한 줄)
```

### B트랙 (자체 공개 저장소)

```text
☐ 자체 프로젝트 명명 + 한 단락 비전(vision.md)
☐ 본 팀 저장소를 "메인 프로젝트"로 명시
☐ Issue 5개를 1주차 작업으로 채움 (구체적, 7일 안에 끝낼 단위)
☐ 6주 후 "외부 누군가가 fork·issue 남기게" 1줄 목표
☐ (선택) 로고 또는 슬로건 1줄
```

### A→B 하이브리드 (잠정)

```text
☐ A로 시작, 4회차 시점에 외부 응답 없으면 B 보조로 전환
☐ B 보조는 "외부 OSS 분석에 도움되는 mini-tool" 형태 권장
☐ 4회차 멘토링에서 의사결정
```

---

## 부록 C: 인용 출처

본 회차에서 사용한 외부 자료와 도구 출처다.

### C.1 본문 각주 정의

[gh-flow]: https://docs.github.com/en/get-started/using-github/github-flow
[gh-pr]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[gh-pr-std]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/managing-and-standardizing-pull-requests
[gh-issues]: https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues
[gh-trending]: https://github.com/trending
[gh-pat]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
[conv]: https://www.conventionalcommits.org/

### C.2 1차 출처

- **[2] About pull requests** — GitHub Docs, live (조회 2026-05-04)  
  https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

- **[4] GitHub flow** — GitHub Docs, live (조회 2026-05-04)  
  https://docs.github.com/en/get-started/using-github/github-flow

- **[5] About issues** — GitHub Docs, live (조회 2026-05-04)  
  https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues

### C.3 보조 출처

- **GH-Issues-Docs — About issues**: GitHub Docs  
  https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues

- **GH-PR-Std — Managing and standardizing pull requests**: GitHub Docs  
  https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/managing-and-standardizing-pull-requests

- **GH-Profile-README — Managing your profile README**: GitHub Docs  
  https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme

- **GH-CLI — GitHub CLI manual**: GitHub  
  https://cli.github.com/manual/

### C.4 사례 저장소

- **firstcontributions/first-contributions**: MIT. 사후 과제 선택 항목의 첫 PR 튜토리얼 예시.  
  https://github.com/firstcontributions/first-contributions

- **public-apis/public-apis**: MIT. docs PR 입문 예시로 학생 자율 탐색에 적합.  
  https://github.com/public-apis/public-apis

- **freeCodeCamp/freeCodeCamp**: BSD-3-Clause. A트랙 한국어 번역 후보.  
  https://github.com/freeCodeCamp/freeCodeCamp

- **vercel/next.js**: MIT. 인기 OSS Issues 단어 빈도 화면 예시.  
  https://github.com/vercel/next.js

- **huggingface/transformers**: Apache-2.0. 인기 OSS Issues 단어 빈도 화면 예시.  
  https://github.com/huggingface/transformers

- **astral-sh/uv**: MIT/Apache-2.0. 인기 OSS Issues 단어 빈도 화면 예시.  
  https://github.com/astral-sh/uv

### C.5 AI 도구와 커밋 컨벤션

- **GitHub Copilot Free**: PR 본문 다듬기 선택지.  
  https://github.com/features/copilot

- **Claude (claude.ai 웹)**: PR 본문 다듬기 권장 선택지.  
  https://claude.ai

- **Conventional Commits**: 커밋 메시지 컨벤션.  
  https://www.conventionalcommits.org/

---

## 마무리 — 회차 끝 문장

> *오늘 우리는 GitHub에 첫 흔적을 남겼다. 머지된 PR 1개. 라벨 붙은 Issue 5개. 이것이 6주 누적의 1주차 흔적이다.*
>
> *다음 주에 우리는 그 흔적이 외부 사람도 신뢰할 수 있게 — LICENSE, CONTRIBUTING, Code of Conduct, SECURITY, Issue/PR Template으로 — 골격을 세운다.*
>
> *오픈소스의 기본 언어는 코드가 아니라 Issue · Branch · Commit · Pull Request · Review 다섯 단어다*

---
