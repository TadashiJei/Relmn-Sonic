import { Injectable } from '@nestjs/common';
import { ContractsRegistry } from './contracts.registry';
import { BlockchainService } from './blockchain.service';

@Injectable()
export class RelmnChainService {
  constructor(private readonly contracts: ContractsRegistry, private readonly chain: BlockchainService) {}

  // Generic, typed-by-context wrappers so we don't hardcode ABI method names yet.
  async readScribble(method: string, args: any[] = []) {
    const c = this.contracts.getScribbleContract();
    return this.chain.callRead(c.address, c.interface.fragments, method, args);
  }

  async writeScribble(method: string, args: any[] = [], confirmations = 1) {
    const c = this.contracts.getScribbleContract();
    return this.chain.callWrite(c.address, c.interface.fragments, method, args, confirmations);
  }

  async readCredentialRegistry(method: string, args: any[] = []) {
    const c = this.contracts.getCredentialRegistryContract();
    return this.chain.callRead(c.address, c.interface.fragments, method, args);
  }

  async writeCredentialRegistry(method: string, args: any[] = [], confirmations = 1) {
    const c = this.contracts.getCredentialRegistryContract();
    return this.chain.callWrite(c.address, c.interface.fragments, method, args, confirmations);
  }

  async readFeeDistribution(method: string, args: any[] = []) {
    const c = this.contracts.getFeeDistributionContract();
    return this.chain.callRead(c.address, c.interface.fragments, method, args);
  }

  async readScribeProfile(method: string, args: any[] = []) {
    const c = this.contracts.getScribeProfileContract();
    return this.chain.callRead(c.address, c.interface.fragments, method, args);
  }

  // Typed convenience methods (ABI placeholders; method names subject to change)
  async publishScribble(scribeId: string, contentHash: string, tags: string[], confirmations = 1) {
    return this.writeScribble('publishScribble', [scribeId, contentHash, tags], confirmations);
  }

  async upvote(scribbleId: string, confirmations = 1) {
    return this.writeScribble('upvote', [scribbleId], confirmations);
  }

  async comment(scribbleId: string, text: string, confirmations = 1) {
    return this.writeScribble('comment', [scribbleId, text], confirmations);
  }

  async unlockContent(scribbleId: string, confirmations = 1) {
    return this.writeScribble('unlockContent', [scribbleId], confirmations);
  }

  async getCredentialStatus(scribeId: string, credType: string) {
    return this.readCredentialRegistry('getStatus', [scribeId, credType]);
  }

  async getFeeSplit(scribbleId: string) {
    return this.readFeeDistribution('getSplit', [scribbleId]);
  }
}
