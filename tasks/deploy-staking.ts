import ZRC20 from "@zetachain/protocol-contracts/abi/zevm/ZRC20.sol/ZRC20.json";
import { getAddress, ParamChainName } from "@zetachain/protocol-contracts";
import { task } from "hardhat.config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const factory = await hre.ethers.getContractFactory("Staking");

let symbol, chainID;
if (args.chain === "btc_testnet") {
  symbol = "BTC";
  chainID = 18332;
} else {
  const zrc20 = getAddress("zrc20", args.chain);
  const contract = new hre.ethers.Contract(zrc20, ZRC20.abi, signer);
  symbol = await contract.symbol();
  chainID = hre.config.networks[args.chain]?.chainId;
  if (chainID === undefined) {
    throw new Error(`🚨 Chain ${args.chain} not found in hardhat config.`);
  }
}
 
const contract = await factory.deploy(
  `Staking rewards for ${symbol}`,
  `R${symbol.toUpperCase()}`,
  chainID,
  systemContract
);

await contract.deployed();

task("deploy", "Deploy the contract", main).addParam(
    "chain",
    "Chain ID (use btc_testnet for Bitcoin Testnet)"
  );