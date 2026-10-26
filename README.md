# EX MAGAZINE

기존 EXD MAGAZINE 백엔드의 공개 콘텐츠 API를 사용하는 웹 프런트엔드입니다. CSS와 JavaScript는 별도 파일로 유지합니다.

## 페이지 구성

- `index.html`: 메인
- `work.html`, `people.html`, `life.html`, `view.html`: 카테고리
- `article.html?id=기사ID`: 공통 기사 상세
- `work.html?subcategory=졸업전시`: 세부 분류 예시
- `work.html?view=articles`: 소개 영역 없는 전체 기사 목록 예시
- `404.html`: 이전 개별 HTML 주소를 새 공통 주소로 안내하는 GitHub Pages 호환 페이지

112개 화면별 HTML을 6개 공통 페이지와 이전 주소 안내 페이지 1개로 통합했습니다. 세부 분류·목록·기사마다 HTML을 추가할 필요가 없습니다.

## 저장과 공개

관리자: https://exd-magazine-archive.rhddyd0831.chatgpt.site/admin

공개 API: https://exd-magazine-archive.rhddyd0831.chatgpt.site/api/public

기존 운영 서버는 Cloudflare Workers, D1 데이터베이스(`DB`), R2 이미지 저장소(`BUCKET`)를 사용합니다. 관리자에서 수정한 원고는 서버에 저장됩니다. 기사는 **저장 → 승인 요청 → 메인 관리자 승인·게시** 이후 공개 API와 이 사이트에 표시됩니다. 이미 공개된 기사를 수정해도 승인 전에는 종전 공개본이 유지됩니다. 메인과 카테고리 소개 설정은 관리자 저장 후 공개 데이터에 반영됩니다.

이 프런트엔드는 접속 시 공개 API를 읽으며, 페이지가 열린 동안 15초마다 변경을 확인합니다. 창으로 돌아왔을 때도 다시 확인합니다. 관리자 로그인·쓰기·승인·업로드는 기존 관리자 사이트에서 수행합니다. 공개 API의 GET에만 CORS를 허용했으며 관리자 API의 인증과 같은 출처 쓰기 검사는 유지합니다.

## 미리보기와 게시

웹 서버나 GitHub Pages에서 열면 실제 데이터베이스의 공개 데이터를 사용합니다. 운영 API 연결 실패 시 오래된 사본을 현재 데이터처럼 표시하지 않고 오류를 표시하며, 주기적 갱신으로 재시도합니다.

파일을 더블클릭한 `file://` 미리보기에서는 네트워크 없이 `js/content.js`의 내보내기 당시 사본을 사용합니다. 실제 저장·승인 반영 확인은 HTTP/HTTPS 주소에서 하세요.

GitHub Pages에는 이 폴더의 HTML과 `css`, `js`, `assets`, `media`, `licenses` 폴더를 함께 올리세요. 백엔드 소스와 배포 산출물인 `.source-inspection`, `.artifacts`는 게시 대상이 아니며 `.gitignore`로 제외했습니다. GitHub Pages 자체에서 서버를 실행하지 않고 기존 운영 API에 연결합니다.

## 파일 관리

- `css/styles.css`: 공통 스타일
- `js/app.js`: 공통 화면, 라우팅, 공개 API 연결, 검색, 자동 갱신
- `js/content.js`: 파일 미리보기용 데이터 사본
- `js/legacy-route.js`: 이전 HTML 주소 변환
- `assets/`, `media/`: 정적 이미지와 폰트
- `licenses/`: 이미지 출처 및 폰트 라이선스

백엔드 프로젝트: `appgprj_6aac132b3eb08191b795b3fda8696493`
공개 API CORS 배포: 버전 28, 소스 `7d798e4197f15948fb888a11f79001bbbe80477c`

기존 `index.html?category=WORK`와 `index.html?article=기사ID` 주소도 지원합니다. 관리자 계정·비밀번호·세션·비공개 원고는 프런트엔드 파일에 포함하지 않습니다.

## 기사 상태와 추가 사진

기사 관리 목록의 옵션에서 메인 관리자는 공개·비공개를 선택하거나 기사를 삭제할 수 있습니다. 현재 공개 여부에 따라 한쪽에만 체크가 표시됩니다. 공개 선택은 최신 저장 원고를 게시하며, 삭제는 확인 후 원고와 공개본을 제거합니다.

표지는 별도로 1장을 선택하고, 추가 사진은 최대 10장까지 선택할 수 있습니다. 기존 본문에 삽입한 사진도 추가 사진 수에 포함합니다. 추가 사진은 편집 화면에서 순서를 바꾸거나 제거할 수 있고, 공개 기사 본문 아래의 슬라이더에 표시됩니다. 사진을 클릭하면 확대 창이 열리며 좌우 버튼·키보드 방향키로 넘기고 Esc로 닫을 수 있습니다.

GitHub Pages의 추가 사진 기능에는 각 HTML 파일과 `js/app.js`, `js/gallery.js`, `css/gallery.css` 변경을 함께 반영해야 합니다. 기존 관리자와 운영 사이트는 Sites 배포로 갱신합니다.

기사 옵션·추가 사진 갤러리 운영 배포: 버전 29, 소스 `4f5c24f4a9eaa4cf5b6017acfc5b4ab5d3189d88`.
