---
name: sql-query-review
description: Review SQL queries and migrations for correctness, performance and safety on PostgreSQL, MySQL and SQLite. Use whenever the user shares a SQL query, asks why a query is slow or returns wrong results, wants an EXPLAIN plan interpreted, or is about to run an UPDATE, DELETE or schema migration on real data, even if they only say "does this look right?".
---

# SQL query review

A query can be valid and still wrong, slow, or dangerous. Review in this order, because correctness problems make performance advice moot and safety problems outrank both.

## 1. Pin down the dialect and schema
Ask or infer the engine (PostgreSQL, MySQL, SQLite). Behaviour differs: identifier quoting, `LIMIT` semantics, NULL ordering, integer division, implicit casts. If a database tool is connected (for example `mcp-database`), read the real schema with `describe_table` rather than guessing column names and types.

## 2. Safety (writes and migrations)
- `UPDATE`/`DELETE` without `WHERE`, or with a `WHERE` that could match far more rows than intended: suggest running the same predicate as a `SELECT count(*)` first.
- Wrap multi-step changes in a transaction; say what the rollback plan is.
- Destructive DDL (`DROP`, `TRUNCATE`, column type changes) on a large table: mention locking and the safer expand-and-contract path.
- Never interpolate user input into SQL; use placeholders.

## 3. Correctness
Look for the classic bugs: joins that multiply rows (one-to-many then `SUM`), `LEFT JOIN` whose right-side filter in `WHERE` silently turns it into an inner join, `NOT IN` with NULLs, `COUNT(col)` vs `COUNT(*)`, `GROUP BY` columns that don't match the intent, time-zone and date-boundary mistakes (`BETWEEN` on timestamps), and non-deterministic `LIMIT` without `ORDER BY`.

## 4. Performance
Only after the above. Use the plan, not folklore: ask for or run `EXPLAIN` (`EXPLAIN ANALYZE` executes the query, so never use it on a write). Look for sequential scans on large tables with selective filters, functions on indexed columns (`WHERE lower(email)=...`), leading-wildcard `LIKE`, `SELECT *` pulling wide rows, and missing composite indexes. Suggest a specific index with its column order and say why.

## Output
Lead with the most serious issue. For each finding give: what is wrong, a concrete corrected query, and how to verify the fix. If the query is fine, say so plainly instead of inventing nitpicks.
