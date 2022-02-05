import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import {
  getBytes,
  getStorage,
  ref,
  uploadBytes,
  UploadResult,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyABDRxa47Qy-BIEW5UQ4-c_Kja4SkOLjWE',
  authDomain: 'shelter-fc78b.firebaseapp.com',
  databaseURL:
    'https://shelter-fc78b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'shelter-fc78b',
  storageBucket: 'shelter-fc78b.appspot.com',
  messagingSenderId: '336394969498',
  appId: '1:336394969498:web:5b2b2aa117c8ce359f9a23',
  measurementId: 'G-CZFZC9DX7D',
};

@Injectable()
export class AppService {
  private firebase = initializeApp(firebaseConfig);
  private storage = getStorage(this.firebase);

  uploadImage(
    name: string,
    image: ArrayBuffer,
    mimetype: string,
  ): Promise<UploadResult> {
    console.log('Uploading to google storage', image, name);
    const newRef = ref(this.storage, `images/${name}`);
    return uploadBytes(newRef, image, { contentType: mimetype });
  }

  downloadImage(imagePath: string): Promise<ArrayBuffer> {
    const imageRef = ref(this.storage, imagePath);
    return getBytes(imageRef);
  }
}
