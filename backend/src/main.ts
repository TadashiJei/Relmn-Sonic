import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  app.enableCors({ origin: true, credentials: true });
  // Ensure x-request-id header is present on responses for tracing
  app.use((req: any, res: any, next: () => void) => {
    const requestId = req.headers['x-request-id'] || req.id;
    if (requestId && !res.getHeader('x-request-id')) {
      res.setHeader('x-request-id', requestId);
    }
    next();
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // OpenAPI/Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Relmn API')
    .setDescription('API documentation for Relmn backend')
    .setVersion('1.0.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'bearer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
