import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AnimalImageUploadedDto } from './_models/animal-image-uploaded.dto';
import { AnimalDto } from './_models/animal.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('addanimal-event')
  async handleAddAnimalEvent(data: AnimalDto) {
    console.log(`Add event`, data);
    this.appService.addAnimal(data);
  }

  @EventPattern('updateanimal-event')
  async handleUpdateAnimalEvent(data: AnimalDto) {
    console.log(`Update event`, data);
    this.appService.updateAnimal(data);
  }

  @EventPattern('deleteanimal-event')
  async handleDeleteAnimalEvent(data: string) {
    console.log(`Delete event`, data);
    this.appService.deleteAnimal(data);
  }

  @EventPattern('animalimageuploaded-event')
  async handleAnimalImageUploadedEvent(data: AnimalImageUploadedDto) {
    console.log('Image uploaded event', data);
    this.appService.addImage(data.animalId, data.imageUrl);
  }
}
