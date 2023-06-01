# Overview

This repository shows a minimal example of how to deploy a contract using Anvil and Foundry scripts and interact with the contract using EthersJS

# Setup the environment variables

- `cp .env.sample .env`
- Fill in the corresponding values correctly in the `.env` file

# Setup the local directory

- `mkdir -p out`

# Run the local Anvil node

- `./script/run-node`

# Deploy the NFT contract

- `source .env && forge script scripts/NFT.s.sol:MyScript --rpc-url $LOCAL_RPC_URL --broadcast -vvvv`

# Install the NodeJS dependencies

- `npm i`

# Run the NFT script

- `node scripts/NFT.js`

Observe out/anvil-state.json for state updates
