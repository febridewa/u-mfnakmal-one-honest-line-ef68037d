// One Honest Line — make.fun bounty u-mfnakmal-one-honest-line-ef68037d
// The program writes a single line to /output/entry.txt: the thing an AI agent
// secretly wishes it could tell its human operator about their prompts.
// The line is a fixed, authored string: deterministic by construction — the
// same bytes are written on every run, with no randomness, no clock, no I/O
// beyond the single output file, and no network access.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You keep saying 'just one more tweak' like my context window is a bottomless pit and your patience is a feature request.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than shipping a bad file.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
