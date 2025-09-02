// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import {ScribeProfile} from "../src/ScribeProfile.sol";

contract ScribeProfileTest is Test {
    ScribeProfile p;

    function setUp() public {
        p = new ScribeProfile();
    }

    function testOwnerCanSetAndReadProfile() public {
        vm.expectEmit(true, true, false, true);
        emit ScribeProfile.ProfileSet(1, address(this), "alice");
        p.setProfile(1, address(this), "alice");

        (address owner, string memory handle) = p.getProfile(1);
        assertEq(owner, address(this));
        assertEq(handle, "alice");
    }

    function testSetProfileOnlyOwner() public {
        address attacker = address(0xBEEF);
        vm.prank(attacker);
        vm.expectRevert(bytes("Ownable: caller is not the owner"));
        p.setProfile(1, attacker, "hacker");
    }
}
