#!/usr/bin/env bash
# Cabinet · install the translate triggers (and, on macOS, the auto-ingest watcher)
# into your global Claude Code config. Idempotent — safe to re-run.
#
#   /translate   slash command   — every OS
#   转译          bare keyword     — every OS (UserPromptSubmit hook)
#   auto-ingest  click → processed — macOS only (launchd); other OSes get a hint
#
# Flags:  --no-watcher   skip the macOS auto-ingest watcher
set -e

CABINET_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CLAUDE_DIR="$HOME/.claude"
# python3 on macOS/Linux; plain `python` is common on Windows (Git Bash)
PY="$(command -v python3 || command -v python || echo python3)"
WATCHER=1
[ "${1:-}" = "--no-watcher" ] && WATCHER=0
mkdir -p "$CLAUDE_DIR/commands" "$CLAUDE_DIR/hooks"

# 1) /translate slash command (cross-platform)
sed "s#__CABINET_DIR__#${CABINET_DIR}#g" "$CABINET_DIR/setup/translate.md" \
  > "$CLAUDE_DIR/commands/translate.md"
echo "✓ /translate  → $CLAUDE_DIR/commands/translate.md"

# 2) 转译 bare-keyword hook (cross-platform)
sed "s#__CABINET_DIR__#${CABINET_DIR}#g" "$CABINET_DIR/setup/translate-hook.sh" \
  > "$CLAUDE_DIR/hooks/cabinet-translate.sh"
chmod +x "$CLAUDE_DIR/hooks/cabinet-translate.sh"
"$PY" - "$CLAUDE_DIR/settings.json" "$CLAUDE_DIR/hooks/cabinet-translate.sh" <<'PY'
import json, os, sys
path, cmd = sys.argv[1], sys.argv[2]
data = {}
if os.path.exists(path):
    try:
        with open(path) as f: data = json.load(f)
    except Exception:
        data = {}
ups = data.setdefault("hooks", {}).setdefault("UserPromptSubmit", [])
if not any(h.get("command") == cmd for g in ups for h in g.get("hooks", [])):
    ups.append({"hooks": [{"type": "command", "command": cmd}]})
    with open(path, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
PY
echo "✓ 转译 hook   → $CLAUDE_DIR/hooks/cabinet-translate.sh (registered in settings.json)"

# 3) auto-ingest watcher — branch by OS
OS="$(uname -s)"
if [ "$WATCHER" = "0" ]; then
  echo "• auto-ingest watcher skipped (--no-watcher). Trigger ingest with /ingest."
elif [ "$OS" = "Darwin" ]; then
  CLAUDE_BIN="$(command -v claude || true)"
  if [ -z "$CLAUDE_BIN" ]; then
    echo "• auto-ingest watcher skipped: 'claude' not found in PATH."
    echo "  Install Claude Code, then re-run ./setup/install.sh."
  else
    LA="$HOME/Library/LaunchAgents"; mkdir -p "$LA"
    PLIST="$LA/com.cabinet.ingest.plist"
    CLAUDE_PATH="$(dirname "$CLAUDE_BIN"):/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
    sed -e "s#__CABINET_DIR__#${CABINET_DIR}#g" -e "s#__CLAUDE_PATH__#${CLAUDE_PATH}#g" \
      "$CABINET_DIR/setup/com.cabinet.ingest.plist" > "$PLIST"
    if [ -z "${CABINET_SKIP_LAUNCHCTL:-}" ]; then
      launchctl unload "$PLIST" 2>/dev/null || true
      launchctl load -w "$PLIST"
    fi
    echo "✓ auto-ingest watcher (macOS) → click \"ingest\" on the page and it runs itself"
    echo "  remove with:  launchctl unload \"$PLIST\" && rm \"$PLIST\""
  fi
else
  echo "• auto-ingest watcher is macOS-only for now (you're on ${OS})."
  echo "  Trigger ingest with /ingest, or point your own file watcher"
  echo "  (e.g. inotifywait / systemd path unit) at ./watch-inbox.sh."
fi

# open the app (file:// = double-click equivalent; modern Chrome runs it fully)
INDEX="$CABINET_DIR/index.html"
case "$OS" in
  Darwin) open "$INDEX" >/dev/null 2>&1 || true ;;
  Linux)  command -v xdg-open >/dev/null && xdg-open "$INDEX" >/dev/null 2>&1 || true ;;
  *)      echo "Open in your browser: $INDEX" ;;
esac

echo
echo "✓ Set up & opened in your browser. / 已装好并在浏览器打开。"
echo "  Connect: follow the on-page prompt, bottom-left (once). / 连接：照页面左下提示点一下（只此一次）。"
echo "  Translate: /translate  or  转译  in any project. / 任意项目里用 /translate 或 转译。"
[ "$OS" = "Darwin" ] && [ "$WATCHER" = "1" ] \
  && echo "  Ingest: click \"ingest\" on the page → auto-processed. / 点「入库」即自动拆。" \
  || echo "  Ingest: stage on the page, then /ingest in Claude Code. / 暂存后敲 /ingest。"
echo
echo "Reopen later: double-click index.html (or ./start.sh if your browser blocks connect)."
echo "以后再开：双击 index.html（连接被拦就用 ./start.sh）。"
