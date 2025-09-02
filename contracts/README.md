# Relmn Sonic Smart Contracts (Foundry)

Minimal contracts to support current backend wrappers. Solidity 0.8.24, Foundry.

## Contracts
- `Scribble.sol`
  - `publishScribble(uint256 scribeId, string contentHash, string[] tags) -> uint256`
  - `upvote(uint256 scribbleId)`
  - `comment(uint256 scribbleId, string text)`
  - `unlockContent(uint256 scribbleId)`
- `ScribeProfile.sol`
  - `setProfile(uint256 scribeId, address owner, string handle)`
  - `getProfile(uint256 scribeId) -> (address, string)`
- `FeeDistribution.sol`
  - `setSplit(uint256 scribbleId, uint16 scribeBps, uint16 protocolBps)` (sum must be 10000)
  - `getSplit(uint256 scribbleId) -> (uint256 scribeBps, uint256 protocolBps)`
- `CredentialRegistry.sol`
  - `setStatus(uint256 scribeId, string credType, uint8 status)` (0 None, 1 Verified, 2 Revoked)
  - `getStatus(uint256 scribeId, string credType) -> uint8`

## Prereqs
- Install Foundry: https://book.getfoundry.sh/getting-started/installation

## Build
```
cd contracts
forge build
```

## (Optional) Install forge-std for tests/scripts
```
forge install foundry-rs/forge-std --no-commit
```

## Deploy (example)
You can deploy via `forge create` with a private key and RPC URL.
```
# example env
export RPC_URL=https://sonic-rpc.example
export PRIVATE_KEY=0x...

forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/Scribble.sol:Scribble
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/ScribeProfile.sol:ScribeProfile
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/FeeDistribution.sol:FeeDistribution
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/CredentialRegistry.sol:CredentialRegistry
```
Note the deployed addresses.

## Generate ABIs for backend
After `forge build`, ABIs are in `out/<Contract>.sol/<Contract>.json` under the `abi` field.
Copy them to `backend/src/blockchain/abis/` and update the backend contract addresses in env:
```
SCRIBBLE_CONTRACT_ADDRESS=
SCRIBE_PROFILE_CONTRACT_ADDRESS=
FEE_DISTRIBUTION_CONTRACT_ADDRESS=
CREDENTIAL_REGISTRY_CONTRACT_ADDRESS=
SONIC_RPC_URL=
CHAIN_PRIVATE_KEY=
```
