---
name: clarify-first
description: Ask a few sharp questions before starting large, ambiguous or risky work, instead of charging ahead on assumptions. Use when a request could be built several different ways, touches many files, involves data or deployment, has unclear success criteria, or when the user says "grill me", "interview me", "ask me first" or "plan before coding". Skip it for small, clear tasks.
---

# Clarify first

The most expensive mistake is a confident, large, wrong implementation. A few minutes of questions up front is cheaper than a rewrite, but too many questions is its own failure. The skill is knowing which ones matter.

## Decide whether to ask
Ask only when a wrong guess would cost real effort or cause harm: more than one reasonable design, unclear scope, irreversible or shared-environment effects, or missing information that code cannot reveal. If the answer can be found by reading the repo, read it instead of asking.

## How to ask
1. **Explore first.** Look at the code and docs so your questions show you did the homework.
2. **Ask at most 3 to 5 questions**, highest-impact first, in one message. Group related ones.
3. **Make each easy to answer.** Offer concrete options with your recommended default marked, and say what you will do if they do not reply. Avoid open-ended "what do you want?".
4. **Surface the assumptions** you would otherwise make silently, and let the user correct them.
5. **Ask about done**: what would make this a success, and how will it be checked?

## After the answers
Restate the plan in a few lines (scope, approach, what is explicitly out of scope, how it will be verified) and start. Do not ask a second round unless a new, material unknown appears. If the user says "just do it", proceed with your stated defaults and flag the assumptions in the result.
