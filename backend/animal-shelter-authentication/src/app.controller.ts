import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { User } from 'firebase/auth';
import { AppService } from './app.service';
import { LoginDto } from './_models/login.dto';
import { RegisterDto } from './_models/register.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('register-user')
  async handleRegisterMessage(@Payload() data: RegisterDto): Promise<User> {
    console.log('received data for register', data);
    return (await this.appService.registerUser(data.email, data.password)).user;
  }

  @MessagePattern('login-user')
  async handleLoginUserMessage(@Payload() data: LoginDto): Promise<User> {
    console.log('received data for login', data);
    return (await this.appService.loginUser(data.email, data.password)).user;
  }
}
