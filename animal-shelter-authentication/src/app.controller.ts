import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Register } from './_models/register';
import { User } from 'firebase/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('register-message')
  handleRegisterMessage(@Payload() data: Register, @Ctx() context: RmqContext): User {
    return null;
  }
}
