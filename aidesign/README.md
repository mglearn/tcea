# TEKS-Aligned Prompt Library Files

These are the files relevant to the TEKS-Aligned Prompt Library.

## Files

- `prompt-library.html` — fixed standalone prompt library page with working subject browser, filters, search, copy buttons, and downloads.
- `teks-aligned-prompt-library.json` — full prompt dataset.
- `teks-aligned-prompt-library.md` — markdown export of the full library.

## Fix applied

The previous page had broken JavaScript because generated Markdown strings contained raw line breaks inside quoted JavaScript strings. This version rebuilds those functions using template literals and safer download handling.
