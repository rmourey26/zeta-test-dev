import "./tasks/interact";
import "./tasks/deploy";
import "./tasks/address";
import "./tasks/stake";
import "./tasks/unstake";
import "./tasks/beneficiary";
import "./tasks/claim";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "@zetachain/toolkit/tasks";

import { getHardhatConfigNetworks } from "@zetachain/networks";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    ...getHardhatConfigNetworks(),
  },
  solidity: {
    compilers:[
      {
        version: "0.5.7", 
      },
      {
        version: "0.8.18",
      },
      {
        version: "0.8.7",
      },
      {
        version: "0.8.4",
      },
    ],
  },
};

export default config;
