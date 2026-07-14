# Learning Record 0001: fs Module API Surfaces

## Date
2026-07-14

## Context
First lesson on Node.js `fs` module. User is a senior frontend developer transitioning to full-stack.

## Key Insight
Node.js ships three parallel APIs for file operations — not a progression from old to new, but three tools for different situations. The promise API (`node:fs/promises`) is the default for all server code. Sync methods are acceptable only in non-concurrent scripts. The callback API is legacy.

## Decision Rule Learned
- Server code → `node:fs/promises` (always)
- CLI/build tools → sync is fine
- Large/unknown files → streams (upcoming lesson)
- Byte-level access → file handles (upcoming lesson)

## Prior Knowledge Connected
- The user already understands Promises and async/await from frontend work
- The `node:` prefix concept is new but analogous to scoped npm packages
- Top-level await in ESM is familiar from Next.js

## Zone of Proximal Development
Ready for: reading/writing files with proper error handling, encoding behavior, Buffer vs string.
