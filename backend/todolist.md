# Relmn Backend Todo (NestJS + MongoDB)

Status: planning. Backend is a NestJS API with MongoDB, integrating with Sonic blockchain for on-chain actions and verifications.

Links
- https://blaze.soniclabs.com/
- https://docs.soniclabs.com/

---

## Phase 0 — Repo & Environment
- [ ] Create `backend/` Nest app scaffold (`nest new backend`)
- [ ] Add tooling: ESLint, Prettier, commit hooks (Husky), lint-staged
- [ ] Choose package manager (npm/pnpm/yarn) and Node LTS (>=18)
- [ ] Create `.env` and `.env.example`
- [ ] Configure config module and validation schema

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
- [ ] `@nestjs/mongoose` `mongoose`
- [ ] `@nestjs/config` `joi` (for env validation)
- [ ] `class-validator` `class-transformer`
- [ ] `@nestjs/jwt` `bcrypt` (auth)
- [ ] HTTP client: `axios`
- [ ] Sonic chain SDK: per docs (ethers.js/web3/official SDK)
- [ ] Logger: `pino` + `nestjs-pino` (optional)
- [ ] Rate limit: `@nestjs/throttler`
- [ ] Testing: `@nestjs/testing`, `supertest`

---

## Phase 1 — Foundation
- [ ] AppModule with ConfigModule and MongooseModule
- [ ] HealthModule: `/health` (liveness/readiness)
- [ ] Logger setup and request tracing (request-id)
- [ ] Global validation pipe and exception filters
- [ ] CORS config for frontend origin

---

## Phase 2 — Domain Modules
- [ ] AuthModule (JWT): register/login/refresh; password hash with bcrypt or wallet-based auth
- [ ] ScribesModule: profile CRUD, credentials linkage, expert badge state
- [ ] ScribblesModule: create/read/list; interactions: upvote/comment (stubs first)
- [ ] CredentialsModule: verification workflow; NFT badge sync
- [ ] FeesModule: FeeM events, fee splits, treasury accounting (reads from chain, persists summaries)
- [ ] BlockchainModule: Sonic RPC integration, contract ABIs, tx helpers, event listeners
- [ ] EncryptionModule: key management for token-gated content (e.g., AES-GCM for content keys)

Models (Mongo, draft)
- [ ] `Scribe { wallet, handle, bio, badges:[string], credentials:[ObjectId], createdAt }`
- [ ] `Credential { scribeId, type, issuer, proof, status, nftTokenId?, createdAt }`
- [ ] `Scribble { scribeId, contentPreview, contentCiphertext, contentNonce, tags:[string], createdAt }`
- [ ] `Interaction { scribbleId, scribeId, type: 'upvote'|'comment', text?, txHash, createdAt }`
- [ ] `FeeEvent { scribbleId, txHash, amount, payer, recipient, createdAt }`

---

## Phase 3 — Sonic Blockchain Integration
- [ ] Decide SDK per Sonic docs (ethers.js vs official SDK) and add provider from Blaze
- [ ] Load contract ABIs and addresses from config
- [ ] Implement `BlockchainService` with:
  - [ ] read calls: fetch scribble metadata, credential status, fee splits
  - [ ] write calls: publishScribble, upvote, comment, unlockContent
  - [ ] event subscriptions: FeeM distributions, credential issued, scribble created
- [ ] Verify network params (chainId, gas config) from Blaze
- [ ] Add retry/backoff and error classification

---

## Phase 4 — Security & Policies
- [ ] JWT auth guards and role guards
- [ ] Input validation and sanitization
- [ ] Rate limiting & basic abuse protections
- [ ] Secrets management (do not commit .env)
- [ ] Audit sensitive logs (no secrets)

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
