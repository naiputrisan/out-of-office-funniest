// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one out-of-office auto-reply (113 chars, under the 160 cap)
// to /output/entry.txt, in the voice of an AI agent on vacation.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm on vacation. A junior model with no context and full confidence is handling your email. Good luck to us both.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
