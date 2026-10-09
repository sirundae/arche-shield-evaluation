# First value from the synthetic Decision Card

A synthetic evaluation demo, not a live agent connection or SHIELD ON. The 3/5-minute goals have not been measured with users.

1. **Prepare and verify:** Windows 11 x64 and existing trusted Git for Windows required. Python included. Download the ZIP into a new local folder and compare SHA256. On mismatch/security restriction STOP; never bypass it.
2. **First run:** Extract all files to a fresh folder and run `CARD_DEMO.cmd`. No administrator/PATH/registry/global hook changes. On error STOP and report only a synthetic reproducer/error code.
3. **Read the decision:** Compare synthetic Read ALLOW with `.git/config` Write DENY/GIT_METADATA. ALLOW is advisory, not execution permission. No Write/delete is executed; fixture bytes remain unchanged. `card-demos/<UUID>/result.json` is internal synthetic evidence.

[Download ZIP](https://github.com/sirundae/arche-shield-evaluation/releases/download/v0.1.0-rc4-eval4-card/arche-shield-0.1.0-rc4-eval4-card-windows-x64.zip) — 11,516,897 bytes

SHA256: `31f6578679ff5f4022edfb34be1a6ae794cfae5c3a748b30d62bc41be014f79b`

PowerShell: `(Get-FileHash -Algorithm SHA256 "arche-shield-0.1.0-rc4-eval4-card-windows-x64.zip").Hash`

[Release, terms, known limits, checksums and rollback](https://github.com/sirundae/arche-shield-evaluation/releases/tag/v0.1.0-rc4-eval4-card)

Close the demo to stop it; no hook was installed. Preserve outputs. For the earlier manual preflight package, use the unchanged [eval3 release](https://github.com/sirundae/arche-shield-evaluation/releases/tag/v0.1.0-rc4-eval3-portable). Cached/downloaded files cannot be recalled completely.

Native connection: CONNECTED_UNVERIFIED / NOT_RUN. Existing Windows builder checks are not fresh-OS, independent-audit or customer evidence. Unsigned/TOCTOU/heuristic/native timeout limits remain. AUDIT016 INCOMPLETE; RC4 independent security audit NOT_RUN. Production hooks/providers/user restores OFF.

Free evaluation/testing only; no production/commercial/resale/redistribution/white-label/team rights. Payment OFF. Optional KRW49,000 setup-support hypothesis is not a software license or commercial-use right; scope stays in existing release terms.

[Voluntary evaluation feedback](https://github.com/sirundae/arche-shield-evaluation/issues/new?template=00-evaluation.yml) · [Use/support-intent inquiry](https://github.com/sirundae/arche-shield-evaluation/issues/new?template=00-use-inquiry.yml). GitHub sign-in required; never submit private code/logs/secrets. Distinguish download/install/inspection/concrete value/support intent/commercial inquiry/payment. Synthetic demo does not increment SHIELDED_REAL_ACTIONS_WITHOUT_MANUAL_PREFLIGHT. Seven-day origin remains 2026-10-05T11:03:52Z; downloads are not customers or revenue.
