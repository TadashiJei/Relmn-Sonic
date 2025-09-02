// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import {CredentialRegistry} from "../src/CredentialRegistry.sol";

contract CredentialRegistryTest is Test {
    CredentialRegistry c;

    function setUp() public {
        c = new CredentialRegistry();
    }

    function testDefaultStatusIsZero() public {
        uint8 s = c.getStatus(1, "expertise");
        assertEq(uint256(s), uint256(0));
    }

    function testOwnerCanSetStatus() public {
        vm.expectEmit(true, false, false, true);
        emit CredentialRegistry.StatusSet(1, "expertise", 1);
        c.setStatus(1, "expertise", 1);
        assertEq(uint256(c.getStatus(1, "expertise")), uint256(1));
    }

    function testSetStatusOnlyOwner() public {
        address attacker = address(0xBEEF);
        vm.prank(attacker);
        vm.expectRevert(bytes("Ownable: caller is not the owner"));
        c.setStatus(1, "expertise", 1);
    }

    function testRevertIfInvalidStatus() public {
        vm.expectRevert(bytes("invalid status"));
        c.setStatus(1, "expertise", 3);
    }
}
