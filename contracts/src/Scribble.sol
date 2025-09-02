// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Scribble {
    struct ScribbleData {
        uint256 scribeId;
        string contentHash; // off-chain hash / IPFS CID
        string[] tags;
        uint256 upvotes;
        uint256 comments;
    }

    uint256 public nextScribbleId = 1;
    mapping(uint256 => ScribbleData) public scribbles; // scribbleId => data

    event ScribblePublished(uint256 indexed scribbleId, uint256 indexed scribeId, string contentHash, string[] tags);
    event Upvoted(uint256 indexed scribbleId, address indexed by);
    event Commented(uint256 indexed scribbleId, address indexed by, string text);
    event ContentUnlocked(uint256 indexed scribbleId, address indexed by);

    function publishScribble(uint256 scribeId, string calldata contentHash, string[] calldata tags)
        external
        returns (uint256 scribbleId)
    {
        scribbleId = nextScribbleId++;
        scribbles[scribbleId].scribeId = scribeId;
        scribbles[scribbleId].contentHash = contentHash;
        scribbles[scribbleId].tags = tags;
        emit ScribblePublished(scribbleId, scribeId, contentHash, tags);
    }

    function upvote(uint256 scribbleId) external {
        require(scribbleId > 0 && scribbleId < nextScribbleId, "invalid id");
        scribbles[scribbleId].upvotes += 1;
        emit Upvoted(scribbleId, msg.sender);
    }

    function comment(uint256 scribbleId, string calldata text) external {
        require(scribbleId > 0 && scribbleId < nextScribbleId, "invalid id");
        scribbles[scribbleId].comments += 1;
        emit Commented(scribbleId, msg.sender, text);
    }

    function unlockContent(uint256 scribbleId) external {
        require(scribbleId > 0 && scribbleId < nextScribbleId, "invalid id");
        emit ContentUnlocked(scribbleId, msg.sender);
    }
}
