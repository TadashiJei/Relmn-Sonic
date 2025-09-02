# Relmn Backend Todo (NestJS + MongoDB)

Status: planning. Backend is a NestJS API with MongoDB, integrating with Sonic blockchain for on-chain actions and verifications.

Links
- https://blaze.soniclabs.com/
- https://docs.soniclabs.com/

---

## Phase 0 — Repo & Environment
- [x] Create `backend/` Nest app scaffold (`nest new backend`)
- [ ] Add tooling: ESLint, Prettier, commit hooks (Husky), lint-staged (ESLint/Prettier present; Husky/lint-staged pending)
- [ ] Choose package manager (npm/pnpm/yarn) and Node LTS (>=18) (using npm; formal policy TBD)
- [ ] Create `.env` and `.env.example` (example added; local .env not committed)
- [x] Configure config module and validation schema

Environment variables (draft)
```bash
# backend/.env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/relmn
JWT_SECRET=replace_me
# Sonic network
SONIC_RPC_URL=https://<rpc-from-blaze-or-docs>
SONIC_CHAIN_ID=<chain_id>
# Deployed contract addresses (to fill after deploy)
SCRIBBLE_CONTRACT_ADDRESS=0x...
SCRIBE_PROFILE_CONTRACT_ADDRESS=0x...
FEE_DISTRIBUTION_CONTRACT_ADDRESS=0x...
CREDENTIAL_REGISTRY_CONTRACT_ADDRESS=0x...
```

Dependencies (initial)
- [x] `@nestjs/mongoose` `mongoose`
- [x] `@nestjs/config` `joi` (for env validation)
- [x] `class-validator` `class-transformer`
- [x] `@nestjs/jwt` `bcrypt` (auth)
- [x] HTTP client: `axios`
- [x] Sonic chain SDK: per docs (ethers.js/web3/official SDK) (using ethers v5)
- [x] Logger: `pino` + `nestjs-pino` (optional)
- [x] Rate limit: `@nestjs/throttler`
- [x] Testing: `@nestjs/testing`, `supertest`

---

## Phase 1 — Foundation
- [x] AppModule with ConfigModule and MongooseModule
- [x] HealthModule: `/health` (liveness/readiness)
- [x] Logger setup and request tracing (request-id) (nestjs-pino + pino-http; x-request-id propagation)
- [x] Global validation pipe and exception filters (AllExceptionsFilter registered globally)
- [x] CORS config for frontend origin
- [x] Swagger/OpenAPI docs at `/docs` (initial setup; pending API updates)

---

## Phase 2 — Domain Modules
- [x] AuthModule (JWT): register/login/refresh; password hash with bcrypt (wallet-based auth optional)
- [x] ScribesModule: profile CRUD; expert badge state (badge sync on credential verification)
- [x] ScribblesModule: create/read/list; interactions: upvote/comment (create/read/list + upvote/comment/unlock implemented)
- [x] CredentialsModule: verification workflow + NFT badge sync + list-by-scribe
- [x] FeesModule: record/list endpoints (event listeners/treasury calc pending)
- [x] BlockchainModule: Sonic RPC integration, ContractsRegistry, contract ABIs, tx helpers (getContract/waitForTx)
- [x] EncryptionModule: key management for token-gated content (e.g., AES-GCM for content keys)

Models (Mongo, draft)
- [x] `Scribe { wallet, handle, bio, badges:[string], credentials:[ObjectId], createdAt }`
- [x] `Credential { scribeId, type, issuer, proof, status, nftTokenId?, createdAt }`
- [x] `Scribble { scribeId, contentPreview, contentCiphertext, contentNonce, tags:[string], createdAt }` (also: contentAuthTag, upvotes, commentsCount)
- [x] `Interaction { scribbleId, scribeId, type: 'upvote'|'comment', text?, txHash, createdAt }` (txHash pending)
- [x] `FeeEvent { scribbleId, txHash, amount, payer, recipient, createdAt }`

---

## Phase 3 — Sonic Blockchain Integration
- [x] Decide SDK per Sonic docs (ethers.js vs official SDK) and add provider from Blaze (using ethers v5 JSON-RPC provider)
- [x] Load contract ABIs and addresses from config (ContractsRegistry)
- [x] Implement `BlockchainService` with:
  - [x] read calls: fetch scribble metadata, credential status, fee splits
  - [x] write calls: publishScribble, upvote, comment, unlockContent
  - [x] event subscriptions: FeeM distributions, credential issued, scribble created
- [x] Verify network params (chainId, gas config) from Blaze
- [x] Add retry/backoff and error classification

---

## Phase 4 — Security & Policies
- [x] JWT auth guards and role guards
- [x] Input validation and sanitization
- [x] Rate limiting & basic abuse protections
- [x] Secrets management (do not commit .env)
- [x] Audit sensitive logs (no secrets)

---

## Phase 5 — Testing & QA
- [ ] Unit tests for services and guards
- [ ] E2E tests for key flows (auth, create scribble, unlock)
- [ ] Test containers: MongoDB via docker-compose
- [ ] Mock chain provider for tests

---

## Phase 6 — DevOps
- [ ] Dockerfile for backend
- [ ] docker-compose: backend + mongo + (optional) mongo-express
- [ ] CI: lint, test, build pipeline
- [ ] CD: environment promotion configs

---

## API Sketch (initial, subject to change)
- `GET /health`
- `POST /auth/register` — email+password or wallet-based nonce login
- `POST /auth/login`
- `GET /scribes/:id` `PATCH /scribes/:id` `GET /scribes?query`
- `POST /scribbles` `GET /scribbles` `GET /scribbles/:id`
- `POST /scribbles/:id/upvote` `POST /scribbles/:id/comment`
- `POST /scribbles/:id/unlock` — verify on-chain payment -> return decryption key
- `POST /credentials/verify` — start verification flow

---

## Open Decisions
- [ ] Auth flow: wallet-first vs email-password + optional wallet link
- [ ] Exact SDK and contract deployment pipeline on Sonic
- [ ] Content encryption strategy & key escrow rules
- [ ] Indexer strategy for fast feeds (pure on-chain vs cached projections)
