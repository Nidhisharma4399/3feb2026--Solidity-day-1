import { viem } from "hardhat";

async function main() {
  // Get the public client for the network (local Hardhat in this case)
  const publicClient = await viem.getPublicClient();

  // Get the wallet client (signer) - Hardhat provides test accounts
  const [deployer] = await viem.getWalletClients();

  console.log("Deploying from address:", deployer.account.address);

  // Deploy the contract
  const hash = await deployer.deployContract({
    abi: [],  // ABI is auto-inferred by Hardhat, but you can paste it if needed
    bytecode: "0x" + (await viem.getContractBytecode({ name: "MyContract" })).bytecode.object,  // Fetch bytecode
    args: [],  // No constructor args
  });

  // Wait for deployment confirmation
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  const contractAddress = receipt.contractAddress;

  console.log("MyContract deployed to:", contractAddress);

  // Verify the deployment (optional, for testnets)
  // await hre.run("verify:verify", { address: contractAddress, constructorArguments: [] });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});