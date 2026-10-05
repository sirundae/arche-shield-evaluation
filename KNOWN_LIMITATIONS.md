# 알려진 한계 · RC4 evaluation

- 사전 검사 결과는 advisory입니다. 제출된 파괴 명령을 실행하지 않으며 ALLOW도 실제 OS 실행 권한이 아닙니다.
- OS 전체 interception/강제 차단은 미구현입니다. 에이전트가 검사기를 호출하지 않으면 OS 작업을 자동으로 잡아주지 않습니다.
- 독립 RC4 security audit: NOT_RUN. AUDIT016 safety-filter interruption: INCOMPLETE. 재시도/우회/다른 이름의 재포장 감사로 인증하지 않습니다.
- 과거 builder regression587 PASS/3 native privilege SKIP. 자체 시험이며 독립 인증이 아닙니다. symlink 권한 사례는 환경 의존적입니다.
- TOCTOU, 휴리스틱 파싱/탐지, native Git 저장소 root의 긴 경로 UNKNOWN_DENY 등 한계가 있습니다. 알려지지 않은 결과는 거부될 수 있습니다.
- release 철회는 draft 전환으로 공개 API 목록에서 내리는 방식입니다. 기존 HTML·asset URL은 cache/CDN 때문에 계속 응답할 수 있어 즉시 회수·차단을 보장하지 않습니다.
- unsigned ZIP/zipapp; checksum은 바이트 일관성이지 게시자 서명이 아닙니다.
- mock anchor NOT_EXTERNAL_TRUST. coherent DB+mock 동시 rollback NOT_PROTECTED. 완전한 rollback 보장이 아닙니다.
- 실제 사용자 복구/hooks/live provider/production integration은 활성화하지 않았습니다. snapshot 실제 복구는 owned synthetic demo 전용입니다.
- Browser 제품 시각 검수는 정책 차단으로 NOT_RUN. 대체 browser/fileURL/localhost 서버로 우회하지 않았습니다.
- Python3.12 이상 필요, standalone EXE/런타임 포함 installer 아님. Git 분류에는 설치된 신뢰 Git 필요, 불완전하면 안전하게 거부합니다.
- 기본 C:\Users/C:\Windows 등의 보호 DENY는 정상일 수 있습니다. 합성 데모의 빈 protected_roots를 실사용·agent 보호 해제로 해석하지 마세요.
