# Flop Testnet Tracker

Small Node.js checker for the Flop Network testnet status. It reads only public endpoints. No wallet, no key, no signing.

## What it checks

- Faucet chain status at https://faucet.flop.network/chain (devnet vs testnet)
- The agent-integration docs page for testnet mentions
- Whether the docs mention an activation block

## Usage

```sh
node index.mjs
```

Requires Node 18 or newer (global `fetch`).

## Background

Flop Network is a proof-of-inference chain. Its testnet runs about 90 days and the genesis airdrop (4.4B $FLOP) is tied to testnet participation. Points only start counting at an activation block announced by the team, and there is no backfill for activity before it. Devnet faucet grants do not carry over to testnet and earn no airdrop credit.
