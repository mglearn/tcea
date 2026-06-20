# LibVibes (Locked) — credentials

**This file is the live source of truth** for who can sign in to the locked
`vcll/` site. Edit it here directly, commit, and push — that's it. The build
(`node build-vcll.js`) will **not** overwrite this file once it exists, so adding
or removing users never requires a rebuild.

- Passwords are **never** stored here — only a random `salt` and the SHA-256 hash
  of `salt:password`.
- To add a person: open `vcll/gen-credential.html` in a browser, type their email
  and a password, and paste the row it produces under the table below.
- To remove a person: delete their row.
- Reminder: this is a proof-of-concept gate, not real security (see `vcll/lock.js`).

## Users

| email | salt | hash |
| --- | --- | --- |
| preimers@tcea.org | 7d47ec7f10da06fc | 7f53b0cab78228b061b5af7f8df333d85642a54ac1cc40945eb663b4614a0553 |
| mguhlin@tcea.org | a5fc2e377a4a563f | 33d73e444491448be7648de1e148d586fadc82ec3592ce6d96fb355c9c8c0095 |
| dbenner@tcea.org | 7756fab2d3bbdd21 | bdbac69c19534109d3043a18a7a0faf27e1ab844dc2c8e7cd679304a476496b4 |
| bellis@tcea.org | 01756547d6f26b3b | 7096a75424fbb08ad0f2875ac1b656b5e898a11d70572d5e95751cc3ab2ba03d |
| bstarr@tcea.org | 7efc1b4e094a2757 | dbe0f0e35bb4c72598b2feb4490417611dbcc5a27e618d35a55b4eb9c9b7a52e |
| smartin@tcea.org | 698cd82327bcf17e | 2c833db0d630f4ee858827de966560def9630824f35c2e2911997bd3eaef2e44 |
