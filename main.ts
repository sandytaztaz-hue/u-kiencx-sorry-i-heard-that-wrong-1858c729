import { mkdirSync, writeFileSync } from "node:fs";

// One-line apology a smart speaker gives after mishearing its owner.
// The line is 122 characters, inside the 140-character gate.
const line =
  "Sorry, I heard 'set a timer for the pasta' as 'set a timer for the past' — your 2019 is now al dente and I cannot undo it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
