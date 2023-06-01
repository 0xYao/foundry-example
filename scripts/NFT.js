require("dotenv").config();

const NFTAbiJson = require("./abis/NFT.abi.json");
const { JsonRpcProvider, Wallet, Contract } = require("ethers");

const localRpcUrl = process.env.LOCAL_RPC_URL;
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS;
// Retrieve the private key after setting the node locally using the Anvil command
const mainPrivateKey = process.env.MAIN_PRIVATE_KEY;

console.log({ localRpcUrl, NFT_CONTRACT_ADDRESS, mainPrivateKey });

const mainWallet = new Wallet(mainPrivateKey);
const provider = new JsonRpcProvider(localRpcUrl);
const nftContract = new Contract(NFT_CONTRACT_ADDRESS, NFTAbiJson, mainWallet.connect(provider));

const main = async () => {
  const numberOfNftsToMint = 3;
  console.log(`Minting ${numberOfNftsToMint} NFTs to the main wallet`);

  const mintPrice = await nftContract.MINT_PRICE();

  for (let i = 0; i < numberOfNftsToMint; i++) {
    console.log(`Minting a NFT`);

    const tx = await nftContract.mintTo(mainWallet.address, {
      value: mintPrice,
    });

    await tx.wait();
  }

  console.log("Checking the no. of NFTs the wallet has");
  const nftBalance = await nftContract.balanceOf(mainWallet.address);
  console.log(nftBalance);
};

main().catch(console.error);
