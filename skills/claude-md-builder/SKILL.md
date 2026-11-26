---
name: claude-md-builder
description: Create or improve a CLAUDE.md (project context file) by inspecting the repository, so the agent stops asking the same questions each session. Use when starting work in a new repo, when the user says "set up Claude for this project", "add project instructions", "the agent keeps forgetting how we do X", or when an existing CLAUDE.md is long, stale or contradicts the code.
---

# CLAUDE.md builder

The file is loaded into every session, so each line costs attention every time. The goal is the smallest file that prevents the most repeated mistakes, not a project encyclopedia.

## Investigate first
Read the README, package/build files, CI config, lint and test config, and a sample of recent commits. Find: how to install, build, test and run a single test; the code layout; naming and style conventions that tooling does not enforce; and anything surprising.

## What belongs in it
- **Commands**: exact install, build, test, lint, and "run one test" commands. Run them to confirm they work; a wrong command is worse than none.
- **Architecture in a few lines**: where things live and how the parts connect, only what you cannot infer from filenames.
- **Conventions the code does not enforce**: error handling style, how to add an endpoint or migration, test placement.
- **Pitfalls**: generated files not to edit, slow or flaky tests, required environment variables (names only), things that look wrong but are deliberate.
- **Boundaries**: what needs confirmation first (deploys, migrations, deleting data).

## What does not
Anything the README already says (link instead), standard language practice, long file listings, aspirational rules nobody follows, and anything that will be stale next month. If a rule is already enforced by a linter or formatter, cut it.

## Updating an existing file
Verify each claim against the code, delete what is stale, merge duplicates, and keep the total near 100 lines. Show the user a diff of what changed and why. Do not add rules to make a one-off correction permanent unless the user asks.

Offer to add a short "Verify" section listing the checks to run before declaring work done.
