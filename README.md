# ARCHE SHIELD · Windows AI 작업 전 피해 미리보기

AI가 파일을 건드리기 전에 **요청 경로와 실제 대상·예상 파일 수/크기·정책 차단 사유**를 확인하고 검사 기록을 남기는 로컬 사전 검사기입니다.

**RC4 무료 평가/테스트 전용 · Python3.12+ · 제출된 삭제 명령 실행 없음.** 완전한 보안 보장/OS 전체 강제 차단/독립 감사 인증 제품이 아닙니다.

- [Windows 평가 ZIP 내려받기](https://github.com/sirundae/arche-shield-evaluation/releases/download/v0.1.0-rc4-eval1/arche-shield-0.1.0-rc4-eval1-windows.zip)
- [Release / SHA256 / notes](https://github.com/sirundae/arche-shield-evaluation/releases/tag/v0.1.0-rc4-eval1)
- [Windows 처음 실행하기](START_HERE_KO.md) /[평가 이용조건](EVALUATION_TERMS.md) /[알려진 한계](KNOWN_LIMITATIONS.md) /[롤백](ROLLBACK.md)
- [평가 후기·49,000원 도입지원 의향 접수](https://github.com/sirundae/arche-shield-evaluation/issues/new?template=01-evaluation.yml)
- [commercial/production/team 사용범위 문의](https://github.com/sirundae/arche-shield-evaluation/issues/new?template=02-use-inquiry.yml)

ZIP은 로그인 없이 내려받습니다. 의견 접수에는 GitHub 로그인이 필요합니다. 개인정보/고객 파일/원본 경로/토큰을 공개 issue에 넣지 마세요.

## 누가 평가하면 좋은가
Windows에서 Codex/Claude Code로 여러 작업 폴더를 관리하는 1인 개발자와 작은 자동화 팀. junction·workspace 탈출·보호 폴더·Git 상태 때문에 예상 삭제 범위를 확인하려는 테스트 사용자입니다. 업무/production/팀 상업 운영권은 포함하지 않습니다.

## 시작
ZIP checksum 확인 → 새 폴더 압축 해제 → Python 확인 → VERIFY.cmd → TRY_DEMO.cmd → 결과 읽기. 기본 C:\Users DENY는 정상 보호일 수 있습니다. ALLOW도 실제 명령 실행 권한이 아닙니다.

## 선택형 도입지원 가설
**49,000원은 소프트웨어 라이선스 가격이 아닙니다.** 최대60분 설치/첫 실행/기본 설정·합성 검사 지원 +평가기간 간단한 후속1회에 대한 가격 가설입니다. [지원 범위와 제외](SUPPORT_HYPOTHESIS.md). 실제 결제/계약/상업권 부여는 활성화하지 않았습니다.

## 7일 검증
7일은 시장검증 기간이지 소프트웨어 만료가 아닙니다. [측정 기준](EXPERIMENT.md)을 따라 download/install/inspection/value/지원의향/commercial inquiry/payment를 분리합니다. 다운로드를 매출로 세지 않습니다.

## 업데이트 / 지원
GitHub Issues에 버전·오류 코드·합성 재현을 남깁니다. 자동 업데이트나 지속적 SLA는 없습니다. 새 버전은 별도 폴더에 검증하고 이전 버전을 보존합니다.

이 저장소에는 SHIELD 평가 배포/안내/접수 경로만 있습니다. 원래 여러 프로젝트 비공개 저장소와 전체 개발 history는 공개하지 않습니다. Python zipapp 실행 코드는 열어 볼 수 있으며, 이용조건은 오픈소스나 재배포 라이선스가 아닙니다.
