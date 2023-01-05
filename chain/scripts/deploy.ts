import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");
  const signers = await ethers.getSigners()
  console.log(signers)
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  const lock2 = await ethers.deployContract("Lock", [unlockTime, { value: lockedAmount }],signers[1])
  
  await lock.deployed();
  await lock2.deployed();

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address} by Signer ${signers[0].address}`);
  console.log(`Lock2 with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock2.address} by Signer ${signers[1].address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
