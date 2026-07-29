#!/usr/bin/env bash
# Generates a print-ready 2-page PDF next to every worksheet PNG (same name, .pdf):
#   page 1 = the original color worksheet
#   page 2 = a grayscale, contrast-boosted version optimized for black-and-white
#            printing (colored panels lighten to pale gray; text/line art stays dark)
# Idempotent: skips a PDF that is newer than its PNG. Pass --force to rebuild all
# (needed after changing the output format). Run from gtky/.
set -euo pipefail
cd "$(dirname "$0")"
FORCE=0; [ "${1:-}" = "--force" ] && FORCE=1
made=0; skipped=0
while IFS= read -r png; do
  pdf="${png%.png}.pdf"
  if [ "$FORCE" -eq 0 ] && [ -f "$pdf" ] && [ "$pdf" -nt "$png" ]; then skipped=$((skipped+1)); continue; fi
  # 2-page PDF: original, then a B&W-print-friendly grayscale clone.
  # -brightness-contrast 8x18 lifts backgrounds toward white and firms up lines.
  magick "$png" \( +clone -colorspace Gray -brightness-contrast 8x18 \) \
    -units PixelsPerInch -density 150 -compress zip "$pdf"
  made=$((made+1))
done < <(find k-2 3-5 6-8 9-12 -type f -name '*.png' 2>/dev/null | sort)
echo "PDFs generated: $made, up-to-date skipped: $skipped"
