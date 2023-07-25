import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('VPI Triangle API')
    .setDescription('The VPI Triangle API description')
    .setVersion('2.0')
    .addTag('user')
    .addTag('user-role')
    .addTag('pledge-class')
    .addTag('login-history')
    .addTag('committee')
    .setBasePath('v2')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('v2', app, document, {
    useGlobalPrefix: true
  });

  await app.init();
  await app.listen(process.env.PORT);
  return app;
}
