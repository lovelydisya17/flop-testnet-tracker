// Flop testnet status checker. Public endpoints only, no wallet, no key.
const FAUCET_CHAIN_URL = "https://faucet.flop.network/chain";
const DOCS_URL = "https://docs.flop.network/docs/agent-integration";

async function getJson(url) {
  const res = await fetch(url, { headers: { "user-agent": "flop-testnet-tracker/1.0" } });
  if (!res.ok) throw new Error(url + " -> HTTP " + res.status);
  return res.json();
}

async function getText(url) {
  const res = await fetch(url, { headers: { "user-agent": "flop-testnet-tracker/1.0" } });
  if (!res.ok) throw new Error(url + " -> HTTP " + res.status);
  return res.text();
}

async function main() {
  const chain = await getJson(FAUCET_CHAIN_URL);
  console.log("Faucet network: " + chain.network);
  console.log("Faucet genesis: " + chain.genesisHash);
  const docs = await getText(DOCS_URL);
  console.log("Docs mention testnet: " + /testnet/i.test(docs));
  console.log("Docs mention activation: " + /activation/i.test(docs));
}

main().catch((err) => { console.error(err.message); process.exit(1); });
