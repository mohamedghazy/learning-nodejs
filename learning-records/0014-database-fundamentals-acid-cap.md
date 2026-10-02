# 0014: Database Fundamentals — SQL vs NoSQL, ACID & CAP

**Date:** 2026-10-01

## Context
Starting the databases module. Need to understand the fundamental paradigms before diving into specific databases like PostgreSQL or MongoDB.

## Key Insights

### SQL vs NoSQL Is About Data Modeling, Not Speed
- SQL: Fixed schema, normalized data across tables, relationships via foreign keys
- NoSQL: Flexible schema, denormalized data (often embedded), designed for specific access patterns
- The "right" choice depends on your data relationships and query patterns, not benchmarks

### ACID = Trustworthy Data
**A**tomicity — All operations in a transaction succeed or all fail (no partial state)
**C**onsistency — Constraints are always enforced (no invalid data)
**I**solation — Concurrent transactions don't interfere (no race conditions)
**D**urability — Committed data survives crashes (persistence guarantee)

The banking race condition example crystallized isolation: without it, concurrent transactions can read half-completed state, leading to logical errors (interest paid on money counted twice).

### BASE Is a Trade-off, Not a Weakness
**B**asically **A**vailable — System responds even during failures
**S**oft state — Data may be temporarily inconsistent across replicas
**E**ventually consistent — All replicas converge given time

BASE isn't "broken ACID"—it's a deliberate trade-off for systems where availability matters more than immediate consistency (social feeds, product catalogs).

### CAP Theorem Forces the Choice
In distributed systems, network partitions WILL happen. You must choose:
- **CP** (MongoDB, HBase): Consistency over availability—return error rather than stale data
- **AP** (Cassandra, DynamoDB): Availability over consistency—return response, possibly stale

Single-server databases avoid this choice because there's no partition to tolerate.

### Modern Databases Blur the Lines
- MongoDB supports multi-document ACID transactions
- PostgreSQL handles JSON natively
- Many NoSQL databases offer tunable consistency per-query
- The models are converging

## Questions That Emerged
- How do I implement transactions in Node.js with pg/mysql2?
- What isolation levels exist and when do I need each?
- How does connection pooling work with transactions?
- What's the practical difference between eventual and strong consistency?

## Connections to Prior Learning
- HTTP/Express: Now I understand why REST APIs need database transactions for multi-step operations
- Streams: Large query results might need streaming to avoid memory issues
- Error handling: Database errors need specific handling (connection, constraint violation, deadlock)

## What's Next
- Learn SQL basics (schema design, queries, joins)
- Understand PostgreSQL specifically for Node.js
- Practice transactions with the pg library
