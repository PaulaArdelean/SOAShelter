import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set, remove } from 'firebase/database';
import { AnimalDto } from './_models/animal.dto';

const firebaseConfig = {
  apiKey: 'AIzaSyABDRxa47Qy-BIEW5UQ4-c_Kja4SkOLjWE',
  authDomain: 'shelter-fc78b.firebaseapp.com',
  databaseURL:
    'https://shelter-fc78b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'shelter-fc78b',
  storageBucket: 'shelter-fc78b.appspot.com',
  messagingSenderId: '336394969498',
  appId: '1:336394969498:web:1427b6f7643ae39e9f9a23',
  measurementId: 'G-NC4J40S6T6',
};

@Injectable()
export class AppService {
  private firebase = initializeApp(firebaseConfig);
  private database = getDatabase();

  addAnimal(animal: AnimalDto) {
    const newref = push(ref(this.database, 'animals'));
    console.log(`THIS IS THE REF`, newref);
    animal.id = newref.key;
    set(newref, animal).then(() => {
      console.log(`Added entry`, animal);
    });
  }

  updateAnimal(animal: AnimalDto) {
    const animalRef = ref(this.database, `animals/${animal.id}`);
    set(animalRef, animal).then(() => {
      console.log(`Updated entry`, animal);
    });
  }

  deleteAnimal(animalId: string) {
    const animalRef = ref(this.database, `animals/${animalId}`);
    remove(animalRef).then(() => {
      console.log(`Deleted entry with id: ${animalId}`);
    });
  }
}
