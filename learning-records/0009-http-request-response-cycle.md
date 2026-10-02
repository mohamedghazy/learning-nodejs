# Learning Record 0009: HTTP Request-Response Cycle

## Date
2026-07-16

## Context
First lesson in the HTTP protocol topic. User already uses HTTP as a client (fetch in React) — now learning to be the server side.

## Key Insights

### HTTP Structure
- Request: method + path + headers + optional body
- Response: status code + headers + body
- Text-based and stateless protocol
- Client always initiates, server always responds

### Methods (verbs)
- GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove)
- Idempotent: GET, PUT, DELETE (safe to retry)
- Non-idempotent: POST (creates duplicate)

### Status Codes — Senior-Level Selection
- 200 OK, 201 Created, 204 No Content
- 301 Permanent redirect, 304 Not Modified
- 400 Bad Request, 401 Unauthorized (no auth), 403 Forbidden (no permission)
- 404 Not Found, 409 Conflict, 422 Validation failed, 429 Rate limited
- 500 Server Error, 502 Bad Gateway, 503 Unavailable

### Headers
- Request: Content-Type, Authorization, Accept, Cookie, Origin
- Response: Content-Type, Content-Length, Set-Cookie, Cache-Control, CORS headers

### Connection to Node.js
- req = Readable stream (body arrives in chunks) → fs Lesson 4 knowledge applies
- res = Writable stream (write response body) → pipeline applies
- All stream knowledge from fs module transfers directly

### Statelessness
- Server doesn't remember previous requests
- Every request must carry its own auth (token/cookie)
- This is why sessions, JWTs, and cookies exist

## Prior Knowledge Connected
- User already uses fetch() with these concepts client-side
- Stream knowledge from fs module maps directly to req/res
- Buffer.byteLength lesson relevant for Content-Length header

## Zone of Proximal Development
Ready for: building actual HTTP server with node:http module, routing, reading request body, JSON APIs.
