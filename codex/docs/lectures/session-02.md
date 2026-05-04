# 2회차 강의자료: GitHub 협업 워크플로우와 오픈소스 운영 기본기

## 메타데이터

- 일시: 2026-05-07 목 19:00-21:00
- 주제: GitHub Flow, Issue, Branch, Commit, Pull Request, Review
- 핵심 메시지: 오픈소스의 기본 언어는 코드가 아니라 Issue, Branch, Commit, Pull Request, Review이다.
- 목표 산출물: 팀 저장소, 라벨 붙은 Issue 5개, 첫 Pull Request 1개, 트랙 선언, 역할 분담, AI로 다듬은 Pull Request 본문

## 학습 목표

수강생은 이 회차 후 다음을 수행할 수 있어야 한다.

1. GitHub Flow의 기본 흐름을 자기 손으로 1회 실행한다.
2. 좋은 Issue와 좋은 Pull Request에 필요한 정보를 작성한다.
3. 팀 저장소를 만들고 첫 공개 협업 기록을 남긴다.
4. 외부 오픈소스 기여 또는 자체 공개 저장소 운영 중 하나를 잠정 선택한다.
5. AI가 다듬은 Pull Request 본문을 실제 변경 내용과 대조해 검증한다.

## 수업 전 준비

1회차에서 만든 후보 프로젝트 3개와 팀 운영 약속 초안을 준비한다. GitHub에 로그인하고, 가능하면 Git 사용자 정보를 설정한다.

```bash
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"
```

GitHub CLI가 있으면 좋지만 필수는 아니다. 웹 UI만으로도 수업을 진행할 수 있다.

## 수업 흐름

1. 지난 회차의 후보 프로젝트를 팀 저장소 작업으로 연결한다.
2. 활발한 오픈소스 저장소의 Issue에서 자주 보이는 단어를 찾아본다.
3. GitHub Flow의 흐름을 확인한다.
4. 팀 저장소를 만들고 첫 Issue와 Pull Request를 만든다.
5. 좋은 Issue와 Pull Request의 구성 요소를 정리한다.
6. AI로 Pull Request 본문을 다듬고 사람이 검증한다.
7. 팀별 트랙과 역할을 확정한다.

## 핵심 내용

GitHub Flow는 작은 변경을 안전하게 협업하기 위한 흐름이다. main에서 새 Branch를 만들고, 작은 변경을 Commit하고, Pull Request를 열고, Review를 거쳐 Merge한다. 이 과정이 남기는 기록이 오픈소스 협업의 핵심 증거다.

좋은 Issue는 제목만 있는 요청이 아니다. 문제, 맥락, 재현 또는 예시, 완료 조건, 라벨이 있어야 한다. 좋은 Pull Request는 무엇을 바꿨는지뿐 아니라 왜 바꿨고 어떻게 확인했는지를 포함한다.

2회차의 목표는 완벽한 코드를 만드는 것이 아니다. 팀 저장소가 살아 있고, Issue와 Pull Request가 실제로 남아 있으며, 팀이 어떤 트랙으로 갈지 말할 수 있는 상태를 만드는 것이다.

## 활동

### Issue 단어 찾기

활발한 오픈소스 저장소의 Issues 화면을 보고 자주 등장하는 단어를 찾는다. 예시는 `repro`, `feature request`, `good first issue`, `docs`, `help wanted`다.

이 단어들은 협업에서 중요한 의미를 가진다. 재현 가능한 버그만 고칠 수 있고, 기능 제안은 코드보다 토론이 먼저이며, 문서 기여는 좋은 첫 기여가 될 수 있다.

### GitHub Flow 실행

팀 저장소에서 작은 변경을 하나 만든다. README에 팀 소개 한 줄을 추가하는 정도면 충분하다.

```bash
git switch -c docs/add-team-note
: README.md를 편집한다.
git add README.md
git commit -m "docs: add team note"
git push -u origin docs/add-team-note
```

