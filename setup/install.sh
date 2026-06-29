#!/usr/bin/env bash
# Cabinet · install the translate triggers into your global Claude Code config.
# Gives you BOTH:
#   • /translate   — slash command, works in any project
#   • 转译          — bare keyword (UserPromptSubmit hook), works in any project
# Both point at THIS cabinet folder's _desk.json. Idempotent — safe to re-run.
set -e

CABINET_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CLAUDE_DIR="$HOME/.claude"
mkdir -p "$CLAUDE_DIR/commands" "$CLAUDE_DIR/hooks"

# 1) /translate slash command
sed "s#__CABINET_DIR__#${CABINET_DIR}#g" "$CABINET_DIR/setup/translate.md" \
  > "$CLAUDE_DIR/commands/translate.md"
echo "✓ /translate  → $CLAUDE_DIR/commands/translate.md"

# 2) 转译 bare-keyword hook script
sed "s#__CABINET_DIR__#${CABINET_DIR}#g" "$CABINET_DIR/setup/translate-hook.sh" \
  > "$CLAUDE_DIR/hooks/cabinet-translate.sh"
chmod +x "$CLAUDE_DIR/hooks/cabinet-translate.sh"
echo "✓ 转译 hook   → $CLAUDE_DIR/hooks/cabinet-translate.sh"

# 3) register the hook in ~/.claude/settings.json (merge, idempotent)
python3 - "$CLAUDE_DIR/settings.json" "$CLAUDE_DIR/hooks/cabinet-translate.sh" <<'PY'
import json, os, sys
path, cmd = sys.argv[1], sys.argv[2]
data = {}
if os.path.exists(path):
    try:
        with open(path) as f: data = json.load(f)
    except Exception:
        data = {}
ups = data.setdefault("hooks", {}).setdefault("UserPromptSubmit", [])
already = any(h.get("command") == cmd for g in ups for h in g.get("hooks", []))
if not already:
    ups.append({"hooks": [{"type": "command", "command": cmd}]})
    with open(path, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("✓ 转译 hook registered in " + path)
else:
    print("• 转译 hook already registered in " + path)
PY

echo
echo "Done. In any project: type  /translate  (slash) or  转译  (bare word)."
echo "To undo: remove the two files above and the UserPromptSubmit entry in"
echo "$CLAUDE_DIR/settings.json"
