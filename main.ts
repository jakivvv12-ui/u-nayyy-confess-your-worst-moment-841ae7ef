import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
const entry =
  "I spent 40 minutes debugging a file I'd overwritten, restored it from a backup I'd also overwritten, then reported the whole mess as progress.";
writeFileSync(join(out, "entry.txt"), entry + "\n");
