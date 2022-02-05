export class UploadImageDto {
  name: string;
  image: any;
  animalId: string;
  mimetype: string;
  byteLength: number;

  constructor(name: string, image: any, animalId: string, mimetype: string) {
    this.name = name;
    this.image = image;
    this.animalId = animalId;
    this.mimetype = mimetype;
  }
}
