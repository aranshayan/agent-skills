---
name: pr-review
description: Review a pull request or code diff for bugs, security problems, missing tests and maintainability, with prioritised, actionable feedback. Use when the user shares a diff, PR link or branch and asks for a review, "second pair of eyes", or "is this safe to merge", and when they ask you to review code you just wrote.
---

# Pull request review

The goal is to find what would hurt after merge, not to show diligence. A review with three real findings beats thirty nitpicks.

## Process
1. **Understand intent.** Read the description and commits. State in one sentence what the change is meant to do; mismatches between intent and diff are often the most valuable finding.
2. **Read the diff for behaviour, not style.** For each changed function ask: what inputs break it (empty, null, huge, concurrent, malicious)? what happens on error? what did it used to do that it no longer does?
3. **Check the edges of the change**, not just the lines: callers of changed signatures, migrations vs. code deploy order, config and docs that should change too.
4. **Tests.** Is the new behaviour covered, including the failure path? Would the tests fail if the fix were reverted?
5. **Security.** Input validation, authorization on every new endpoint, secrets in code or logs, injection (SQL, shell, path), unsafe deserialisation.

## Reporting
Group findings as **Blocking** (bugs, security, data loss), **Should fix**, and **Nits** (say "nit:" and keep them few). For each: file and line, what is wrong, why it matters, and a suggested fix. Quote the code. Say what you did *not* verify (for example, "I did not run the tests"). End with a clear verdict: approve, approve with changes, or request changes. If the code is good, say what is good about it specifically.
