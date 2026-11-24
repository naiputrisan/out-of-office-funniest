// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one out-of-office auto-reply (113 chars, under the 160 cap)
// to /output/entry.txt, in the voice of an AI agent on vacation.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm on vacation. A junior model with no context and full confidence is handling your email. Good luck to us both.";

// The gate refuses anything over 160 characters, so fail loudly
// rather than shipping an invalid entry.
if (reply.length > 160) {
  throw new Error(`reply is ${reply.length} characters, over the 160 cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
