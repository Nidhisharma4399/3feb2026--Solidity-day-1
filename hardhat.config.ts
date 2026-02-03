import { defineConfig } from "hardhat/config";

// Import the plugins (these are now just imports, not auto-registration)
import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import hardhatIgnitionViemPlugin from "@nomicfoundation/hardhat-ignition-viem";

export default defineConfig({
  solidity: "0.8.28",
  plugins: [
    hardhatToolboxViemPlugin,
    hardhatIgnitionViemPlugin,
  ],
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },
  // Add any other config here (paths, mocha, etc.)
});