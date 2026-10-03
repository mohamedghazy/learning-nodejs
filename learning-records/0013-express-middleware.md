# Learning Record 0013: Express Middleware Deep Dive

## Date
2026-09-19

## Context
Deep dive into Express middleware — the core abstraction. User understands routing; now learning how requests flow through the middleware stack.

## Key Insights

### What Middleware Is
- Function with signature `(req, res, next) => {}`
- Can: execute code, modify req/res, end cycle, call next middleware
- **Route handlers ARE middleware** — they just typically end instead of calling `next()`

### The Middleware Stack
- Executes in definition order — first `app.use()` runs first
- Request flows: `[MW1] → [MW2] → [Route Handler] → Response`
- Each must call `next()` or send response — otherwise request hangs

### The `next()` Function
- `next()` — pass to next middleware
- `next('route')` — skip remaining handlers for this route, try next route
- `next(error)` — jump to error-handling middleware

### Middleware Scope
- Global: `app.use(fn)` — runs for every request
- Path-specific: `app.use('/api', fn)` — only for `/api/*`
- Route-specific: `app.get('/path', fn1, fn2, handler)`
- Router-level: `router.use(fn)` — scoped to that router

### Order Matters — Critical
- Body parser MUST come before routes that need `req.body`
- Auth middleware MUST come before protected routes
- Error handler MUST be last (4 params)
- 404 handler MUST be after all routes

### Typical Order
1. Security (CORS, Helmet)
2. Body parsers (`express.json()`, `express.urlencoded()`)
3. Logging (Morgan)
4. Static files
5. Session/Auth
6. Routes
7. 404 handler
8. Error handler

### Error Handling Middleware
- **4 parameters**: `(err, req, res, next)` — signature is how Express identifies it
- Triggered by: `next(err)`, thrown sync errors, async errors (with wrapper)
- Check `res.headersSent` before setting status in error handlers

### Express 4 Async Trap
- Thrown errors in `async` handlers NOT auto-caught
- Must use `try/catch` + `next(err)` or async wrapper
- `asyncHandler(fn) => (req,res,next) => Promise.resolve(fn(req,res,next)).catch(next)`
- Express 5 fixes this

### Modifying req/res
- Attach data to `req` for later middleware: `req.user = decoded`
- Common: `req.user`, `req.session`, `req.body`, `req.files`
- `res.locals` — template data

### Middleware Factories
- Return middleware with configuration
- `rateLimit({ max: 100 })` returns configured middleware function
- Enables reusable, configurable middleware

## Prior Knowledge Connected
- HTTP Lesson 2: `req`/`res` are streams — middleware can pipe to them
- Learning Record 0011: Express wraps `node:http` — middleware is the enhancement layer
- Events Lesson: Middleware is like event handler chain (but sync/async not purely event-driven)

## Zone of Proximal Development
Ready for: body parsing details, authentication patterns, building production-ready Express apps.
