import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Contract } from 'ethers';
import { BlockchainService } from './blockchain.service';
import { SCRIBBLE_ABI } from './abis/scribble.abi';
import { SCRIBE_PROFILE_ABI } from './abis/scribe-profile.abi';
import { FEE_DISTRIBUTION_ABI } from './abis/fee-distribution.abi';
import { CREDENTIAL_REGISTRY_ABI } from './abis/credential-registry.abi';

export interface ContractAddresses {
  SCRIBBLE_CONTRACT_ADDRESS?: string;
  SCRIBE_PROFILE_CONTRACT_ADDRESS?: string;
  FEE_DISTRIBUTION_CONTRACT_ADDRESS?: string;
  CREDENTIAL_REGISTRY_CONTRACT_ADDRESS?: string;
}

@Injectable()
export class ContractsRegistry {
  private readonly addrs: ContractAddresses;

  constructor(
    private readonly config: ConfigService,
    private readonly chain: BlockchainService,
  ) {
    this.addrs = {
      SCRIBBLE_CONTRACT_ADDRESS: this.config.get<string>('SCRIBBLE_CONTRACT_ADDRESS') ?? undefined,
      SCRIBE_PROFILE_CONTRACT_ADDRESS: this.config.get<string>('SCRIBE_PROFILE_CONTRACT_ADDRESS') ?? undefined,
      FEE_DISTRIBUTION_CONTRACT_ADDRESS: this.config.get<string>('FEE_DISTRIBUTION_CONTRACT_ADDRESS') ?? undefined,
      CREDENTIAL_REGISTRY_CONTRACT_ADDRESS: this.config.get<string>('CREDENTIAL_REGISTRY_CONTRACT_ADDRESS') ?? undefined,
    };
  }

  getScribbleContract(): Contract {
    const address = this.addrs.SCRIBBLE_CONTRACT_ADDRESS;
    if (!address) throw new Error('SCRIBBLE_CONTRACT_ADDRESS is not configured');
    return this.chain.getContract(address, SCRIBBLE_ABI);
    }

  getScribeProfileContract(): Contract {
    const address = this.addrs.SCRIBE_PROFILE_CONTRACT_ADDRESS;
    if (!address) throw new Error('SCRIBE_PROFILE_CONTRACT_ADDRESS is not configured');
    return this.chain.getContract(address, SCRIBE_PROFILE_ABI);
  }

  getFeeDistributionContract(): Contract {
    const address = this.addrs.FEE_DISTRIBUTION_CONTRACT_ADDRESS;
    if (!address) throw new Error('FEE_DISTRIBUTION_CONTRACT_ADDRESS is not configured');
    return this.chain.getContract(address, FEE_DISTRIBUTION_ABI);
  }

  getCredentialRegistryContract(): Contract {
    const address = this.addrs.CREDENTIAL_REGISTRY_CONTRACT_ADDRESS;
    if (!address) throw new Error('CREDENTIAL_REGISTRY_CONTRACT_ADDRESS is not configured');
    return this.chain.getContract(address, CREDENTIAL_REGISTRY_ABI);
  }
}
