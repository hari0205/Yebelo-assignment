const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Our Demo Token", function () {
  let testToken;
  let addressThis;
  let owner;
  let addr1;
  let addr2;

  // executes before each 'it' test case
  beforeEach(async function() {
    const TestToken = await ethers.getContractFactory("Yebelo")
    testToken = await TestToken.deploy()
    await testToken.deployed()
    addressThis = testToken.address
    [owner, addr1, addr2] = await ethers.getSigners()
    
  })

  it("Should should successfully deploy", async function () {
    
    console.log("success!") // Indicates tx is successful
    
  });
})