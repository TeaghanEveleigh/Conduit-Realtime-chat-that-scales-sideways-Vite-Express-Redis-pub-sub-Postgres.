# Relay

> **Horizontally-Scaled Realtime Messaging on Vite, Express, Redis & Postgres**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

A production-grade realtime messaging platform built as a vehicle for learning distributed systems infrastructure. The chat surface is intentionally minimal; the interesting work lives in the multi-instance backend, Redis pub/sub fan-out, partitioned Postgres, and full observability stack.

---

## ✅ Completed — Decisions & Architecture

- [x] **Stack chosen**: Vite + React + TypeScript on the frontend; Express + TypeScript on the backend; PostgreSQL with Drizzle ORM; Redis for coordination, presence, and pub/sub
- [x] **Auth library selected**: Better-Auth (Lucia as fallback) — modern, type-safe, no Passport.js legacy baggage
- [x] **Realtime transport**: native WebSockets via the `ws` library, not Socket.IO — to learn the protocol rather than abstract it away
- [x] **Testing strategy defined**: Vitest for unit tests, Supertest for API integration, Testcontainers for spinning up real Postgres in CI, Playwright for end-to-end with multi-browser-context tests
- [x] **Frontend approach**: Tailwind + shadcn/ui to keep UI work minimal and the focus on infrastructure
- [x] **Hosting plan**: Cloudflare Pages for the static frontend, Fly.io for the multi-instance backend, Neon for Postgres, Upstash for Redis — all on free tiers
- [x] **Seven-phase infrastructure roadmap planned**: containerize → introduce Redis purposefully → multi-instance behind reverse proxy → Redis pub/sub fan-out → graceful shutdown & health checks → observability → edge hardening

---

## 🔲 Todo — Implementation

### App Foundation

- [ ] Bootstrap monorepo with Vite + Express scaffolds, TypeScript across both, environment variable validation via Zod
- [ ] Drizzle schema: `users`, `channels`, `channel_members`, `messages` with appropriate foreign keys
- [ ] Auth flow: signup, login, session management, WebSocket connection authentication
- [ ] Core message flow: send → persist → broadcast
- [ ] Channels: public and private, membership and permission logic
- [ ] Cursor-based pagination for message history (no offset queries)
- [ ] Full-text search via Postgres FTS — `tsvector` column with GIN index

### Realtime Layer

- [ ] Presence tracking in Redis (online users with TTL heartbeats)
- [ ] Typing indicators via ephemeral Redis pub/sub
- [ ] Client-side WebSocket reconnection with exponential backoff
- [ ] Rate limiting via Redis sliding window on message send and auth endpoints

### Database Scaling

- [ ] Index design: composite index on `(channel_id, created_at DESC)` for history queries, partial indexes where useful
- [ ] Partitioning strategy: range-partition `messages` by `created_at` (monthly) — practice Postgres declarative partitioning
- [ ] Query analysis with `EXPLAIN ANALYZE` to verify indexes are actually used

### Infrastructure Progression

- [ ] **Phase 1** — Dockerfile + `docker-compose.yml` for local dev (Postgres, Redis, app)
- [ ] **Phase 2** — Redis for rate limiting and presence (prove the *why* before scaling)
- [ ] **Phase 3** — Run 2–3 backend instances behind Caddy/nginx locally; watch WebSockets break across instances
- [ ] **Phase 4** — Redis pub/sub for cross-instance message fan-out; fix what Phase 3 broke
- [ ] **Phase 5** — `SIGTERM` handling, connection draining, `/healthz` (liveness) and `/readyz` (readiness) endpoints
- [ ] **Phase 6** — Structured logging with Pino, request IDs propagated through WebSocket layer, ship logs/metrics to Grafana Cloud
- [ ] **Phase 7** *(stretch)* — TLS termination at edge, edge rate limiting, blue-green or canary deploys

### CI/CD & Deployment

- [ ] GitHub Actions: lint, type-check, unit, integration, and E2E on every PR
- [ ] Playwright suite with dual browser contexts verifying realtime sync
- [ ] Deploy frontend to Cloudflare Pages
- [ ] Deploy backend to Fly.io with multiple instances behind their Anycast load balancer
- [ ] Wire up Neon Postgres and Upstash Redis
- [ ] First production deploy while the app is still tiny — the scariest deploy should happen early

### Stretch Goals

- [ ] Message reactions
- [ ] Threaded replies
- [ ] File uploads via signed S3-compatible URLs
- [ ] Push notifications via Web Push API
- [ ] OpenTelemetry tracing across the WebSocket → service → DB path

---

## Tech Stack

| Layer            | Choice                                      |
| ---------------- | ------------------------------------------- |
| Frontend         | Vite, React, TypeScript, Tailwind, shadcn/ui |
| Backend          | Express, TypeScript, `ws`                   |
| Database         | PostgreSQL, Drizzle ORM                     |
| Cache / Pub-Sub  | Redis                                       |
| Auth             | Better-Auth                                 |
| Testing          | Vitest, Supertest, Testcontainers, Playwright |
| CI/CD            | GitHub Actions                              |
| Observability    | Pino, Grafana Cloud                         |
| Hosting          | Cloudflare Pages, Fly.io, Neon, Upstash    |
