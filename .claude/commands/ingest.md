---
description: Ingest the images in _inbox/ into the Facet library
---

Read `INGEST.md` at the repo root and follow it exactly.

Process every image in `_inbox/`: align with the existing move vocabulary,
extract moves (facets), measure `ar` and `colors` with Pillow, generate
thumbnails, and append entries to `data-v3.js` (run `node --check` before and
after). Do not modify `index.html` or any other code file. Finish with the
summary line specified in INGEST.md.
