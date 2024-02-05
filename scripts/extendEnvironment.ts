import { createProvider } from "hardhat/internal/core/providers/construction";
import { HARDHAT_NETWORK_NAME } from "hardhat/plugins";
import { extendEnvironment } from "hardhat/config";

extendEnvironment(async (hre: any) => {
  hre.otherBlockchainProvider = await createProvider(
    hre.config,
    HARDHAT_NETWORK_NAME,
    hre.artifacts
  );
});


