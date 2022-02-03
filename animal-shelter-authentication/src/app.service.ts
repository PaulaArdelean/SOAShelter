import { Injectable } from '@nestjs/common';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABDRxa47Qy-BIEW5UQ4-c_Kja4SkOLjWE",
  authDomain: "shelter-fc78b.firebaseapp.com",
  projectId: "shelter-fc78b",
  storageBucket: "shelter-fc78b.appspot.com",
  messagingSenderId: "336394969498",
  appId: "1:336394969498:web:4cb6b2c2f7999aea9f9a23",
  measurementId: "G-SXDP8F430Q"
};

@Injectable()
export class AppService {
  private firebase = initializeApp(firebaseConfig);

  public registerUser(email:string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        console.error(`${error.code} \n ${error.message}`);
      });
  }
}
