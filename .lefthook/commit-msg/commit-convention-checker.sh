#!/bin/bash

# Read the commit message from the file
COMMIT_MSG=$(head -n1 "$1")

# Define the regex pattern for validation
PATTERN='^(Install|Docs|Add|Feat|Fix|Draft|Style|Refactor|Chore|Rename|Remove):.*#.*$'

# Check if the commit message matches the pattern
if ! [[ $COMMIT_MSG =~ $PATTERN ]]; then
    cat << 'EOF'
👎 잘못된 커밋 메세지입니다!

아래 예제를 참고해주세요
------------------------------------------------------
"(Prefix): 커밋 내용 #issue-number"

"Feat: 구글 로그인 기능 추가 #123"
------------------------------------------------------

사용가능한 commit의 Prefix는 아래와 같습니다.

=============== 반드시 콜론을 한 개(:) 사용하고 띄어쓰기 후 내용을 입력합니다. ===============

Install:          패키지 설치
Docs:             문서 수정
Add:              단순 파일 추가
Feat:             새로운 기능을 추가
Fix:              버그 수정
Draft:            작업 중인 커밋
Style:            CSS 및 UI, 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
Refactor:         코드 리팩토링 (기능 변경 X, 코드 가독성, 구조, 품질 개선의 경우)
Chore:            빌드 업무 수정, 패키지 매니저 수정
Rename:           파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove:           파일을 삭제하는 작업만 수행한 경우

==================================================================================
EOF
    exit 1
else
    echo "👍 커밋 메세지가 올바르게 작성되었습니다!"
    exit 0
fi

