# Windows · 첫 실행 5분 안내

평가/테스트 전용입니다. EVALUATION_TERMS.md /KNOWN_LIMITATIONS.md를 먼저 읽습니다. 실제 고객 파일을 사용하지 마세요. Python3.12 이상이 별도로 필요하며 관리자 권한이나 API Key는 필요하지 않습니다.

1. [Release](https://github.com/sirundae/arche-shield-evaluation/releases/tag/v0.1.0-rc4-eval1)에서 **arche-shield-0.1.0-rc4-eval1-windows.zip**과 **SHA256SUMS.txt**를 받습니다. 로그인 없이 다운로드할 수 있습니다. GitHub 자동 Source code ZIP은 문서 저장소이며 실행 패키지가 아닙니다.
2. 시작 메뉴 → Windows PowerShell을 일반 권한으로 엽니다. 다운로드 경로에 맞춰 `Get-FileHash -Algorithm SHA256 -LiteralPath 'C:\다운로드폴더\arche-shield-0.1.0-rc4-eval1-windows.zip'`를 실행하고 SHA256SUMS.txt의 ZIP 값과 비교합니다. 경로 예시는 실제 다운로드 경로로 바꾸세요. 다르면 실행하지 않습니다.
3. 탐색기 → ZIP 오른쪽 클릭 → **모두 압축 풀기** → 새로운 폴더. ZIP 내부에서 직접 실행하지 않습니다.
4. 시작 메뉴 → **명령 프롬프트** → `python --version` 또는 `py -3 --version`. Python3.12 이상인지 확인합니다. 없으면 [공식 Python Windows 다운로드](https://www.python.org/downloads/windows/)에서 설치를 직접 검토합니다. 패키지는 자동 설치/PATH/시스템 설정을 바꾸지 않습니다.
5. 압축 푼 폴더 주소를 복사하고 `cd /d "복사한 폴더 주소"`를 입력합니다. `VERIFY.cmd` → 정상 `verification: PASS`; `SHIELD.cmd --help` → 사용법; `SHIELD.cmd --version` → `0.1.0`.
6. `TRY_DEMO.cmd` → 정상 `demo: PASS`, `submitted_commands_executed: false`. 새 demos 폴더의 합성 파일만 검사하며 삭제 명령을 실행하지 않습니다. 파일/로그는 남깁니다.
7. [평가 접수](https://github.com/sirundae/arche-shield-evaluation/issues/new?template=01-evaluation.yml)에 설치/첫 검사/가치/지원 의향을 각각 기록해 주세요. 접수는 GitHub 로그인 필요, 실제 경로·개인정보·토큰·고객 파일은 넣지 않습니다.

직접 평가 명령: `SHIELD.cmd --workspace "새 테스트 작업폴더" inspect "합성 대상 경로" --operation delete`. 실제 삭제를 수행하지 않습니다. 기본 C:\Users 보호 DENY/종료코드2는 정상일 수 있습니다. reason을 읽고 시스템 보호를 낮추지 마세요. TRY_DEMO의 빈 protected_roots는 오직 새 합성 데이터용이며 agent preset 권한이 아닙니다.

오류: PYTHON_3_12_REQUIRED면 설치 버전 확인; PACKAGE_HASH_MISMATCH면 실행 중단/새 폴더에 다시 다운로드/checksum 비교; 종료코드2는 정책 DENY,3은 설정/기록/무결성 오류. 오류 코드를 보존하고 공개 issue에 합성 재현만 남깁니다. 보안 설정·권한 상승으로 해결하지 마세요. Git 분류가 UNKNOWN이면 실행하지 않습니다.

자동 업데이트/SLA 없음. 새 버전은 별도 폴더에서 검증하고 기존 버전·감사 기록을 보존합니다. ROLLBACK.md를 참조합니다.
