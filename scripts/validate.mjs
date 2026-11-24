#!/usr/bin/env node
// Structural validation of every skill: frontmatter, naming, size limits.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../skills/", import.meta.url));
let errors = 0;
const fail = (skill, msg) => { errors++; console.error(`✗ ${skill}: ${msg}`); };

for (const dir of readdirSync(root).filter((d) => statSync(join(root, d)).isDirectory())) {
  let text;
  try { text = readFileSync(join(root, dir, "SKILL.md"), "utf8"); } catch { fail(dir, "missing SKILL.md"); continue; }
  const m = /^---\n([\s\S]*?)\n---\n/.exec(text);
  if (!m) { fail(dir, "missing YAML frontmatter"); continue; }
  const fm = Object.fromEntries(m[1].split("\n").map((l) => { const i = l.indexOf(":"); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
  if (fm.name !== dir) fail(dir, `name "${fm.name}" must equal the directory name`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(fm.name ?? "") || fm.name.length > 64) fail(dir, "name must be lowercase-hyphenated, ≤ 64 chars");
  if (!fm.description) fail(dir, "missing description");
  else if (fm.description.length > 1024) fail(dir, `description is ${fm.description.length} chars (max 1024)`);
  else if (fm.description.length < 80) fail(dir, "description too short to trigger reliably");
  if (/[<>]/.test(fm.description ?? "")) fail(dir, "description must not contain angle brackets");
  if (text.split("\n").length > 500) fail(dir, "SKILL.md exceeds 500 lines; move detail into references/");
  if (errors === 0) console.log(`✓ ${dir}`);
}
if (errors) { console.error(`\n${errors} problem(s)`); process.exit(1); }
