import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { RegisterUserDto } from './_models/register-user.dto';
import { Observable } from 'rxjs';
import { LoginDto } from './_models/login.dto';
import { AnimalDto } from './_models/animal.dto';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
    @Inject('ANIMALS_SERVICE') private readonly animalsClient: ClientProxy,
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

  @Get('animals')
  getAnimals(): Promise<AnimalDto[] | void> {
    return this.appService
      .getAnimals()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val() as AnimalDto[];
        } else {
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  @Get(`animals/:id`)
  getAnimal(@Param() params): Promise<AnimalDto | void> {
    return this.appService
      .getAnimal(params.id)
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val() as AnimalDto;
        } else {
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  @Post('animals')
  addAnimal(@Body() animalDto: AnimalDto) {
    this.animalsClient.emit<any>('addanimal-event', animalDto);
    return 'Add event sent';
  }

  @Put('animals')
  updateAnimal(@Body() animalDto: AnimalDto) {
    this.animalsClient.emit<any>('updateanimal-event', animalDto);
    return 'Update event sent';
  }

  @Delete('animals/:id')
  deleteAnimal(@Param() params) {
    this.animalsClient.emit<any>('deleteanimal-event', params.id);
    return 'Delete event sent';
  }
}
