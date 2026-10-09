# 합성 Decision Card 첫 가치 확인

실제 에이전트 자동연결이 아닌 합성 평가 데모입니다. SHIELD ON 또는 실제 보호 성공이 아닙니다. 설치 후 3분/5분 목표는 사용자 측정 전 미확인입니다.

1. **준비·확인:** Windows 11 x64, 기존 trusted Git for Windows가 필요합니다. Python은 묶음에 포함됩니다. 아래 ZIP을 새 로컬 폴더에 내려받고 SHA256을 비교하세요. 불일치/보안 차단이면 STOP, 우회하지 마세요.
2. **첫 실행:** 전체 파일을 새 폴더에 풀고 `CARD_DEMO.cmd`를 실행하세요. 관리자 권한/PATH/registry/전역 hook 설정을 바꾸지 않습니다. 오류가 나면 STOP하고 합성 재현/오류 코드만 접수하세요.
3. **판단 읽기:** 합성 `Read`의 ALLOW와 `.git/config` Write 요청의 DENY/GIT_METADATA 사유를 비교하세요. ALLOW는 실행 허가가 아닙니다. 이 데모는 Write/삭제를 실행하지 않으며 원본 fixture bytes를 확인합니다. `card-demos/<UUID>/result.json`은 내부 합성 기록입니다.

[Download ZIP](https://github.com/sirundae/arche-shield-evaluation/releases/download/v0.1.0-rc4-eval4-card/arche-shield-0.1.0-rc4-eval4-card-windows-x64.zip) — 11,516,897 bytes

SHA256: `31f6578679ff5f4022edfb34be1a6ae794cfae5c3a748b30d62bc41be014f79b`

PowerShell: `(Get-FileHash -Algorithm SHA256 "arche-shield-0.1.0-rc4-eval4-card-windows-x64.zip").Hash`

[Release, terms, known limits, checksums and rollback](https://github.com/sirundae/arche-shield-evaluation/releases/tag/v0.1.0-rc4-eval4-card)

Close the demo to stop it; no hook was installed. Preserve outputs. For the earlier manual preflight package, use the unchanged [eval3 release](https://github.com/sirundae/arche-shield-evaluation/releases/tag/v0.1.0-rc4-eval3-portable). Cached/downloaded files cannot be recalled completely.

Native connection: CONNECTED_UNVERIFIED / NOT_RUN. Existing Windows builder checks are not fresh-OS, independent-audit or customer evidence. Unsigned/TOCTOU/heuristic/native timeout limits remain. AUDIT016 INCOMPLETE; RC4 independent security audit NOT_RUN. Production hooks/providers/user restores OFF.

Free evaluation/testing only; no production/commercial/resale/redistribution/white-label/team rights. Payment OFF. Optional KRW49,000 setup-support hypothesis is not a software license or commercial-use right; scope stays in existing release terms.

[Voluntary evaluation feedback](https://github.com/sirundae/arche-shield-evaluation/issues/new?template=00-evaluation.yml) · [Use/support-intent inquiry](https://github.com/sirundae/arche-shield-evaluation/issues/new?template=00-use-inquiry.yml). GitHub sign-in required; never submit private code/logs/secrets. Distinguish download/install/inspection/concrete value/support intent/commercial inquiry/payment. Synthetic demo does not increment SHIELDED_REAL_ACTIONS_WITHOUT_MANUAL_PREFLIGHT. Seven-day origin remains 2026-10-05T11:03:52Z; downloads are not customers or revenue.
