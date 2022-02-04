import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { rabbitmqHost } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://guest:guest@${rabbitmqHost}:5672`],
      queue: 'animals-messages',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.listen();
}
bootstrap();
