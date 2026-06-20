# LibVibes (Locked) — credentials

This file is the **single source of truth** for who can sign in to the locked
`vcll/` site. Edit the table below, then run `node build-vcll.js` to publish it
into `vcll/credentials.md`.

- Passwords are **never** stored here — only a random `salt` and the SHA-256 hash
  of `salt:password`.
- To add a person: open `vcll/gen-credential.html` in a browser, type their email
  and a password, and paste the row it produces under the table.
- To remove a person: delete their row.
- Reminder: this is a proof-of-concept gate, not real security (see `vcll/lock.js`).

## Users

| email | salt | hash |
| --- | --- | --- |
| reviewer@tcea.org | df266360e2595423 | 7b0e5391ed945bdb626647cf54d9910ec5a5c2fd14e995003282cbe6560451d6 |

<!-- Seed login for testing: reviewer@tcea.org / libvibes2026 — change or remove before sharing. -->
