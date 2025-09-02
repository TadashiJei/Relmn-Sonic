// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import {Scribble} from "../src/Scribble.sol";
import {ScribeProfile} from "../src/ScribeProfile.sol";
import {FeeDistribution} from "../src/FeeDistribution.sol";
import {CredentialRegistry} from "../src/CredentialRegistry.sol";

contract Deploy is Script {
    function run() external returns (
        Scribble scribble,
        ScribeProfile scribeProfile,
        FeeDistribution feeDistribution,
        CredentialRegistry credentialRegistry
    ) {
        uint256 key = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(key);

        scribble = new Scribble();
        scribeProfile = new ScribeProfile();
        feeDistribution = new FeeDistribution();
        credentialRegistry = new CredentialRegistry();

        vm.stopBroadcast();

        console2.log("Scribble:", address(scribble));
        console2.log("ScribeProfile:", address(scribeProfile));
        console2.log("FeeDistribution:", address(feeDistribution));
        console2.log("CredentialRegistry:", address(credentialRegistry));
    }
}
