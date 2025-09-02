import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { providers, Contract, Wallet } from 'ethers';

@Injectable()
export class BlockchainService {
  private provider: providers.JsonRpcProvider | null = null;
  private signer: Wallet | null = null;

  constructor(private readonly config: ConfigService) {}

  private ensureProvider() {
    if (!this.provider) {
      const rpcUrl = this.config.get<string>('SONIC_RPC_URL');
      if (!rpcUrl) {
        throw new Error('SONIC_RPC_URL is not configured');
      }
      this.provider = new providers.JsonRpcProvider(rpcUrl);
    }
    return this.provider;
  }

  getProvider() {
    return this.ensureProvider();
  }

  getSigner(): Wallet {
    if (!this.signer) {
      const pk = this.config.get<string>('CHAIN_PRIVATE_KEY');
      if (!pk) throw new Error('CHAIN_PRIVATE_KEY is not configured');
      this.signer = new Wallet(pk, this.ensureProvider());
    }
    return this.signer;
  }

  async getChainId(): Promise<number> {
    const network = await this.ensureProvider().getNetwork();
    return Number(network.chainId);
  }

  async getBlockNumber(): Promise<number> {
    return this.ensureProvider().getBlockNumber();
  }

  getContract(address: string, abi: any): Contract {
    return new Contract(address, abi, this.ensureProvider());
  }

  getWriteContract(address: string, abi: any): Contract {
    return new Contract(address, abi, this.getSigner());
  }

  async waitForTx(txHash: string, confirmations = 1) {
    return this.ensureProvider().waitForTransaction(txHash, confirmations);
  }

  async callRead(address: string, abi: any, method: string, args: any[] = []) {
    const contract = new Contract(address, abi, this.ensureProvider());
    const fn: any = (contract as any)[method];
    if (typeof fn !== 'function') {
      throw new Error(`Method ${method} not found on contract at ${address}`);
    }
    return fn(...args);
  }

  async callWrite(address: string, abi: any, method: string, args: any[] = [], confirmations = 1) {
    const contract = new Contract(address, abi, this.getSigner());
    const fn: any = (contract as any)[method];
    if (typeof fn !== 'function') {
      throw new Error(`Method ${method} not found on contract at ${address}`);
    }
    const tx = await fn(...args);
    const receipt = await tx.wait(confirmations);
    return { txHash: tx.hash as string, receipt };
  }

  subscribeToEvent(
    address: string,
    abi: any,
    event: string,
    handler: (...args: any[]) => void,
  ) {
    const contract = new Contract(address, abi, this.ensureProvider());
    // If ABI doesn't include the event (placeholders), safely no-op.
    try {
      if ((contract.interface as any).getEvent) {
        (contract.interface as any).getEvent(event);
      }
      contract.on(event, handler);
      return () => {
        contract.off(event, handler);
      };
    } catch {
      return () => {};
    }
  }
}
