# Cabinet — ingest spec (for headless / agent sessions)

> Invoked by a coding agent (Claude Code, Codex, …) when images appear in `_inbox/`.
> The shell (command / skill) only says "read this file and follow it"; all logic lives here. Self-contained.
> Working directory = the repo root that holds this file (with `data-v3.js`, `_inbox/`, `assets/`, `thumbs/`). All paths below are relative to it.

## Flow (process every image in `_inbox/`, one at a time)

0. **Align with the library — align or upgrade, don't freeze.** First extract the existing move vocabulary (`grep -o 'zh: "[^"]*"' data-v3.js`, and the same for `en`). When a new image shows a move already in the library:
   - the existing zh/en still passes the reverse-description self-check (step 3) → **reuse it**; never coin a synonym (summon matches on text, so drift makes the same move un-summonable).
   - the existing word is a weak coordinate or simply wrong → **switch to a more accepted term and rename library-wide**: change zh/en on *every* facet of that move in `data-v3.js` (then `node --check`), and log one line in `CHANGELOG.md` (old → new + reason). You align to the best *current* term, not the earliest one written; a move has exactly one current name.
1. **Look at the image.** Read the file; understand what it is (web / poster / UI / image), its layout, color, texture, mood.
2. **Extract moves (facets).** 4–6 per image (up to 9 for dense ones). Granularity standard: **named and transferable** — specific enough that an AI can reproduce a particular effect, general enough to reuse across products. Too coarse ("gradient", "looks nice") → drop. Too fine ("12px radius") → drop.
3. **Naming discipline & quality gate.**
   - **zh/en are two language-faces of one term, same purpose:** let both humans and AI grasp the move's original meaning. Anchor to the term's source language (usually English); the other side is a faithful correspondence — use the established translation when one exists (glassmorphism, small caps), a plain literal otherwise. **No rhetorical coinage in the name**; put vivid phrasing in `mech`.
   - **en reverse-description self-check:** a move word must be an effective coordinate in model space — downstream AI has to recognize it to reproduce it. Before finalizing each `en`, test: *without looking at the image, what does this word alone evoke?* Matches the move on the image = strong coordinate, keep. Doesn't match, or the word was improvised = swap for a more accepted industry term (the glassmorphism / film grain / mesh gradient tier). No established word exists → use a plain descriptive phrase (e.g. `photo-backed UI`). Never invent jargon.
   - **New words leave a rationale** (see "Done criteria").
4. **Measured data** (use `python3` + Pillow, no eyeballing):
   - `ar` = **width ÷ height** (compute from real pixels — a flipped ratio turns a landscape into a portrait on the canvas).
   - `colors` = 4–6 dominant hex (quantize, sort by share).
5. **Thumbnail** (Pillow):
   ```bash
   python3 -c "from PIL import Image; im=Image.open('<src>').convert('RGB'); im.thumbnail((720,720)); im.save('thumbs/<id>.jpg', quality=85)"
   ```
6. **Write the library.** New id = current max + 1 (4-digit, zero-padded). Append the entry to the `window.LIBRARY` array in `data-v3.js`; run `node --check data-v3.js` afterward.
7. **Archive.** Move the original to `assets/<id>.<ext>`; leave only `.gitkeep` in `_inbox/`.

## Entry schema (field-for-field with existing entries)

```js
{
  id: "00XX",
  title: "short title",
  family: "Screen|Image|Graphic",
  asset: "assets/00XX.jpg",
  thumb: "thumbs/00XX.jpg",
  ar: 1.78,                       // width ÷ height, measured
  colors: ["#hex", ...],          // 4-6, measured
  facets: [{
    id: "00XX-suffix",            // suffix = lowercase dimension (layout/color/type/surface/...)
    zh: "term, language-face A",   // faithful correspondence of en: established translation or plain literal, no rhetorical coinage
    en: "mature english term",     // an accepted term is a strong coordinate (glassmorphism / film grain tier); avoid jargon
    at: [x, y],                   // anchor of the move on the image, percentage [0-100, 0-100]
    feels: ["feel-word"],         // 1-3, from the vocabulary below
    mech: "why it works (for humans, one line).",
    say: "English instruction for AI — how to apply this move in another product.",
    q: "google image search keywords",
    tune: "borrowing boundary (one reminder that prevents copying / drift)."
  }]
}
```

## Feel-word governance (red line)

The vocabulary below holds the values stored in `facet.feels`. Tokens are kept as authored (not translated); English glosses are for readers only.

> 轻盈 (light) · 梦幻 (dreamy) · 柔和 (soft) · 自然 (natural) · 安静 (quiet) · 沉浸 (immersive) · 玩味 (playful) · 未来 (futuristic) · 能量 (energetic) · 冲击力 (impactful) · 精致 (refined) · 典藏 (collectible) · 仪式感 (ceremonial) · 神秘 (mysterious) · 警觉 (alert) · 科技 (technical) · 冷静 (calm) · 严谨 (rigorous)

Open a new word only when none fits, and log it in `CHANGELOG.md` with a reason. Vocabulary inflation dilutes summon — prefer mapping to an existing word, even at the cost of a slightly imperfect fit.

## Forbidden

- Don't modify `index.html` or any other code file; only touch `data-v3.js`, `assets/`, `thumbs/`, `_inbox/`.
- Don't run `git commit`.
- Don't delete or overwrite existing entries; run `node --check` before and after writing `data-v3.js`.
- Leave non-image files (`.txt`, `.gitkeep`, …) in `_inbox/` untouched.

## Done criteria

Per image: `data-v3.js` has the new entry and passes syntax, `assets/` has the original, `thumbs/` has the thumbnail, `_inbox/` is cleared. Final summary line: `Ingested N: №00XX title (M moves)…`, plus one rationale line for each **new word** (one not aligned to an existing library term):
`zh / en — blind-read evokes <picture>, matches <move> on the image; <established term | plain phrase>`.
