---
name: conventional-commits
description: Write clear Conventional Commit messages and release notes from diffs, staged changes or commit ranges. Use whenever the user asks for a commit message, wants to tidy or squash history, asks "what changed between v1 and v2", or needs a changelog or release notes, even if they do not mention Conventional Commits.
---

# Conventional commits and changelogs

A commit message is for the person debugging this code in a year. Optimise for them.

## Message format
```
<type>(<optional scope>)!: <imperative summary, ≤ 72 chars>

<body: why the change was needed and what behaviour changes; wrap at ~72>

<footers: BREAKING CHANGE:, Fixes #123>
```
Types: `feat` (new capability), `fix` (bug), `perf`, `refactor` (no behaviour change), `docs`, `test`, `build`, `ci`, `chore`. Add `!` and a `BREAKING CHANGE:` footer when users must change something.

## How to write a good one
1. Read the whole diff first. Decide the single reason it exists; if there are two unrelated reasons, recommend two commits.
2. Summary in the imperative ("add", not "added"), no trailing period, says what the change does for a user, not which files moved.
3. Body explains **why**, mentioning the alternative you rejected if it is not obvious. Skip the body for trivial changes.
4. Never invent issue numbers or claim tests that were not run.

## Release notes
Group by type, breaking changes first, one line per change with the short hash. Merge duplicates, drop pure `chore`/`ci` noise unless the audience is contributors, and write for the reader of the release page, not the author of the commits. If a Git tool is available, list the range with it instead of asking the user to paste history.
