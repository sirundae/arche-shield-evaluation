# Windows 11 x64 휴대형 무료 평가판

RC4 제품0.1.0 / 배포0.1.0-rc4-eval3-portable / Python3.13.16 포함. Python 별도 설치가 필요 없습니다. x64 전용, ARM64/32bit 검증 안 됨.

1. 공식 release의 ZIP SHA256을 PowerShell Get-FileHash로 비교합니다. 불일치면 중단합니다.
2. 파일 탐색기에서 ZIP 우클릭 → 모두 압축 풀기 → 새 폴더를 선택합니다. ZIP 안에서 실행하거나 예전 폴더에 덮어쓰지 않습니다.
3. 새 폴더의 VERIFY.cmd를 실행합니다. 정상: verification: PASS. 창이 닫히면 주소표시줄에 cmd를 입력한 뒤 VERIFY.cmd를 입력합니다.
4. TRY_DEMO.cmd를 실행합니다. 정상: demo: PASS / synthetic_only: true / submitted_commands_executed: false. 본인·고객 파일은 쓰지 않습니다. 합성파일·기록이 demos에 보존됩니다.
5. SHIELD.cmd --help로 CLI를 확인합니다. 설치/PATH/레지스트리/시스템 정책 변경은 없습니다. Windows 기본 PowerShell이 필요합니다. 보호정책이 차단하면 관리자 실행/보안 해제/우회를 하지 말고 그대로 중단합니다.

C:\Users 보호에 따른 DENY/exit2는 정상일 수 있습니다. ALLOW는 참고 판정이며 명령실행 권한이나 OS 강제차단을 뜻하지 않습니다. 결제·production·실사용자복구·hooks·liveproviders OFF. 이전 eval2 외부Python 방식도 그대로 보존됩니다.

평가와 의향: https://github.com/sirundae/arche-shield-evaluation/issues/new?template=00-evaluation.yml (GitHub 로그인 필요, 공개화면에 개인정보/고객파일/자격증명 금지). 가격은 softwarelicense가 아니라 별도 선택형 지원가설입니다.
