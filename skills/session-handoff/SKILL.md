---
name: session-handoff
description: Write a handoff note so work can continue in a fresh session, another agent or another person without re-explaining everything. Use when the user says handoff, wrap up, "continue tomorrow", "I'm hitting the context limit", switches machines or agents, or when a long session has accumulated decisions, dead ends and half-finished changes that would be lost on a restart.
---

# Session handoff

A new session starts with none of your memory. The cost of that is paid in re-explaining, repeated dead ends, and silently reversed decisions. A good handoff removes that cost in a page.

## Gather facts, don't recall them
Memory of a long session is unreliable, so check the real state before writing: `git status`, current branch, recent commits, failing tests, running processes. Write what you observed, not what you believe.

## Write `HANDOFF.md` (or the place the user names)
Keep it under about 60 lines; a reader should be productive in two minutes.

1. **Goal**: one or two sentences on what we are trying to achieve and for whom.
2. **State**: what is done, what is half-done, what is untouched. Include branch and uncommitted files.
3. **Decisions and why**: the choices that were made and the reason, especially ones a newcomer would be tempted to undo. Include rejected approaches and why they failed, so nobody retries them.
4. **Next steps**: ordered, concrete, each small enough to start immediately. Put the first one as an exact command or file.
5. **Gotchas**: environment quirks, flaky tests, commands that must not be run, things that look wrong but are intended.
6. **How to verify**: the commands that show the work is correct.

## Rules
- Never include secrets, tokens or personal data; point to where they live instead.
- Mark anything unverified as such ("believed", "not run").
- Don't narrate the session chronologically. A handoff is a map of the present, not a diary.
- If the work is in git, offer to commit the note on the branch; don't do it unasked.
