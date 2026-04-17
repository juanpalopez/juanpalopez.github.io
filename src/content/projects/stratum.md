---
name: stratum
description: A learning-oriented Layer 1 blockchain built from scratch in Rust — keys, signatures, Merkle trees, P2P gossip, consensus, and a bytecode VM, one crate at a time.
longDescription: Stratum builds a complete L1 blockchain from first principles in Rust, isolating each core concept into its own crate so the mechanics stay transparent and hackable. Phases cover cryptographic primitives, world state, libp2p networking, Tendermint BFT consensus, a transaction mempool, a stack-based VM with gas metering, and a JSON-RPC interface — all wired together into a full node with a TUI explorer.
stack: [Rust, tokio, libp2p, sled, secp256k1, blake3, borsh, jsonrpsee, ratatui]
githubUrl: https://github.com/juanpalopez/stratum
featured: true
status: in-progress
order: 1
---
