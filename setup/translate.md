---
description: Apply the Cabinet moves you picked to whatever you're building
---

<!--
  Template for the global /translate command.
  The Cabinet setup step copies this to ~/.claude/commands/translate.md and
  replaces __CABINET_DIR__ with the absolute path of your Cabinet folder, so
  /translate works in any project. To install by hand, do that substitution
  and copy this file there yourself.
-->

Read the moves I picked in `__CABINET_DIR__/_desk.json` — the `picked` array, where
each entry carries `zh` / `en` / `say` / `tune` / `feels` and which source plate it
came from. For the real color, proportion and usage of each move, also look at its
source image under `__CABINET_DIR__/assets/`.

Combine those moves with the product I'm building in the **current** project and write
a concrete translation plan:

- lead with each move's `say` (the instruction), grounded in what you saw in the image;
- carry every move's `tune` boundary;
- never reproduce a reference's layout, content, or palette wholesale — adapt the
  technique, don't copy the picture.

Show me the plan first. Only touch code after I confirm.
