/* Local help only; no network, storage, file inspection or installation proof. */
'use strict';
function nextStep(python, checksum, demo) {
 if (checksum === 'no') return {title:'STOP: verify the file',copy:'Do not run a ZIP with a different SHA256. Preserve the folder and compare a fresh official download.',href:'#help'};
 if (python !== 'yes') return {title:'Check Windows 11 x64',copy:'Settings → System → About: confirm Windows 11 x64. Python is included; no system installation is needed.',href:'#start'};
 if (checksum !== 'yes') return {title:'Compare ZIP SHA256 first',copy:'Compare Get-FileHash with the public checksum. Do not run before checking.',href:'#artifact-title'};
 if (demo === 'no') return {title:'Read the error code',copy:'Preserve the version and error. Read troubleshooting; do not lower security or elevate privileges.',href:'#help'};
 if (demo !== 'yes') return {title:'Run the synthetic demo',copy:'In the extracted folder, check VERIFY.cmd and SHIELD.cmd --help, then TRY_DEMO.cmd. Read demo: PASS and submitted_commands_executed: false.',href:'#start'};
 return {title:'Report your actual result',copy:'These selections do not verify success. Report actual installation, first inspection and concrete usefulness separately. No customer files or credentials.',href:'https://github.com/sirundae/arche-shield-evaluation/issues/new?template=00-evaluation.yml'};
}
if (typeof module !== 'undefined') module.exports={nextStep};
if (typeof document !== 'undefined') {
 const form=document.getElementById('readiness');
 function update() {
  const data=new FormData(form), value=nextStep(data.get('python'),data.get('checksum'),data.get('demo'));
  document.getElementById('next-title').textContent=value.title;
  document.getElementById('next-copy').textContent=value.copy;
  const link=document.getElementById('next-link'); link.href=value.href;
  link.textContent=value.href.startsWith('https:')?'Open evaluation form':'Read instructions';
 }
 form.addEventListener('change',update); form.addEventListener('reset',()=>setTimeout(update,0)); update();
}
