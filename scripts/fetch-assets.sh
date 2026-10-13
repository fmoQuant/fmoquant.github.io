#!/usr/bin/env bash
# Downloads every file under /wp-content/ that the site's pages refer to, from your live WordPress site,
# and stores it in public/ at the same path, so all old image and download URLs keep working.
#
# Run it once from the project root, on your own computer:   npm run assets
# Only the referenced files are fetched. Unused uploads (videos, the 42 MB PDF...) are left out on purpose:
# GitHub refuses files over 100 MB and the repository stays small.
set -euo pipefail

ORIGIN="${ORIGIN:-https://www.mfquant.net}"
cd "$(dirname "$0")/.."

paths=$(grep -rhoE '/wp-content/[A-Za-z0-9._/%-]+' src | sort -u)

ok=0; skipped=0; failed=0
for p in $paths; do
  dest="public$p"
  if [ -s "$dest" ]; then skipped=$((skipped + 1)); continue; fi
  if curl -fsSL --create-dirs -o "$dest" "$ORIGIN$p"; then
    echo "downloaded $p"; ok=$((ok + 1))
  else
    rm -f "$dest"; echo "FAILED     $p" >&2; failed=$((failed + 1))
  fi
done

echo "done: $ok downloaded, $skipped already present, $failed failed"
[ "$failed" -eq 0 ]
