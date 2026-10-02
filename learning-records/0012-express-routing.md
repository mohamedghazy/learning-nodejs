# Learning Record 0012: Express Routing Deep Dive

## Date
2026-09-19

## Context
Deep dive into Express routing. User has completed HTTP lessons (including manual routing with `if/else` chains) and Express fundamentals lesson.

## Key Insights

### Route Definition Anatomy
- `app.METHOD(PATH, HANDLER)` — METHOD is lowercase HTTP verb
- `app.all()` matches ANY HTTP method — useful for path-specific middleware
- Route handlers are actually middleware (they just typically end the cycle)

### Route Parameters
- `:param` captures dynamic URL segments → `req.params.param`
- **Always strings** — `/users/42` → `req.params.id === '42'` not `42`
- Multiple params: `/users/:userId/posts/:postId`
- Optional params: `/users/:id?` matches `/users` AND `/users/42`
- Constrained params: `/users/:id(\\d+)` only matches digits

### Query Strings vs Route Params
- Route params (`:id`) — part of URL structure, required for match
- Query strings (`?key=val`) — optional metadata, always on `req.query`
- Query values also always strings — parse as needed

### Route Patterns
- Exact: `'/about'`
- Parameterized: `'/users/:id'`
- Wildcard: `'/api/*'` — `req.params[0]` contains wildcard portion
- Regex: `/.*fly$/` — matches paths ending in 'fly'

### Route Precedence — Critical
- **First match wins** — order of definition matters
- Specific routes MUST come before parameterized routes
- `/users/new` before `/users/:id` — otherwise 'new' becomes `:id`

### Express Router
- `express.Router()` creates modular route handlers
- Mounted with `app.use('/prefix', router)` — routes relative to mount point
- `{ mergeParams: true }` — essential for nested routers to access parent's params
- `app.route('/path')` — chain methods for same path (cleaner than repeating)

### 404 Catch-All
- Must be last (no path argument matches everything)
- `app.use((req, res) => res.status(404).json(...))`

## Prior Knowledge Connected
- HTTP Lesson 3: Manual URL parsing with `new URL()` — Express does this
- HTTP Lesson 2: `req.url` — still available, Express adds `req.path`, `req.query`, `req.params`
- Pattern: if/else routing chains → declarative `app.get()`

## Zone of Proximal Development
Ready for: middleware deep dive, understanding the request lifecycle, error handling patterns.
