# Learning Record 0011: Express Fundamentals

## Date
2026-09-19

## Context
First Express lesson. User has completed HTTP protocol lessons and built servers with raw `node:http`. Now learning how Express wraps and enhances that foundation.

## Key Insights

### Express Is a Wrapper, Not a Replacement
- `app.listen(3000)` internally calls `http.createServer(app)` — Express IS the request handler
- The `req` and `res` objects are still `IncomingMessage` and `ServerResponse` streams
- All raw `node:http` methods still work (`res.writeHead()`, `res.end()`, etc.)
- Express just adds convenience methods on top

### Enhanced Request Object (`req`)
- `req.params` — route parameters from `:param` patterns
- `req.query` — parsed query string (no more manual `URL` parsing)
- `req.path` — URL path without query string
- `req.body` — parsed body (requires middleware)
- Original properties (`req.method`, `req.url`, `req.headers`) still available

### Enhanced Response Object (`res`)
- `res.json(obj)` — sets Content-Type + stringifies
- `res.status(code)` — chainable status setter
- `res.send(data)` — smart send (auto-detects string/object/Buffer)
- `res.redirect([status,] url)` — redirect helper
- `res.sendFile(path)` — file serving
- `res.set(header, value)` — set headers
- Original methods (`res.writeHead()`, `res.end()`) still work

### Declarative Routing
- `app.get(path, handler)`, `app.post()`, `app.put()`, etc.
- Route parameters: `/users/:id` → `req.params.id`
- Replaces manual `if (req.method === 'GET' && req.url === ...)` chains

### Philosophy: Minimal Core
- Express intentionally excludes body parsing, sessions, auth, validation, ORM
- You compose middleware to add what you need
- Trade-off: more setup, but exactly what you need — nothing extra

## Prior Knowledge Connected
- HTTP Lesson 2: `createServer()`, `req`/`res` objects, `listen()`
- HTTP Lesson 3: URL parsing with `new URL()` — Express does this for you
- HTTP Lesson 4: Body parsing — Express provides middleware
- Streams knowledge (fs Lesson 4): `req`/`res` are still streams

## Zone of Proximal Development
Ready for: middleware pattern, `app.use()`, request lifecycle, error handling middleware.
