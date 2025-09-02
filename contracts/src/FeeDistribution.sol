// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "./common/Ownable.sol";

contract FeeDistribution is Ownable {
    struct Split { uint16 scribeBps; uint16 protocolBps; }
    mapping(uint256 => Split) public splits; // scribbleId => split

    event SplitSet(uint256 indexed scribbleId, uint16 scribeBps, uint16 protocolBps);

    function setSplit(uint256 scribbleId, uint16 scribeBps, uint16 protocolBps) external onlyOwner {
        require(scribeBps + protocolBps == 10000, "bps must sum 10000");
        splits[scribbleId] = Split(scribeBps, protocolBps);
        emit SplitSet(scribbleId, scribeBps, protocolBps);
    }

    function getSplit(uint256 scribbleId) external view returns (uint256, uint256) {
        Split memory s = splits[scribbleId];
        if (s.scribeBps == 0 && s.protocolBps == 0) {
            // default 9000/1000 if unset
            return (9000, 1000);
        }
        return (s.scribeBps, s.protocolBps);
    }
}
