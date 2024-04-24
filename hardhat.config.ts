import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config } from "dotenv";
config();

const hardhatConfig: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/c929ef6b79854ca28e1531554c3b79ac',
      accounts: [process.env.PRIVATE_KEY!],
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/c929ef6b79854ca28e1531554c3b79ac',
      accounts: [process.env.PRIVATE_KEY!],
    }
  }
}

export default hardhatConfig;