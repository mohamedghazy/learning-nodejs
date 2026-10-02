# Learning Record 0004: Streams & Pipeline

## Date
2026-07-15

## Context
Fourth lesson. User has solid grasp of readFile/writeFile and error handling. Moving to the production pattern for large/unknown-size files.

## Key Insights

### Why Streams
- readFile buffers entire file in memory — crashes on large files (2GB libuv limit)
- Streams process chunks (default 64KB for file streams) — constant memory
- Essential for: file uploads, HTTP responses, log processing, ETL pipelines

### The pipeline() Pattern
- Import: `pipeline` from `node:stream/promises` (async/await)
- Import: `createReadStream/createWriteStream` from `node:fs` (NOT fs/promises)
- pipeline() handles backpressure, error propagation, stream cleanup
- Single try/catch catches errors from ANY stream in the chain

### Backpressure
- Fast reader pauses when slow writer's buffer fills (at highWaterMark threshold)
- pipeline() manages this automatically — no manual drain/pause handling needed
- highWaterMark: 64KB for file read streams, 16KB for generic, 16 objects for object mode

### Key Gotchas
- .pipe() does NOT destroy streams on error — never use in production
- Stream chunks don't respect line boundaries — use readline for line-by-line
- Streams are on `node:fs`, not `node:fs/promises`

### Transform Streams
- `this.push(data)` sends data downstream
- `callback()` signals ready for next chunk (must always be called)
- Don't push = data is filtered/dropped
- Push multiple times = data is expanded

## Prior Knowledge Connected
- User knows Readable/WritableStream from browser Fetch API — similar concepts
- for await...of on async iterables — familiar from frontend
- Transform streams are like .map()/.filter() on arrays but for streaming data

## Zone of Proximal Development
Ready for: file handles (byte-level access), directories & paths, concurrency patterns.
