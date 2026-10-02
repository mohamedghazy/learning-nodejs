# 0010 — Network Protocol Stack

**Date:** 2026-08-17
**Topic:** Network Protocols — TCP, UDP, DNS, TLS

## What Was Taught

The full transport and security layer beneath HTTP — starting with the TCP/IP stack model and drilling into each protocol Node.js exposes:

- **TCP/IP stack model** — Application → TLS → Transport (TCP/UDP) → IP → Link. HTTP sits at Application; Node.js exposes Transport via `node:net` and `node:dgram`.
- **TCP** — Connection-oriented, reliable, ordered byte stream. 3-way handshake (SYN/SYN-ACK/ACK), sequence numbers, ACKs, retransmission, flow control (receive window), congestion control (slow start). `node:net` gives a Duplex stream interface.
- **TCP framing problem** — TCP has no message boundaries. Bytes can be merged or split. Framing strategies: delimiter (`\n`), length prefix (4-byte uint32), self-describing (HTTP Content-Length). This is a common source of bugs.
- **TCP connection states** — LISTEN → ESTABLISHED → TIME_WAIT → CLOSED. TIME_WAIT causes `EADDRINUSE`; fix with `reuseAddress: true`.
- **UDP** — Connectionless, unreliable, unordered datagrams. 8-byte header. Preserves message boundaries (unlike TCP). Used for DNS, video, gaming, QUIC. `node:dgram` API. The send callback does NOT confirm delivery.
- **Broadcasting and multicasting** — UDP-only features: one datagram to all subnet hosts (255.255.255.255) or a multicast group (224.x.x.x). Used for service discovery and live streaming.
- **DNS** — Resolution chain: local cache → /etc/hosts → resolver → root → TLD → authoritative. Key record types: A, AAAA, CNAME, MX, TXT, SRV, PTR. TTL controls cache duration.
- **dns.lookup() vs dns.resolve()** — Critical difference: `lookup()` uses OS `getaddrinfo()` (thread pool, respects /etc/hosts); `resolve()` is fully async (event loop, supports all record types). Node.js has no built-in DNS cache.
- **TLS** — Sits between TCP and HTTP. Provides confidentiality, integrity, authentication. TLS 1.3 handshake in 1 RTT (after TCP). Certificate chain: cert → intermediate CA → root CA. `node:tls` exposes raw TLS; `node:https` wraps it. In production, TLS terminates at reverse proxy (Nginx/ALB).
- **mTLS** — Both client and server authenticate via certificates. Standard in service meshes (Istio, Linkerd).

## Key Non-Obvious Insights

1. `node:http` is built on `node:net` internally — every HTTP server is a TCP server under the hood.
2. TCP does not know about "messages" — framing is always the application's responsibility.
3. `dns.lookup()` blocks the thread pool (same pool as `fs` operations) — avoid under high concurrency.
4. QUIC (HTTP/3's transport) runs over UDP and implements its own reliability — showing that "unreliable" is not a fixed property, just a protocol layer.
5. `rejectUnauthorized: false` completely defeats TLS security — never use in production.

## Status

5 lessons written. Needs learning session validation — user should work through the quizzes interactively.
