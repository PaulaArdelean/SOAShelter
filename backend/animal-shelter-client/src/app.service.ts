import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, DataSnapshot } from 'firebase/database';

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

  getAnimals(): Promise<DataSnapshot> {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `animals`));
  }

  getAnimal(id: string): Promise<DataSnapshot> {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `animals/${id}`));
  }
}
