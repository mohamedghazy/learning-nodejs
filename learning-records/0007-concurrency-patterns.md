# Learning Record 0007: Concurrency Patterns

## Date
2026-07-16

## Context
Seventh lesson. User understands all file operations. This lesson covers the performance pattern for batch operations — essential for servers handling multiple files per request.

## Key Insights

### The Core Decision
- "If one fails, can the others still be useful?"
- YES → `Promise.allSettled()` (plugins, batch uploads, optional data)
- NO → `Promise.all()` (required configs, related writes, startup dependencies)

### Promise.all
- Rejects immediately on first failure (fast-fail)
- Other operations still complete in background but results are discarded
- Preserves input order: results[i] matches input[i]
- Use for: required configs, database+cache init, related report files

### Promise.allSettled
- ALWAYS resolves (never rejects)
- Returns array of `{ status: 'fulfilled', value }` or `{ status: 'rejected', reason }`
- Waits for all to complete before returning
- Use for: optional plugins, batch processing, user uploads, graceful degradation

### Anti-Patterns
- `await` in a loop = sequential (N * latency instead of max(latency))
- Unbounded Promise.all with thousands of files = EMFILE (too many open descriptors)

### Controlled Concurrency
- For large batches: limit concurrent operations (e.g., 20 at a time)
- Pattern: use Promise.race on an executing set to wait for a slot
- Production: use `p-limit` package for clean implementation
- This prevents EMFILE errors and memory pressure

### Key Fact
- Promise.all preserves input order — results array matches input array regardless of completion order

## Prior Knowledge Connected
- Same Promise patterns used with fetch() in React for concurrent API calls
- The "await in a loop" anti-pattern is common in frontend data fetching too
- Controlled concurrency similar to connection pooling concepts

## Zone of Proximal Development
Ready for: security (path traversal prevention) — the final lesson in the fs module sequence.
