import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { rabbitmqHost } from './config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ANIMALS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://guest:guest@${rabbitmqHost}:5672`],
          queue: 'animals-messages',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
