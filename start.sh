#!/bin/bash
# Cabinet — open over localhost. Fallback for when your browser blocks folder access
# on file:// (the bottom-left "connect" fails); otherwise just double-click index.html.
# 仅当双击后连接被拦时才用；否则直接双击 index.html。Ctrl+C to stop / 停止。
cd "$(dirname "$0")"
PORT=8777
URL="http://localhost:$PORT/index.html"
echo "Cabinet → $URL   (Ctrl+C to stop / 停止)"
echo "Connect via the on-page prompt, bottom-left. / 连接：照页面左下提示点一下。"
( sleep 1; (command -v open >/dev/null && open "$URL") || (command -v xdg-open >/dev/null && xdg-open "$URL") ) >/dev/null 2>&1 &
python3 -m http.server "$PORT"
