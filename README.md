# EX MAGAZINE — GitHub Pages용 HTML

현재 공개 사이트의 디자인과 공개 기사 81개를 포함한 정적 사본입니다. FEATURED 제목 크기 변경까지 반영했습니다.

## 파일
- index.html: CSS, JavaScript, 공개 기사, 사진, 폰트를 모두 포함한 단일 HTML. 더블클릭으로 열거나 웹 서버에 올릴 수 있습니다.
- .nojekyll: GitHub Pages 정적 게시 설정.
- licenses/: 원본 이미지 출처 및 폰트 라이선스. 이 폴더도 함께 보관하세요.

## GitHub에 올리기
1. ZIP을 압축 해제합니다.
2. 저장소 최상위에 index.html, .nojekyll, licenses 폴더를 올리고 커밋합니다. index.html이 중첩 폴더 안에 들어가지 않게 하세요.
3. 저장소 Settings → Pages → Build and deployment에서 Deploy from a branch를 선택합니다.
4. main 브랜치와 /(root)를 선택하고 Save를 누릅니다.
5. 게시된 Pages 주소를 엽니다. 저장소 이름이 붙은 하위 경로에서도 동작하도록 상대 경로를 사용합니다.

## 포함 기능
메인, WORK·PEOPLE·LIFE·VIEW, 세부 분류, 목록/그리드, 기사 상세, 검색, 연도별 아카이브, 기존 스크롤 인터랙션과 폰트. 별도 CDN이나 기존 공개 API 없이 실행됩니다. 기사 상세는 index.html?article=기사ID 주소를 사용합니다.

## 관리자와 콘텐츠 변경
GitHub Pages는 정적 파일 호스팅이므로 자체 로그인, 관리자 계정 발급, 사진 업로드, 기사 작성·승인은 실행하지 않습니다. 푸터 관리자 링크는 기존 운영 사이트 https://exd-magazine-archive.rhddyd0831.chatgpt.site/admin 으로 연결됩니다. 계정·비밀번호·세션·비공개 원고는 포함하지 않았습니다.

이 파일은 내보낸 시점의 공개 콘텐츠 사본이며, 운영 관리자에서 수정해도 자동 반영되지 않습니다. 변경 후에는 새 HTML을 다시 내보내 올리거나 별도 서버·데이터베이스를 연결해야 합니다. GitHub 저장소에 올리는 것만으로 관리자 기능이 이전되지는 않습니다.

공개 데이터 기준: 2026-10-25T19:04:28.216Z
