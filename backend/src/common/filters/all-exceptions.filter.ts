import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { PinoLogger } from 'nestjs-pino';

@Catch()
@Injectable()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(
    private readonly adapterHost: HttpAdapterHost,
    private readonly logger: PinoLogger,
  ) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.adapterHost;
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<any>();
    const res = ctx.getResponse<any>();

    const isHttp = exception instanceof HttpException;
    const status = isHttp
      ? (exception as HttpException).getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const resp = isHttp
      ? (exception as HttpException).getResponse()
      : { message: 'Internal server error' };

    const requestId = req?.id || req?.headers?.['x-request-id'];

    this.logger.error(
      {
        err: exception,
        req: { method: req?.method, url: req?.url, id: requestId },
        requestId,
        status,
      },
      'Unhandled exception',
    );

    const body = {
      statusCode: status,
      path: req?.url,
      method: req?.method,
      requestId,
      timestamp: new Date().toISOString(),
      ...(typeof resp === 'object' ? resp : { error: resp }),
    };

    httpAdapter.reply(res, body, status);
  }
}
