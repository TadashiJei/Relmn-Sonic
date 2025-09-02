// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import {Scribble} from "../src/Scribble.sol";

contract ScribbleTest is Test {
    Scribble s;

    function setUp() public {
        s = new Scribble();
    }

    function testPublishScribbleEmits() public {
        string[] memory tags = new string[](2);
        tags[0] = "a";
        tags[1] = "b";

        vm.expectEmit(true, true, false, true);
        emit Scribble.ScribblePublished(1, 123, "cid://hash", tags);
        uint256 id = s.publishScribble(123, "cid://hash", tags);
        assertEq(id, 1);
    }

    function testUpvoteEmits() public {
        string[] memory tags;
        s.publishScribble(1, "x", tags);

        vm.expectEmit(true, true, false, true);
        emit Scribble.Upvoted(1, address(this));
        s.upvote(1);
    }

    function testCommentEmits() public {
        string[] memory tags;
        s.publishScribble(1, "x", tags);

        vm.expectEmit(true, true, false, true);
        emit Scribble.Commented(1, address(this), "hello");
        s.comment(1, "hello");
    }

    function testUnlockContentEmits() public {
        string[] memory tags;
        s.publishScribble(1, "x", tags);

        vm.expectEmit(true, true, false, true);
        emit Scribble.ContentUnlocked(1, address(this));
        s.unlockContent(1);
    }

    function testUpvoteRevertsForInvalidId() public {
        vm.expectRevert(bytes("invalid id"));
        s.upvote(999);
    }
}
