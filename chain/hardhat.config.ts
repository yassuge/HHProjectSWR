import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import local_config from "../local_config.json";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: local_config.networks.localhost
    },
    goerli: {
      url: local_config.networks.goerli,
      accounts: local_config.accounts
    }
  }
};

export default config;