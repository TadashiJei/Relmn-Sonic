// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "./common/Ownable.sol";

contract ScribeProfile is Ownable {
    struct Profile { address owner; string handle; }
    mapping(uint256 => Profile) public profiles; // scribeId => profile

    event ProfileSet(uint256 indexed scribeId, address indexed owner, string handle);

    function setProfile(uint256 scribeId, address scribeOwner, string calldata handle) external onlyOwner {
        require(scribeOwner != address(0), "zero owner");
        profiles[scribeId] = Profile(scribeOwner, handle);
        emit ProfileSet(scribeId, scribeOwner, handle);
    }

    function getProfile(uint256 scribeId) external view returns (address, string memory) {
        Profile memory p = profiles[scribeId];
        return (p.owner, p.handle);
    }
}
