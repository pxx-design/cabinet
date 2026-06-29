#!/bin/bash
# 网站 → 全页截图(Chrome headless)。入库口子3复用。
# 用法: ./capture-site.sh <url> <输出路径.png> [视口宽度]
set -e
URL="$1"; OUT="$2"; W="${3:-1440}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -z "$URL" ] && { echo "用法: ./capture-site.sh <url> <out.png> [宽度]"; exit 1; }
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --window-size="${W},900" --screenshot="$OUT" "$URL" >/dev/null 2>&1
echo "✓ 截图: $OUT"
