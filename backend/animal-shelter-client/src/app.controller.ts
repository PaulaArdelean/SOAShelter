import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { RegisterUserDto } from './_models/register-user.dto';
import { Observable } from 'rxjs';
import { LoginDto } from './_models/login.dto';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
    private readonly appService: AppService,
  ) {}

  @Post('auth/register')
  registerUser(
    @Body() registerDto: RegisterUserDto,
  ): Observable<RegisterUserDto> {
    return this.authClient.send<RegisterUserDto>('register-user', registerDto);
  }

  @Post('auth/login')
  loginUser(@Body() loginDto: LoginDto): Observable<LoginDto> {
    return this.authClient.send<LoginDto>('login-user', loginDto);
  }
}
