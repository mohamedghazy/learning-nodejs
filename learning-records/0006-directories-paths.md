# Learning Record 0006: Directories, Paths & import.meta.dirname

## Date
2026-07-16

## Context
Sixth lesson. User now knows how to read/write files at all three levels. This lesson covers WHERE files are — path construction, directory navigation, and the common "wrong working directory" bug.

## Key Insights

### Path Resolution
- `./config.json` resolves relative to `process.cwd()` (where node was run), NOT relative to the file
- `import.meta.dirname` gives the directory of the current module (always correct, regardless of cwd)
- Available since Node 20.11 — replaces the old `fileURLToPath(import.meta.url)` workaround
- `process.cwd()` = where the command was run from (project root in Next.js)

### path.join vs path.resolve
- `join(base, ...segments)` — concatenates and normalizes; result is relative if base is relative
- `resolve(...segments)` — always produces an absolute path; uses cwd() if no absolute segment
- Use `join` when you already have an absolute base (like `import.meta.dirname`)
- Use `resolve` when you need to guarantee an absolute path from user input

### Directory Operations
- `mkdir(path, { recursive: true })` — like `mkdir -p`, no error if exists
- `readdir(dir, { withFileTypes: true })` — Dirent objects (isFile/isDirectory without extra stat)
- `readdir(dir, { recursive: true })` — recursive listing (Node 18.17+)
- `rm(path, { recursive: true, force: true })` — like `rm -rf`, replaces deprecated rmdir
- `rename(old, new)` — rename or move a file
- `stat(path)` — size, dates, type information

### Patterns
- Always `mkdir(dirname(filePath), { recursive: true })` before writing to ensure parent exists
- Use `extname()` for file type checking by extension
- Use `basename()` to extract filename from a full path
- `withFileTypes: true` avoids N extra `stat()` calls when processing directories

## Zone of Proximal Development
Ready for: concurrency patterns (Promise.all vs Promise.allSettled), security (path traversal).
