pragma solidity >=0.6.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Yebelo is ERC20, Ownable {
    uint[] Slab=[100,200,300,400,500]; // Slab along with index

    uint totalCapRemaining=Slab[4]+Slab[3]+Slab[2]+Slab[1]+Slab[0]; // Addition feature to check remaining capacity 
    uint currentSlabcap=Slab[Slab.length-1]; // if slab array is empty no more insertion is allowed
    //uint public deposited=0;  Keep tract of capacity
    uint totalDeposited;
    uint lastTransfer;

    address payable own; // Name conflicts with Ownable contract's owner 


    struct Stack{
        bool hasDeposited;
        uint depositedAmount;
        uint slab;

    }
    mapping(address=>Stack)public slabDetails; // Mapping an address to a struct containing necessary details

    constructor() ERC20("Yebelo", "YBL") {
        mint(address(this),5000); // Minting 5000 tokens for contract address 
        mint(msg.sender,3000);  // Minting 3000 tokens for contract caller so the address could transfer tokens
        own=payable(msg.sender);

    }
}