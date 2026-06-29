#!/bin/bash
# Facet ingest watcher (trigger-based, OPTIONAL — macOS launchd helper).
#
# Baseline ingest is just running `/ingest` (or telling your agent to read
# INGEST.md). This script automates it: the page's "ingest" button writes an
# `_inbox/.go` marker → launchd watches `_inbox/` and calls this → only when
# "has images AND has marker" does it invoke a headless agent. Pasting without
# clicking = silent wait (batch up / guard against stray pastes).
#
# Portability: working dir auto-detects to this script's folder; the agent is
# `claude` from PATH. To use another agent, swap the AGENT command below
# (e.g. `codex exec "..."`).

DIR="$(cd "$(dirname "$0")" && pwd)"
INBOX="$DIR/_inbox"
GO="$INBOX/.go"
LOCK="$DIR/.ingest.lock"
LOG="$DIR/_ingest.log"
AGENT="$(command -v claude || echo claude)"

shopt -s nullglob nocaseglob
has_imgs(){ imgs=("$INBOX"/*.png "$INBOX"/*.jpg "$INBOX"/*.jpeg "$INBOX"/*.webp "$INBOX"/*.gif); [ ${#imgs[@]} -gt 0 ]; }

# No images: clear an orphan marker and exit (covers the event from ingest emptying the inbox).
if ! has_imgs; then rm -f "$GO"; exit 0; fi
# Images but no marker: wait for the user to click "ingest".
[ -f "$GO" ] || exit 0

# Serial lock: bail if a run is in progress; a stale lock expires after 30 min.
if [ -d "$LOCK" ]; then
  if [ -n "$(find "$LOCK" -maxdepth 0 -mmin +30 2>/dev/null)" ]; then rmdir "$LOCK"; else exit 0; fi
fi
mkdir "$LOCK" 2>/dev/null || exit 0
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

sleep 2

for round in 1 2 3; do
  has_imgs && [ -f "$GO" ] || break
  rm -f "$GO"
  echo "[$(date '+%F %T')] ingest round ${round}: ${#imgs[@]} image(s)" >> "$LOG"
  cd "$DIR" && "$AGENT" -p "Run Facet ingest: strictly follow ./INGEST.md (flow, schema, feel-word governance) and process every image in ./_inbox/." \
    --allowedTools "Bash,Read,Write,Edit,Glob,Grep" \
    --permission-mode acceptEdits \
    >> "$LOG" 2>&1
  echo "[$(date '+%F %T')] ingest round ${round} done (exit $?)" >> "$LOG"
done
has_imgs || rm -f "$GO"
