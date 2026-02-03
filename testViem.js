import { createPublicClient, http } from "viem";
import { localhost } from "viem/chains";

async function main() {
  const client = createPublicClient({
    chain: localhost,
    transport: http(),
  });

  const blockNumber = await client.getBlockNumber();
  console.log("Latest block number:", blockNumber);
}

main();
