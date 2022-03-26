const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});
const {CRYPTO_DEVS_NFT_CONTRACT_ADDRESS} = require("../constants/index");

async function main() {
    const tokenFactory = await ethers.getContractFactory("CryptoDevToken");
    const cryptoDevToken = await tokenFactory.deploy(CRYPTO_DEVS_NFT_CONTRACT_ADDRESS);
    console.log("Token contract deployed to: ", cryptoDevToken.address);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });