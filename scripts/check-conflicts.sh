#!/usr/bin/env bash
set -euo pipefail

if rg -n "^(<<<<<<<|=======|>>>>>>>)" README.md components pages styles next.config.js package.json postcss.config.js tailwind.config.js .gitignore >/tmp/conflicts.out; then
  echo "❌ Merge conflict markers found:"
  cat /tmp/conflicts.out
  exit 1
fi

echo "✅ No merge conflict markers found in tracked source/config files."