이후 GitHub에서 Pull Request를 만들고 팀원 한 명이 Review를 남긴다. 가능하면 Merge까지 진행한다.

### Issue 5개 작성

팀 저장소에 Issue 5개 이상을 만든다. 유형은 기능, 문서, 테스트, 버그, 운영, AI 사용 로그 중에서 섞는다.

각 Issue는 다음 내용을 포함한다.

- 무엇을 하려는가
- 왜 필요한가
- 완료 조건은 무엇인가
- 누가 맡을 것인가
- 어떤 라벨을 붙일 것인가

### Pull Request 본문 작성

Pull Request 본문에는 다음 내용을 문장으로 쓴다.

- 무엇을 바꿨는가
- 왜 바꿨는가
- 어떻게 확인했는가
- 어떤 Issue와 연결되는가
- 리뷰어가 특히 봐야 할 점은 무엇인가

### AI로 Pull Request 본문 다듬기

다음 프롬프트를 사용해 본문 초안을 만들 수 있다.

```text
다음 Pull Request 변경 내용과 관련 Issue를 바탕으로 Pull Request 본문을 작성해줘.
포함할 내용은 무엇을 바꿨는지, 왜 바꿨는지, 어떻게 확인했는지, 관련 Issue, 리뷰어가 볼 점이야.
실제 변경에 없는 내용은 쓰지 마.
```

AI 결과를 그대로 쓰지 않는다. 실제 diff와 맞는지, 없는 테스트가 들어가지 않았는지, Issue 번호가 맞는지 사람이 확인한다.

### 트랙 선언

팀은 한 줄로 트랙을 선언한다.

A트랙 선언 예시는 다음과 같다.

```text
우리 팀은 A트랙이다. 외부 저장소의 문서 또는 테스트 기여를 6주 안에 시도한다.
```

B트랙 선언 예시는 다음과 같다.

```text
우리 팀은 B트랙이다. 캠퍼스 문제를 해결하는 작은 공개 저장소를 만들고 운영한다.
```

외부 응답이 지연될 가능성이 큰 팀은 A트랙을 우선하되 B트랙 보조 산출물을 준비한다고 선언할 수 있다.

## 멘토링

멘토링에서는 팀 저장소, Issue, Pull Request, 트랙 선언, 역할 분담을 확인한다.

확인할 질문은 다음과 같다.

- 팀 저장소가 실제로 열리는가?
- Issue 5개가 제목만 있는 상태가 아닌가?
- Pull Request가 실제 변경을 포함하는가?
- Review 또는 코멘트 기록이 있는가?
- 트랙 선언이 구체적인가?
- Maintainer, Contributor, Docs, AI-Automation 역할이 정해졌는가?
- AI 사용 로그가 남아 있는가?

## AI 활용

AI는 Issue 제목 개선, Pull Request 본문 초안, Commit 메시지 제안, README 구조 제안에 사용할 수 있다. 사람이 확인해야 할 것은 실제 변경 내용, 테스트 결과, 링크, 과장 표현, 팀의 실제 합의다.

AI 사용 로그에는 다음을 남긴다.

- 어떤 Pull Request 본문을 다듬었는가
- AI가 어떤 문장을 제안했는가
- 사람이 어떤 문장을 삭제하거나 수정했는가
- 최종 Pull Request 본문에 무엇이 반영되었는가

## 과제

팀 과제는 팀 저장소, Issue 5개 이상, 첫 Pull Request, 트랙 선언, 역할 분담 문서를 제출하는 것이다. 개인 과제는 자신이 작성하거나 리뷰한 Issue 또는 Pull Request 링크와 회고를 남기는 것이다.

제출 증거는 저장소 URL, Issue URL, Pull Request URL, 역할 분담 문서, AI 사용 로그다.

## 참고 출처

- GitHub Flow: https://docs.github.com/en/get-started/using-github/github-flow
- About Pull Requests: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
- About Issues: https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues
