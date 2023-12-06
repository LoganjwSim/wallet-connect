// SPDX-License-Identifier : MIT;

pragma solidity ^0.8.22;

contract MyFirstContract {
    string myName = "Nuclear662";

    function callMyName() public view returns(string memory) {
        return myName;
    }
}