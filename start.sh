#!/bin/bash
# 可选：起 localhost 打开灵感库。
# 平时双击 index.html 即可；只有当浏览器在 file:// 下拦了
# File System Access（右上「连接」失败）时才需要走这里。Ctrl+C 停止。
cd "$(dirname "$0")"
PORT=8777
echo "灵感库 → http://localhost:$PORT/index.html  (Ctrl+C 停止)"
( sleep 1; open "http://localhost:$PORT/index.html" ) &
python3 -m http.server $PORT
