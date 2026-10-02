# Learning Record 0003: Reading & Writing Files, Buffer vs String, Error Handling

## Date
2026-07-14

## Context
Third lesson in the fs module sequence. User is ready for practical file operations after understanding the API landscape and answering deeper "why" questions.

## Key Insights

### Buffer vs String
- `readFile(path, 'utf8')` → string (text files)
- `readFile(path)` → Buffer (binary files)
- Buffer is a subclass of Uint8Array — same concept as ArrayBuffer/Uint8Array in browser
- `buffer.length` = bytes, `string.length` = characters — these differ for non-ASCII
- `Buffer.byteLength(str, 'utf8')` gives true byte size — use for Content-Length headers

### Encodings
- 'utf8' for text (99% of use cases)
- 'base64' for embedding binary in JSON
- 'hex' for debug/hashes
- Omit encoding = raw Buffer

### Error Handling
- Always branch on `error.code`, never parse messages
- Key codes: ENOENT, EACCES, EISDIR, ENOSPC, EMFILE, EEXIST
- Always re-throw errors you don't specifically handle
- TOCTOU race condition: don't check-then-act, just try-and-catch (EAFP pattern)

### writeFile vs appendFile
- writeFile: creates or completely replaces
- appendFile: creates or adds to end
- truncate(path, n): keeps first n bytes

## Zone of Proximal Development
Ready for: streams and pipeline (handling large files), concurrency patterns (Promise.all vs Promise.allSettled).
