# Agents

This repo drives a **feel → move → reference** inspiration library. The ingest
logic is agent-neutral and lives in [`INGEST.md`](./INGEST.md).

## Ingest

When images appear in `_inbox/`, read `INGEST.md` at the repo root and follow it
**exactly**: extract moves (facets), measure `ar`/`colors` with Pillow, generate
thumbnails, and append entries to `data-v3.js`. Do **not** modify `index.html`
or any other code file.

- **Claude Code** → use the `/ingest` command (`.claude/commands/ingest.md`),
  which just points here.
- **Codex / other agents** → read `INGEST.md` from the repo root and follow it.

## Translate

In any project, read the moves the user picked from `_desk.json`, combine them
with the product being built, and write a concrete plan *before* touching code.
Ship only the `say` instruction and respect each move's `tune` boundary — never
reproduce a whole reference's layout, content, or palette.
