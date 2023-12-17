import { ethers } from "hardhat";

async function main() {

  const deployerAccount = (await ethers.getSigners())[0];

  console.log("Deploying contracts with the account:", deployerAccount.address);

  const spx = await ethers.deployContract("StoicPoints", [], {});

  await spx.waitForDeployment();
  console.log(
    `StoicPoints deployed to ${await spx.getAddress()}`
  );

  const tone = '0x3D742d2b7B30a1fa5DBAD498383c6014D631d2C2';
  console.log(`Granting roles to ${tone}`);
  await spx.grantRole(await spx.MINTER_ROLE(), tone);
  await spx.grantRole(await spx.ADMIN_ROLE(), tone); 
  console.log(`Roles granted to ${tone}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
