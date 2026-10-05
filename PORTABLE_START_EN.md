# Windows 11 x64 portable evaluation

Release0.1.0-rc4-eval3-portable / unchanged RC4 product0.1.0. Includes official CPython3.13.16. No separately installed Python needed. x64 only; ARM64/32bit not verified.

Compare official ZIP SHA256 first. Extract All into a fresh folder. Run VERIFY.cmd (verification: PASS), then TRY_DEMO.cmd (demo: PASS, synthetic_only:true, submitted_commands_executed:false). To retain output, enter cmd in File Explorer address bar and run these commands. SHIELD.cmd --help shows CLI. No installer, system PATH/registry/security changes, automatic update or elevation. Windows built-in PowerShell required; stop if local policy blocks it. Never disable protections to run this evaluation.

Use synthetic/test files only. DENY/exit2 under C:\Users can be correct. ALLOW is advisory; no OS-wide enforcement. Payments/production/real-user restore/hooks/live providers OFF. Read known limitations/evaluation terms. Official runtime files and full runtime/LICENSE.txt preserved; upstream runtime signature is not SHIELD signing or audit certification. Keep prior package and synthetic evidence for rollback. Legacy eval2 still available.

Voluntary feedback: https://github.com/sirundae/arche-shield-evaluation/issues/new?template=00-evaluation.yml (sign-in required; no private data/credentials). Support interest is not a purchase or license.
