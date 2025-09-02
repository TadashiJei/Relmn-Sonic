import { Controller, Get } from '@nestjs/common';
import { Public } from '../auth/public.decorator';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Controller('health')
export class HealthController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Public()
  @Get()
  getHealth() {
    const dbState = this.connection.readyState; // 0=disconnected,1=connected,2=connecting,3=disconnecting
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      db: {
        state: dbState,
        label: dbState === 1 ? 'connected' : dbState === 2 ? 'connecting' : dbState === 0 ? 'disconnected' : 'disconnecting',
      },
    };
  }
}
