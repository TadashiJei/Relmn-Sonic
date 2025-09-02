import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlockchainService } from './blockchain.service';
import { ContractsRegistry } from './contracts.registry';
import { RelmnChainService } from './relmn-chain.service';
import { BlockchainEventsService } from './blockchain.events.service';

@Module({
  imports: [ConfigModule],
  providers: [BlockchainService, ContractsRegistry, RelmnChainService, BlockchainEventsService],
  exports: [BlockchainService, ContractsRegistry, RelmnChainService, BlockchainEventsService],
})
export class BlockchainModule {}
