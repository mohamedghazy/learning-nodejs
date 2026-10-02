# Learning Record 0002: Callback API, Next.js Integration, Top-Level Await

## Date
2026-07-14

## Context
User asked three follow-up questions from Lesson 1. These are "why" questions that indicate the user is building a mental model, not just memorizing syntax.

## Key Insights

### Why Callbacks Still Exist
- Historical: Ryan Dahl chose callbacks in 2010 before Promises were standardized
- Ecosystem: millions of packages depend on callback API — can't remove without breaking npm
- Performance: marginal allocation advantage in extreme hot paths (rarely relevant)
- Streams and watchers still live on the callback-based import

### fs in Next.js
- fs is server-only — works in API routes, Server Components, getServerSideProps
- Does NOT work in: Client Components, Middleware (Edge Runtime)
- "Can't resolve fs" error = fs leaked into client bundle
- Serverless platforms have read-only ephemeral file systems

### Top-Level Await Edge Cases
- ESM only (requires "type": "module" or .mjs)
- Blocks importers — creates waterfall when used in library modules
- Safe in entry-point scripts (nothing imports them)
- Unhandled rejection at top level = process crash
- TypeScript needs module: "ES2022"+ and target: "ES2017"+
- Test runners (especially Jest) may not support it fully

## Zone of Proximal Development
User has strong grasp of the "why" behind API choices. Ready for practical file operations: reading, writing, encoding, error handling patterns.
