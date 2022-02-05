import { Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { AnimalImageUploadedDto } from './_models/animal-image-uploaded.dto';
import { UploadImageDto } from './_models/upload-image.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('ANIMALS_SERVICE') private readonly animalsClient: ClientProxy,
    private readonly appService: AppService,
  ) {}

  @EventPattern('uploadimage-event')
  async handleUploadImage(data: UploadImageDto) {
    console.log('Upload image event', data.image.byteLength);
    this.appService
      .uploadImage(data.name, data.image, data.mimetype)
      .then((response) => {
        console.log('Image upload result', response);
        if (response.metadata?.fullPath) {
          this.animalsClient.emit<AnimalImageUploadedDto>(
            'animalimageuploaded-event',
            { animalId: data.animalId, imageUrl: response.metadata.fullPath },
          );
        }
      })
      .catch((err) => {
        console.error('Image upload error', err);
      });
  }

  @MessagePattern('downloadimage-message')
  async downloadImage(@Payload() data: string): Promise<ArrayBuffer> {
    return await this.appService.downloadImage(data);
  }
}
