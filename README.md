# Relay

> **Horizontally-Scaled Realtime Messaging on Vite, Express, Redis & Postgres**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

A horizontally-scalable realtime messaging app, built to learn production distributed-systems infrastructure end-to-end.

## Current Phase : Phase 1 
- Current phase of developement is the application developement phase(Phase 1)
-  My primary goal is to develope the application with post phases being related primarily to applying infrastructure decisions
- This phase is less considerable overall primarily focused on integration of sockets to enable chat as well as auth and frontend. 


## Stack

- **TypeScript** — across frontend and backend
- **Vite** — frontend tooling
- **Express** — backend HTTP server
- **PostgreSQL** — primary data store
- **Redis** — coordination, caching, pub/sub
- **Docker** — containerization for local dev and deployment
- **Material UI** — frontend component library

*ORM, auth, realtime transport, testing tools, hosting, and observability stack still to be decided.*

---

## ✅ Completed

- [x] Project concept and scope defined
- [x] Core stack chosen (TypeScript, Vite, Express, Postgres, Redis, Docker, shadcn/ui)
- [x] Vitest Setup for backend testing (Will Be used for integration and unit tests) End to end testing moved to the todo seciton


## 🚧 In Progress

- [ ] Selecting remaining tools: ORM, auth library, realtime transport, testing stack, hosting provider, observability tooling
- [ ] Initial project scaffolding
## ⚡ Ongoing 
- Unit tests to be done throughout developement cycle
- Integration tests to be completed after module completion on an ongoing basis
## 🔲 Todo
- [x] Complete End to End Testing
### Core Application

- [ ] Authentication and session management
- [ ] Channel/room model with public and private membership
- [ ] Send, persist, and broadcast messages in realtime
- [ ] Message history with cursor-based pagination
- [ ] Full-text search across messages
- [ ] Presence tracking
- [ ] Typing indicators
- [ ] Rate limiting on writes

### Infrastructure

- [ ] Containerize for reproducible local development
- [ ] Run multiple Express instances behind a load balancer
- [ ] Cross-instance message fan-out via Redis pub/sub
- [ ] Graceful shutdown and connection draining
- [ ] Health and readiness endpoints
- [ ] Structured logging with request correlation
- [ ] Metrics and tracing

### Database

- [ ] Schema design and migrations
- [ ] Query optimization with appropriate indexes
- [ ] Table partitioning strategy for high-volume tables

### Quality

- [ ] Unit tests
- [ ] API integration tests
- [ ] End-to-end tests verifying realtime sync between clients
- [ ] CI pipeline running the full test suite on every push

### Deployment

- [ ] Deploy frontend
- [ ] Deploy backend across multiple Express instances
- [ ] Wire up production Postgres and Redis
- [ ] First production deploy
