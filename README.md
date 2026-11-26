# agent-skills

[![Validate](https://github.com/aranshayan/agent-skills/actions/workflows/validate.yml/badge.svg)](https://github.com/aranshayan/agent-skills/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Practical [Agent Skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) for Claude: short, opinionated playbooks that explain *why* each step matters. They work on their own and pair with the MCP servers in this series.

| Skill | Use it for | Pairs with |
| --- | --- | --- |
| [`sql-query-review`](skills/sql-query-review/SKILL.md) | Reviewing queries and migrations for correctness, performance and safety | [mcp-database](https://github.com/aranshayan/mcp-database) |
| [`database-explorer`](skills/database-explorer/SKILL.md) | Answering questions from an unfamiliar database without misreading the schema | [mcp-database](https://github.com/aranshayan/mcp-database) |
| [`conventional-commits`](skills/conventional-commits/SKILL.md) | Commit messages and release notes | [mcp-git-insights](https://github.com/aranshayan/mcp-git-insights) |
| [`git-archaeology`](skills/git-archaeology/SKILL.md) | "Why does this exist / when did this break?" from history | [mcp-git-insights](https://github.com/aranshayan/mcp-git-insights) |
| [`pr-review`](skills/pr-review/SKILL.md) | Prioritised code review of a diff or PR | — |
| [`web-research-brief`](skills/web-research-brief/SKILL.md) | Sourced research briefs, with prompt-injection hygiene | [mcp-web-reader](https://github.com/aranshayan/mcp-web-reader) |
| [`document-summarizer`](skills/document-summarizer/SKILL.md) | Faithful, referenced summaries of PDFs, Word and spreadsheets | [mcp-docs-reader](https://github.com/aranshayan/mcp-docs-reader) |
| [`session-handoff`](skills/session-handoff/SKILL.md) | A one-page handoff so a fresh session or agent can continue without re-explaining | — |
| [`claude-md-builder`](skills/claude-md-builder/SKILL.md) | Create or prune a lean `CLAUDE.md` from the real repository | — |
| [`clarify-first`](skills/clarify-first/SKILL.md) | A few sharp questions before large or ambiguous work ("grill me") | — |
| [`safe-ops`](skills/safe-ops/SKILL.md) | Target, blast radius, rollback and approval before destructive actions | [mcp-database](https://github.com/aranshayan/mcp-database) |
| [`verify-before-done`](skills/verify-before-done/SKILL.md) | Evidence before "done": run the checks, exercise the change, report honestly | — |

## Install

**Claude Code** — copy the skills you want into your personal or project skills folder:

```bash
git clone https://github.com/aranshayan/agent-skills.git
cp -r agent-skills/skills/* ~/.claude/skills/        # all users' projects
# or: cp -r agent-skills/skills/pr-review .claude/skills/   # one project
```

**Claude.ai / Claude Desktop** — zip a skill folder (the folder itself at the zip root) and upload it under Settings → Capabilities → Skills.

## Quality

`npm run validate` (plain Node, no dependencies) checks every skill: frontmatter present, `name` equals the directory and is lowercase-hyphenated, description between 80 and 1024 characters, `SKILL.md` under 500 lines. CI runs it on every push.

These skills have been **structurally validated, not behaviourally benchmarked**. If you find one that triggers too often, too rarely, or gives poor guidance, please open an issue with the prompt you used.

## Contributing

One skill per folder: `skills/<name>/SKILL.md`. Write the description to say both what the skill does and when to use it. Explain the reasoning behind instructions instead of shouting rules. Run the validator before opening a PR.

## License

[MIT](LICENSE)
