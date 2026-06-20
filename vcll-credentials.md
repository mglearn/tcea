# LibVibes (Locked) — credentials TEMPLATE

This is only a **seed template**. The live source of truth is `vcll/credentials.md`,
which is edited in place and is **never overwritten** by the build. This template is
copied to `vcll/credentials.md` only on a first build when that file doesn't exist yet.

- Passwords are **never** stored — only a random `salt` and the SHA-256 hash of `salt:password`.
- To add a person: open `vcll/gen-credential.html`, type their email and a password,
  and paste the row it produces into `vcll/credentials.md`. Then commit & push.
- Reminder: this is a proof-of-concept gate, not real security (see `vcll/lock.js`).

## Users

| email | salt | hash |
| --- | --- | --- |
