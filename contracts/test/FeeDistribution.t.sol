// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import {FeeDistribution} from "../src/FeeDistribution.sol";

contract FeeDistributionTest is Test {
    FeeDistribution f;

    function setUp() public {
        f = new FeeDistribution();
    }

    function testDefaultSplitWhenUnset() public {
        (uint256 scribeBps, uint256 protoBps) = f.getSplit(1);
        assertEq(scribeBps, 9000);
        assertEq(protoBps, 1000);
    }

    function testOwnerCanSetSplit() public {
        vm.expectEmit(true, false, false, true);
        emit FeeDistribution.SplitSet(1, 8500, 1500);
        f.setSplit(1, 8500, 1500);

        (uint256 scribeBps, uint256 protoBps) = f.getSplit(1);
        assertEq(scribeBps, 8500);
        assertEq(protoBps, 1500);
    }

    function testSetSplitOnlyOwner() public {
        address attacker = address(0xBEEF);
        vm.prank(attacker);
        vm.expectRevert(bytes("Ownable: caller is not the owner"));
        f.setSplit(1, 9000, 1000);
    }

    function testRevertIfBpsNot10000() public {
        vm.expectRevert(bytes("bps must sum 10000"));
        f.setSplit(1, 9001, 999);
    }
}
