# Learning Record 0005: File Handles & Byte-Level Access

## Date
2026-07-16

## Context
Fifth lesson. User has progressed through readFile, streams, and is ready for the lowest-level file access pattern. This completes the "three levels of file access" arc.

## Key Insights

### When to Use File Handles
- Positional byte-level reads/writes (specific offset in a file)
- Binary format parsing (reading headers: WAV, PNG, PDF)
- File type detection via magic numbers (security for uploads)
- Partial file updates without rewriting entire file
- Most full-stack work doesn't need handles — readFile and streams cover 95%

### The Lifecycle
- `open(path, flags)` → FileHandle
- `handle.read(buffer, offset, length, position)` — read bytes
- `handle.write(buffer, offset, length, position)` — write bytes
- `handle.close()` — MUST be in `finally` block to avoid EMFILE leaks

### Open Flags
- 'r' — read only (throws ENOENT if missing)
- 'r+' — read/write without truncating (for patching files)
- 'w' — write only, creates/truncates
- 'a' — append only

### Critical Gotchas
- Writing at a position OVERWRITES bytes — no insert-in-the-middle
- Forgetting close() leaks file descriptors → eventual EMFILE crash
- buffer.subarray(0, bytesRead) — only use the bytes actually read, not the full buffer
- readUInt32LE vs readUInt32BE — endianness matters for binary formats

### Security Pattern
- Validate uploaded files by reading magic numbers (first 4-16 bytes)
- Never trust Content-Type headers or file extensions from clients

## Prior Knowledge Connected
- AbortController pattern familiar from browser Fetch API
- Binary data concept similar to ArrayBuffer/DataView in browser
- Security mindset from frontend (never trust client input)

## Zone of Proximal Development
Ready for: directories & paths (import.meta.dirname, path.join), concurrency patterns, security (path traversal).
