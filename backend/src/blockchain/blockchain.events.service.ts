import { Injectable } from '@nestjs/common';
import { ContractsRegistry } from './contracts.registry';
import { BlockchainService } from './blockchain.service';

@Injectable()
export class BlockchainEventsService {
  constructor(private readonly contracts: ContractsRegistry, private readonly chain: BlockchainService) {}

  onScribble(event: string, handler: (...args: any[]) => void) {
    const c = this.contracts.getScribbleContract();
    return this.chain.subscribeToEvent(c.address, c.interface.fragments, event, handler);
  }

  onScribeProfile(event: string, handler: (...args: any[]) => void) {
    const c = this.contracts.getScribeProfileContract();
    return this.chain.subscribeToEvent(c.address, c.interface.fragments, event, handler);
  }

  onFeeDistribution(event: string, handler: (...args: any[]) => void) {
    const c = this.contracts.getFeeDistributionContract();
    return this.chain.subscribeToEvent(c.address, c.interface.fragments, event, handler);
  }

  onCredentialRegistry(event: string, handler: (...args: any[]) => void) {
    const c = this.contracts.getCredentialRegistryContract();
    return this.chain.subscribeToEvent(c.address, c.interface.fragments, event, handler);
  }
}
