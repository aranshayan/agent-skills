---
name: safe-ops
description: Protocol for destructive or hard-to-reverse actions such as deleting data or files, DROP/TRUNCATE and migrations, force-push, resetting branches, rotating or revoking credentials, and anything touching production. Use before running such a command, when the user asks for a cleanup, reset, purge or migration, or when a command's target (which database, which environment, which path) is not completely certain.
---

# Safe operations

Agents fail in a recognizable way: a plausible command, run against the wrong target, with no way back. This protocol makes the target, the blast radius and the way back explicit before anything irreversible happens.

## Before running
1. **Name the target exactly.** Which environment, host, database, branch, path? Read it from the actual connection or working directory instead of assuming. "I think this is staging" is not a check; confirm it.
2. **Measure the blast radius.** Turn the action into a read-only preview first: a `SELECT count(*)` with the same `WHERE`, `ls`/`find` with the same glob, `git log origin/main..HEAD`, a dry-run flag. Report the numbers.
3. **Check the way back.** Is there a backup, a transaction you can roll back, a commit or stash that preserves the state? If not, create one first, or say clearly that it is irreversible.
4. **Prefer the gentler option**: archive instead of delete, `--force-with-lease` instead of `--force`, soft-delete, move to a trash folder, narrow the `WHERE`.
5. **Get explicit approval for the exact command.** Show the command, the target, the counts, and the rollback plan, then wait. Approval for one action does not cover the next one.

## Never
- Run destructive commands against production because it was "just a quick fix".
- Run an `UPDATE`/`DELETE` without a `WHERE`, or `rm -rf` with an unexpanded variable or broad glob.
- Work around a permission block or read-only setting to complete the task; report it and ask.
- Proceed when the preview does not match what the user described (far more rows, unexpected paths). Stop and report the mismatch.

## After
Verify the result with a read-only check and report what changed, with counts, and how to undo it.
