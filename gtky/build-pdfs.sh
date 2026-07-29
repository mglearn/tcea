#!/usr/bin/env bash
# Generates a print-ready PDF next to every worksheet PNG (same name, .pdf).
# Idempotent: skips a PDF that is newer than its PNG. Run from gtky/.
set -euo pipefail
cd "$(dirname "$0")"
made=0; skipped=0
while IFS= read -r png; do
  pdf="${png%.png}.pdf"
  if [ -f "$pdf" ] && [ "$pdf" -nt "$png" ]; then skipped=$((skipped+1)); continue; fi
  # Letter page, image fit with small margin, keeps aspect; flate-compressed (lossless).
  magick "$png" -units PixelsPerInch -density 150 -compress zip "$pdf"
  made=$((made+1))
done < <(find k-2 3-5 6-8 9-12 -type f -name '*.png' 2>/dev/null | sort)
echo "PDFs generated: $made, up-to-date skipped: $skipped"
