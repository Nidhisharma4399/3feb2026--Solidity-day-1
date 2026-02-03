import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("DeployMyContract", (m) => {
  const myContract = m.contract("MyContract");

  return { myContract };
});