# Unpublish / rollback

사용자: 창을 닫고 해당 패키지 사용을 중지합니다. 새 버전은 별도 폴더에 풀고 이전 RC4와 checksum을 보존합니다. 파일/감사 로그/사용자 데이터 삭제, 서비스/레지스트리/권한 변경은 필요하지 않습니다.

게시자: 이 공개 평가 prerelease를 Edit → **Save as draft** 또는 `gh release edit v0.1.0-rc4-eval2 --repo sirundae/arche-shield-evaluation --draft`로 전환합니다. 릴리스 URL과 asset URL을 익명 API의 공개 release 목록/조회에서 내려가는지 확인합니다. **기존 HTML·asset URL은 CDN/cache 때문에 계속 응답할 수 있고 이미 내려받은 사본은 회수할 수 없습니다. 즉시 다운로드 차단/완전한 회수를 보장하지 않습니다.** 기존 private RC4 배포물은 보존합니다.

이미 다운로드된 사본은 회수할 수 없습니다. 공개 docs/평가조건을 지우거나 원래 비공개 monorepo를 공개 전환하는 방식으로 되돌리지 않습니다. 새 결함이 있으면 release notes에 중단 사유를 추가하고 새 버전/새 asset명으로 검증한 뒤 게시합니다. force push/main merge는 필요 없습니다.
