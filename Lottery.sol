//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Lottery {
    address public owner;
    address payable[] public playersA;
    address payable[] public playersB;
    address payable[] public playersC;
    uint8 public usersA;
    uint8 public usersB;
    uint8 public usersC;

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }
  
    function enter(uint _value) public payable {
        if (_value == 1){
            require(msg.value >= 1 ether);
            // address of player entering lottery
            playersA.push(payable(msg.sender));
            usersA +=1;
            results();
        }
        else if (_value == 2){
            require(msg.value >= 5 ether);
            // address of player entering lottery
            playersB.push(payable(msg.sender));
            usersB +=1;
            results();
        }
        else {
            require(msg.value >= 10 ether);
            // address of player entering lottery
            playersC.push(payable(msg.sender));
            usersC +=1;
            results();
        }
    }

    function getRandomNumber() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }
        
    function results() internal{
        if (usersA == 10){
            pickWinnerA();
        }
        else if (usersB == 10){
            pickWinnerB();
        }
        else if (usersC == 10){
            pickWinnerC();
        }
    }
  
    function pickWinnerA() internal {
        
        uint index = getRandomNumber() % playersA.length;

        (bool sent, ) = playersA[index].call{value: 8 ether}("");
        require(sent, "Failed to send Crypto");
        
        // reset the state of the contract
        playersA = new address payable[](0);
        usersA = 0;
    }

    function pickWinnerB() internal {
        uint index = getRandomNumber() % playersB.length;
        (bool sent, ) = playersB[index].call{value: 45 ether}("");
        require(sent, "Failed to send Crypto");
        
        // reset the state of the contract
        playersB = new address payable[](0);
        usersB = 0;
    }

    function pickWinnerC() internal {
        uint index = getRandomNumber() % playersC.length;        
        // reset the state of the contract

        (bool sent, ) = playersC[index].call{value: 100 ether}("");
        require(sent, "Failed to send Crypto");

        playersC = new address payable[](0);
        usersC = 0;
    }

    function withdraw() public payable onlyOwner {
    (bool s, ) = payable(msg.sender).call{value: address(this).balance}("");
    require(s);
  }
    
}