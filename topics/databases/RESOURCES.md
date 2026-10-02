# Database Resources

## Core Theory

### ACID Properties
| Source | Type | Trust | Notes |
|--------|------|-------|-------|
| [Stanford CS145 - ACID Properties](https://cs145.stanford.edu/Module4-Transactions/acid-properties.html) | Academic | ★★★★★ | Excellent explanation with banking and ticketing examples |
| [Wikipedia - ACID](https://en.wikipedia.org/wiki/ACID) | Reference | ★★★★★ | Foundational reference, traces to 1983 Reuter/Härder paper |
| [Databricks - ACID Transactions](https://www.databricks.com/blog/what-are-acid-transactions) | Blog | ★★★★ | Good practical examples |

### CAP Theorem & BASE
| Source | Type | Trust | Notes |
|--------|------|-------|-------|
| [EPAM Node.js GMP - CAP & BASE](https://ebook.learn.epam.com/node-gmp/docs/nosql/cap-base) | Course | ★★★★★ | Excellent explanation specifically for Node.js developers |
| [Baeldung - BASE Terminology](https://www.baeldung.com/cs/db-base-meaning-cap) | Tutorial | ★★★★ | Clear BASE breakdown |
| [ACM Queue - Eventual Consistency](http://queue.acm.org/detail.cfm?id=2462076) | Academic | ★★★★★ | Seminal paper on eventual consistency limitations |

### SQL vs NoSQL
| Source | Type | Trust | Notes |
|--------|------|-------|-------|
| [IBM - SQL vs NoSQL](https://www.ibm.com/think/topics/sql-vs-nosql) | Documentation | ★★★★★ | Comprehensive comparison from enterprise perspective |
| [MongoDB - NoSQL vs SQL](https://www.mongodb.com/resources/basics/databases/nosql-explained/nosql-vs-sql) | Documentation | ★★★★ | Good but biased toward NoSQL |

## Databases to Learn

### SQL (Relational)
- **PostgreSQL** — Most feature-complete open-source SQL database
- **MySQL/MariaDB** — Popular, well-documented, good Node.js ecosystem
- **SQLite** — Embedded, great for learning and small projects

### NoSQL
- **MongoDB** — Document database, dominant in Node.js ecosystem
- **Redis** — Key-value store, essential for caching
- **DynamoDB** — AWS serverless key-value/document (if learning AWS)

## Node.js Libraries
| Library | Database | Type |
|---------|----------|------|
| pg | PostgreSQL | Native driver |
| mysql2 | MySQL | Native driver |
| better-sqlite3 | SQLite | Native driver |
| mongoose | MongoDB | ODM |
| mongodb | MongoDB | Native driver |
| ioredis | Redis | Native driver |

## To Explore
- [ ] Database normalization (1NF, 2NF, 3NF)
- [ ] Indexing strategies
- [ ] Connection pooling
- [ ] Transactions in Node.js
- [ ] ORMs vs Query Builders (Prisma, Knex, Drizzle)
