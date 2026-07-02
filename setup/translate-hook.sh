#!/usr/bin/env bash
# Cabinet · 转译 trigger (Claude Code UserPromptSubmit hook).
# Fires when the whole prompt is exactly "转译"; prints the translate instructions
# to stdout, which Claude Code adds as context — so the bare word works like
# /translate. __CABINET_DIR__ is filled in at install time by setup/install.sh.
#
# Registered in ~/.claude/settings.json under hooks.UserPromptSubmit.

input=$(cat)
PY="$(command -v python3 || command -v python || echo python3)"
prompt=$(printf '%s' "$input" | "$PY" -c 'import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get("prompt") or d.get("user_input") or "")
except Exception:
    pass' 2>/dev/null)

# exact match only — "转译" must be the entire prompt (whitespace ignored),
# never fire when it merely appears inside a sentence.
clean=$(printf '%s' "$prompt" | tr -d '[:space:]')
if [ "$clean" = "转译" ]; then
cat <<'EOF'
The user invoked 转译 — run the Cabinet translate flow now:
Read the picked moves in __CABINET_DIR__/_desk.json (the `picked` array: each entry
has zh / en / say / tune / feels and which source plate it came from). For the real
color, proportion and usage of each move, also look at its source image under
__CABINET_DIR__/assets/. Combine those moves with the product I'm building in the
CURRENT project and write a concrete translation plan — lead with each move's `say`,
carry every `tune` boundary, and never reproduce a reference's layout, content, or
palette wholesale. Show me the plan first; only touch code after I confirm.
EOF
fi
exit 0
