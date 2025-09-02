// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "./common/Ownable.sol";

contract CredentialRegistry is Ownable {
    // 0: None, 1: Verified, 2: Revoked
    mapping(uint256 => mapping(string => uint8)) private _status; // scribeId => credType => status

    event StatusSet(uint256 indexed scribeId, string credType, uint8 status);

    function setStatus(uint256 scribeId, string calldata credType, uint8 status) external onlyOwner {
        require(status <= 2, "invalid status");
        _status[scribeId][credType] = status;
        emit StatusSet(scribeId, credType, status);
    }

    function getStatus(uint256 scribeId, string calldata credType) external view returns (uint8) {
        return _status[scribeId][credType];
    }
}
