# Learning Record 0008: Security — Path Traversal Prevention

## Date
2026-07-16

## Context
Final lesson in the fs module sequence. This closes the loop — the user now knows how to do every file operation AND how to do them securely when user input is involved.

## Key Insights

### The Attack
- Path traversal: user supplies `../../etc/passwd` to escape allowed directory
- One of the most common server-side vulnerabilities (OWASP Top 10)
- Affects any endpoint that reads/writes files based on user input

### Why Naive Approaches Fail
- String checking for `..` → bypassed via URL encoding, double encoding, Windows backslashes
- `path.join(base, input)` → normalizes but doesn't constrain (can still escape)
- `path.normalize()` → resolves dots but doesn't verify boundaries

### The Correct Pattern (5 lines)
```js
const BASE_DIR = resolve('uploads');
function safePath(userInput) {
  const target = resolve(BASE_DIR, userInput);
  if (!target.startsWith(BASE_DIR + sep) && target !== BASE_DIR) {
    throw new Error('Path traversal blocked');
  }
  return target;
}
```

### The `+ sep` Guard
- Without sep: `/app/uploads-private/secret` passes `startsWith('/app/uploads')`
- With sep: only paths starting with `/app/uploads/` pass
- This sibling-directory bypass is the subtle detail most devs miss

### Defense in Depth
- Sanitize filename (strip special chars) AND validate resolved path
- Use `realpath()` to follow symlinks, then re-check boundary
- Validate file type with magic numbers (Lesson 5)
- Limit file sizes, rate limit requests
- Never leak internal file paths in error responses

## Knowledge Integration
This lesson connects all previous lessons:
- Lesson 3: error handling by error.code for ENOENT responses
- Lesson 4: streams + pipeline for serving files efficiently
- Lesson 5: magic numbers for upload validation
- Lesson 6: path.resolve for building safe absolute paths
- Lesson 7: batch operations when processing multiple uploads

## Completion
All 8 lessons complete. User now has senior-level understanding of the fs module:
1. Three APIs (which to use when)
2. Deep questions (callbacks, Next.js, TLA)
3. Reading & writing (Buffer vs string, error.code)
4. Streams & pipeline (large files, constant memory)
5. File handles (byte-level access, binary formats)
6. Directories & paths (import.meta.dirname, path utilities)
7. Concurrency (Promise.all vs allSettled)
8. Security (path traversal prevention)
