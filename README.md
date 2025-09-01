# Relmn — The On-Chain Knowledge Network

Relmn is a decentralized, real-time knowledge ecosystem where experts ("Scribes") publish short-form insights ("Scribbles"). Every interaction is on-chain, leveraging Sonic's speed and Fee Monetization (FeeM) to reward creators and fund the DAO treasury.

Links
- Project description: `Project-Description.txt`
- Sonic Blaze: https://blaze.soniclabs.com/
- Sonic Docs: https://docs.soniclabs.com/

---

## Architecture (Planned)
- **Frontend**: Modern SPA (TBD: React/Vue/Angular), mobile-first, wallet integration, infinite feed, token-gated content modals, DAO views.
- **Backend**: NestJS + MongoDB. REST API, Sonic blockchain integration, encryption service for token-gated content, credential verification workflows.
- **Smart Contracts**: 
  - `Scribble` (content + metadata)
  - `ScribeProfile` (user profile + credential badges)
  - `FeeDistribution` (FeeM split routing)
  - `CredentialRegistry` (credential issuance/verification)

High-level data flow
```
Frontend <-> NestJS API <-> MongoDB
                   |
                   v
             Sonic RPC/SDK <-> Smart Contracts
```

---

## Repository Structure (current)
```
Relmn-Sonic/
├─ backend/            # NestJS API (empty scaffold to be created)
├─ frontend/           # SPA app (empty scaffold to be created)
└─ Project-Description.txt
```

---

## Prerequisites
- Node.js LTS (>= 18)
- Git, a package manager (npm/pnpm/yarn)
- MongoDB (local or Docker)
- Nest CLI: `npm i -g @nestjs/cli`

---

## Quickstart (Planned)
Backend
```bash
cd backend
# Scaffold (to be executed once we start implementation)
nest new backend
npm i @nestjs/mongoose mongoose @nestjs/config joi class-validator class-transformer \
  @nestjs/jwt bcrypt axios
# Add Sonic SDK per docs (ethers/web3 or official SDK)

# Env
cp .env.example .env
# then edit values

npm run start:dev
```

Frontend (placeholder)
```bash
cd frontend
# e.g., React
# npm create vite@latest frontend -- --template react-ts
# npm i
# npm run dev
```

---

## Environment Variables (draft)
Backend `.env`
```bash
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/relmn
JWT_SECRET=replace_me
SONIC_RPC_URL=https://<rpc-from-blaze-or-docs>
SONIC_CHAIN_ID=<chain_id>
SCRIBBLE_CONTRACT_ADDRESS=0x...
SCRIBE_PROFILE_CONTRACT_ADDRESS=0x...
FEE_DISTRIBUTION_CONTRACT_ADDRESS=0x...
CREDENTIAL_REGISTRY_CONTRACT_ADDRESS=0x...
```

---

## Milestones / Roadmap
1) Foundation
- [ ] Scaffold backend and frontend
- [ ] Config, linting, formatting, basic CI
- [ ] Health endpoint, logging, CORS

2) Domain & Storage
- [ ] Mongoose models (Scribe, Scribble, Credential, Interaction, FeeEvent)
- [ ] Auth (JWT) and guards
- [ ] Core CRUD for scribes and scribbles

3) Sonic Integration
- [ ] Select SDK and connect to Blaze RPC
- [ ] Contract ABIs + addresses via config
- [ ] Implement read/write calls and event listeners

4) Token-Gated Content & Credentials
- [ ] Encryption service (AES-GCM) for content keys
- [ ] Unlock flow verifying on-chain payment
- [ ] Credential verification + NFT badge sync

5) UX & DAO
- [ ] Infinite feed and interactions
- [ ] Governance views and FeeM stats

6) Testing & DevOps
- [ ] Unit/E2E tests
- [ ] Dockerfiles and docker-compose (Mongo + services)
- [ ] CI: lint, test, build

---

## Contributing
- Conventional commits recommended
- PRs require lint + tests passing
- Do not commit secrets; use `.env`

---

## License
TBD
