/* Local help only: no storage, telemetry, file inspection, network, or proof of installation. */
'use strict';
function nextStep(python, checksum, demo) {
  if (checksum === 'no') return {title:'실행을 멈추고 파일을 확인하세요',copy:'SHA256이 다르면 실행하지 마세요. 기존 폴더를 보존하고 공식 release의 ZIP을 새 폴더에 받아 비교하세요.',href:'#help'};
  if (python !== 'yes') return {title:'Python 버전부터 확인하세요',copy:'명령 프롬프트에서 python --version 또는 py -3 --version을 확인하세요. 패키지는 Python을 자동 설치하지 않습니다.',href:'#start'};
  if (checksum !== 'yes') return {title:'ZIP SHA256을 먼저 비교하세요',copy:'PowerShell의 Get-FileHash 결과와 공개 checksum이 같은지 비교합니다. 아직 비교하지 않았다면 실행하지 마세요.',href:'#artifact-title'};
  if (demo === 'no') return {title:'오류 코드로 다음 단계를 확인하세요',copy:'오류와 버전을 보존하고 문제 해결 안내를 읽으세요. 보안 설정을 끄거나 권한을 높이지 마세요.',href:'#help'};
  if (demo !== 'yes') return {title:'새 합성 데모를 실행하세요',copy:'압축 푼 폴더에서 VERIFY.cmd, SHIELD.cmd --help 확인 후 TRY_DEMO.cmd를 실행하고 demo: PASS 및 submitted_commands_executed: false를 읽으세요.',href:'#start'};
  return {title:'실제 결과를 평가 접수에 남겨 주세요',copy:'이 선택만으로 성공이 검증된 것은 아닙니다. 실제 설치·첫 검사 결과와 도움이 된 상황을 따로 기록하세요. 개인정보·고객 파일·토큰은 넣지 마세요.',href:'https://github.com/sirundae/arche-shield-evaluation/issues/new?template=00-evaluation.yml'};
}
if (typeof module !== 'undefined') module.exports = {nextStep};
if (typeof document !== 'undefined') {
  const form = document.getElementById('readiness');
  function update() {
    const data = new FormData(form), value = nextStep(data.get('python'),data.get('checksum'),data.get('demo'));
    document.getElementById('next-title').textContent=value.title;
    document.getElementById('next-copy').textContent=value.copy;
    const link=document.getElementById('next-link');link.href=value.href;
    link.textContent=value.href.startsWith('https:')?'평가 결과 접수하기':'안내로 이동';
  }
  form.addEventListener('change',update);
  form.addEventListener('reset',()=>setTimeout(update,0));
  update();
}
