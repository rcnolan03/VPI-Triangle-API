import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, { cors: true });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('VPI Triangle API')
    .setDescription('The VPI Triangle API description')
    .setVersion('1.0')
    .addTag('user')
    .addTag('user-role')
    .addTag('pledge-class')
    .addTag('login-history')
    .addTag('committee')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document, {
    useGlobalPrefix: true
  });

  app.setGlobalPrefix('api');

  await app.init();
  await app.listen(process.env.PORT);
  return app;
}
