<div align="center">

# Cabinet

**Translate a feeling you can't name into something an AI can build.**

by 布灵布灵灵 · [Xiaohongshu](https://xhslink.com/m/1ht5s0trmNo) · [Live demo](https://cabinet-lingganku.vercel.app/) · [中文](./README.md)

MIT · runs in your browser · no backend

</div>

---

## What it solves

> A **bookmark folder / mood board** answers: "I saw something good — save it."
>
> **Cabinet** answers: "How do I get this feeling into my own product?"

You see a design and feel *something* — quiet, expensive, alive — but when you
ask an AI to "make it feel like that," the words come out vague and the result
comes back generic.

What's missing is that the **feeling was never broken down into transferable moves**.

Cabinet does exactly that: it breaks a reference image into **facets** — named,
reusable moves — and hands them to your coding agent as precise instructions,
so you carry the technique instead of copying the picture.

**Feel it first** → the [live demo](https://cabinet-lingganku.vercel.app/).
The Discover tab also curates quality design-reference sites — find, decode,
and use inspiration in one place.

---

## The idea: copying, to leave the copybook

Borrowing was never about reproducing the original — it's about learning from
it. In art and Chinese calligraphy you begin by copying the masters (*lín mó*,
临摹), but **the copy was never the point**: you take in *why* something works
until you can leave the copybook behind and make work that is your own — your
own paintings, your own hand.

In the age of AI, copying is no longer only hand-and-eye training. What's worth
training now is **observation and expression** —

*Which part do I actually like?*
*What move creates this feeling?*
*How would I say it in my own work?*

Cabinet doesn't hand you a whole-image prompt. You learn — as you use it — what
move the author reached for and why it works, then try to carry the
**technique** across. **Learn by using, use to learn** — not assemble a copy of
someone else's finished work.

---

## How to use it

Cabinet is a **Claude Code project with a visual front-end** — the browser page
is where you look; your coding agent is where the work happens. Before you
start, make sure you have two things: **Claude Code** + a **Chromium-based
browser** (Chrome / Edge).

### Option 1: macOS / Linux

Copy these three lines, once:

```bash
git clone https://github.com/pxx-design/cabinet
cd cabinet
./setup/install.sh
```

`install.sh` sets up the `/translate` + `转译` triggers and opens the app the
first time. On macOS it also installs an auto-ingest watcher — clicking
"ingest" processes your references automatically (opt out with `--no-watcher`);
on Linux, stage with "ingest" and then type `/ingest` in Claude Code.

### Option 2: Windows

Same three lines, but run them in **Git Bash** (it ships with Git for Windows;
Claude Code on Windows depends on it anyway):

```bash
git clone https://github.com/pxx-design/cabinet
cd cabinet
./setup/install.sh
```

Three differences:

- Paste with **`Ctrl+V`**.
- No auto-ingest watcher — stage with "ingest" on the page, then type `/ingest`
  in Claude Code.
- The bare-word `转译` trigger is **untested on Windows**; `/translate` does the
  same thing — use that.

> The Windows path hasn't been fully tested end-to-end. If any step fails, go
> straight to Option 3 — the page itself, `/ingest` and `/translate` are all
> cross-platform mechanisms and don't depend on the install script.

### Option 3: paste it all to Claude Code (any OS)

Don't want to touch the command line? Paste this to Claude Code as-is and it
sets everything up for you:

```text
Clone and set up Cabinet for me: git clone https://github.com/pxx-design/cabinet && cd cabinet,
run ./setup/install.sh, and open index.html in my browser. Then tell me to click "connect"
(bottom-left) and pick the cabinet folder. When I stage a reference and hit "ingest", run /ingest.
```

### The one manual step

Browser security — nothing can automate it: the first time, follow the on-page
prompt at the bottom-left (the pulsing dot) — click **connect** → pick this
`cabinet` folder → **Allow**. That lets the page save to disk. You do it once.

**To reopen later, just double-click `index.html`** — on modern Chrome that's
the full experience. If your browser blocks folder access on `file://`, run
`./start.sh` (localhost) instead.

---

## Two actions, day to day

- **Ingest `/ingest`** — paste a reference into the page (`⌘V` / `Ctrl+V`, or
  drop it in `_inbox/`) and hit "ingest". Your agent reads
  [`INGEST.md`](./INGEST.md) and breaks each image into moves: `zh/en` name,
  on-image anchor, feel-words, why it works, how to tell an AI, and a borrowing
  boundary. With the macOS watcher it's fully automatic; elsewhere, type
  `/ingest`.
- **Translate `/translate`** — in *any* project, your agent reads the moves you
  picked (`_desk.json`), combines them with the product you're building, and
  writes a translation plan first — it touches code only after you confirm.

**Anti-copying is structural:** a move ships only its `say` (the instruction),
never a whole-image prompt; the `tune` boundary travels with each move; colors
aren't carried over automatically. The spec is agent-neutral — Claude Code uses
`/ingest`, other agents read `INGEST.md` directly (see
[`AGENTS.md`](./AGENTS.md)).

---

## The model: feel ← move ← reference

- **Reference** (a plate) — a screenshot or image you collected.
- **Move** (a facet) — one concrete technique on that reference: *pastel
  gradient*, *postal ephemera*, *photo-backed UI*. Named so an AI recognizes
  it, scoped so it transfers to your product.
- **Feeling** — emergent. A reference *feels* a certain way because of the
  moves it stacks. Feel-words live on moves, never on the picture.

## Three layers

```
Browser (input / view)        Disk (bridge)         Conversation (the model)
drop a reference         →     _inbox/         →     /ingest: break it into moves
roam the feel-map,
read the anchors
pick moves (mix across   →     _desk.json      →     /translate: your agent reads
references)                                          the picked moves + already knows
                                                     your product → writes a translation
                                                     you confirm, then builds it
```

The browser is the interface, the disk is the bridge, and **the conversation
with your coding agent is where the model's ability actually happens.** Cabinet
doesn't generate the translation in the page — your coding agent knows your
product context better.

---

## What's in the box

```
index.html        the app (feel-map + drawer + summon + ingest tray + disk bridge)
data-v3.js        the data source — 6 curated seed plates (field docs in the header)
assets/ thumbs/   seed reference images (low-res) + thumbnails
folio/ shots/     "find inspiration" directory — thumbnails linking to design sites
_inbox/           drop zone for references to ingest
INGEST.md         the agent-neutral ingest spec
start.sh          localhost fallback (if your browser blocks connect on file://)
setup/            install.sh — installs /translate, the 转译 hook, and (macOS) the watcher
```

This is a **seed set of 6 plates** so the app isn't empty on first open. The
point is to fill it with *your* references. See [NOTICE.md](./NOTICE.md) for the
status of the bundled images.

---

## Requirements

- **Claude Code** (or any agent that can read `INGEST.md`) — this does the actual
  work of ingest and translate; required for everything beyond browsing.
- A **Chromium-based browser** for the front-end. The disk bridge uses the File
  System Access API — modern Chrome allows it from a double-clicked `file://` page;
  if yours blocks it, `./start.sh` serves over `localhost`.
- **Python 3** (powers `start.sh`) + **Pillow** (measures images during ingest);
  both the `python3` and `python` command names work. Node syntax-checks
  `data-v3.js`.
- *Other agents (Codex, …):* the app, `INGEST.md` and `AGENTS.md` are agent-neutral, so
  ingest/translate work via those. The `/ingest`, `/translate`, `转译` shortcuts and the
  auto-watcher are Claude Code-only for now.

---

## License

Code and facet text: [MIT](./LICENSE). Bundled reference images: see
[NOTICE.md](./NOTICE.md) (low-res, study/commentary, takedown on request).
