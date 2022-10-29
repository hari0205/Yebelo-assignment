const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Our Demo Token", function () {
  let testToken
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

  it("Should print balance of testToken",async function(){
        const balance = await testToken.balanceOf(addressThis); // addressThis is the address for smart contract
        const balanceNum = balance.toString()
        expect(balanceNum == "5000")
        
  })

  it("Should let users transfer tokens to smart contract",async function(){
        
        await testToken.transfer(addressThis,200)
        expect(await testToken.balanceOf(addressThis)).to.equal("5200"); // Minted 5000 tokens + transferred 200 tokens
  })

    it("Should assign a slab",async function(){
         await testToken.transferToContract(addressThis,800)
         await testToken.assignSlab()
         const res = await testToken.returnSlab(owner.address)
         const slab = res.toString()
         expect(slab).to.equal("3")
         
    })

    it("Should revert if the address has not sent tokens to smart contract",async function (){
         await testToken.transferToContract(addressThis,800)
         await testToken.assignSlab()
         await expect(testToken.returnSlab(addr1.address)).to.be.reverted // We have transferred tokens only from owner 

    })

})