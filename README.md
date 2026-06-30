<div align="center">

# Cabinet

**Translate a feeling you can't name into something an AI can build.**

[中文](./README.zh.md) · MIT · runs in your browser, no backend

</div>

---

You see a design and feel *something* — quiet, expensive, alive — but when you
ask an AI to "make it feel like that," the words come out vague and the result
comes back generic. The gap isn't the model. It's that the **feeling was never
broken down into transferable moves**.

Cabinet is a small web app that does exactly that. It turns a reference into
**facets** — named, reusable moves — and hands them to your coding agent as
precise instructions, with a borrowing boundary attached so you adapt the
technique instead of copying the picture.

## Copying vs. learning

Borrowing was never about reproducing the original — it's about learning from
it. In art and Chinese calligraphy you begin by copying the masters (*lín mó*,
临摹), but the copy was never the point: you take in *why* something works until
you can leave the copybook behind and make work that is your own — your own
paintings, your own hand.

In the age of AI, copying is no longer only hand-and-eye training. What's worth
training now is **observation and expression** — *which part do I actually
like? what creates this feeling? how would I say it in my own work?*

Cabinet is built for exactly that. Instead of handing you a whole-image prompt, it
lets you learn — as you use it — what move the author reached for and why it
works, so you can carry that **technique** across. Learn by using, use to learn —
not assemble a copy of someone else's finished work.

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
doesn't generate the translation in the page — your agent already knows your
product context, so it does it an order of magnitude better.

## Quickstart

Cabinet is a **Claude Code project with a visual front-end** — the browser page is
where you look; your coding agent is where the work happens.

**Set it up (once):**

```bash
git clone https://github.com/pxx-design/cabinet
cd cabinet
./setup/install.sh        # /translate + 转译 keyword + (macOS) auto-ingest watcher
```

`install.sh` opens the app for you the first time. **To reopen later, just double-click
`index.html`** — on modern Chrome that's the full experience. If your browser blocks
folder access on `file://`, run `./start.sh` (localhost) instead.

**The one manual step** (browser security — nothing can automate it): the first time,
follow the on-page prompt at the bottom-left (the pulsing dot) — click **connect** →
pick this `cabinet` folder → **Allow**. That lets the page save to disk. You do it once.

**Day to day:**
- **Add a reference** — paste (`⌘V`) into the page and hit **ingest**. On macOS the
  watcher processes it automatically; otherwise type `/ingest` in Claude Code.
- **Use what you collected** — in any project, type **`/translate`** (or just **`转译`**);
  your agent applies the moves you picked, each with its borrowing boundary intact.

<details>
<summary>Rather have Claude Code do the setup? Paste this:</summary>

```text
Clone and set up Cabinet for me: git clone https://github.com/pxx-design/cabinet && cd cabinet,
run ./setup/install.sh, and open index.html in my browser. Then tell me to click "connect"
(bottom-left) and pick the cabinet folder. When I stage a reference and hit "ingest", run /ingest.
```

</details>

## The two flows

- **`/ingest`** — paste references into the page (or drop them in `_inbox/`),
  then your agent reads [`INGEST.md`](./INGEST.md) and breaks each image into
  moves: `zh/en` name, on-image anchor, feel-words, why it works, how to tell
  an AI, and a borrowing boundary. The spec is agent-neutral — Claude Code uses
  the `/ingest` command, other agents read `INGEST.md` directly (see
  [`AGENTS.md`](./AGENTS.md)).
- **`/translate`** — in *any* project, your agent reads the moves you picked
  (`_desk.json`), combines them with the product you're building, and writes a
  concrete plan before touching code.

**Anti-copying is structural:** a move ships only its `say` (the instruction),
never a whole-image prompt; the `tune` boundary travels with each move; colors
aren't carried over automatically.

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

## Requirements

- **Claude Code** (or any agent that can read `INGEST.md`) — this does the actual
  work of ingest and translate; required for everything beyond browsing.
- A **Chromium-based browser** for the front-end. The disk bridge uses the File
  System Access API — modern Chrome allows it from a double-clicked `file://` page;
  if yours blocks it, `./start.sh` serves over `localhost`.
- **`python3`** (powers `start.sh`) and **Pillow** (measures images during
  ingest); Node syntax-checks `data-v3.js`.
- *macOS:* `./setup/install.sh` also installs a launchd watcher so clicking "ingest"
  is processed automatically (opt out with `--no-watcher`). Other OSes trigger with `/ingest`.
- *Other agents (Codex, …):* the app, `INGEST.md` and `AGENTS.md` are agent-neutral, so
  ingest/translate work via those. The `/ingest`, `/translate`, `转译` shortcuts and the
  auto-watcher are Claude Code-only for now.

## License

Code and facet text: [MIT](./LICENSE). Bundled reference images: see
[NOTICE.md](./NOTICE.md) (low-res, study/commentary, takedown on request).
