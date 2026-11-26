---
name: verify-before-done
description: Require evidence before claiming that code works or a task is finished. Use at the end of any implementation, bug fix, refactor or migration, when the user asks "is it done?", "does it work?" or "can I merge this?", and whenever you are about to write words like done, fixed, working or passing without having just run the checks.
---

# Verify before done

"It should work" is a prediction, not a result. Reviewers and users lose trust fastest when a confident "done" turns out wrong, so the finishing move is to produce evidence, and to be plain about what was not checked.

## Checklist
1. **Find the project's own checks**: test, typecheck, lint, build commands (check `CLAUDE.md`, package scripts, CI config). Run them all, not just the one you expect to pass.
2. **Exercise the change itself.** Tests that pass may not cover what you changed. Run the feature: call the endpoint, run the CLI with real input, open the page, trigger the bug's original steps and confirm they no longer fail.
3. **Prove the test can fail.** For a bug fix, confirm the new test fails without the fix (or at least reason explicitly about why it would). A test that cannot fail verifies nothing.
4. **Check the edges you touched**: empty input, errors, the old behaviour you must not break, other callers of changed code.
5. **Look at the diff once more.** Leftover debug output, unrelated changes, secrets, TODOs, files that should not be committed.

## Report honestly
State what you ran and the real result, quoting failures instead of summarizing them away. Separate three things: **verified** (ran it, saw it work), **inferred** (reasoned but did not run), and **not checked** (and why: no environment, too slow, needs credentials). If something fails, say so first and fix it or ask; do not bury it.

Do not claim success from a command that was not run in this session, from output you did not read, or from a check that was skipped because it was inconvenient.
