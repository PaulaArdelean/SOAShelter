import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword, signOut, User } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  public register(email: string, password: string) {
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     this.router.navigate(['/home']);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  }

  public login(email: string, password: string) {
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     this.router.navigate(['/home']);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  }

  public signout(): void {
    // const auth = getAuth();
    // signOut(auth).then(() => {
    //   this.router.navigate(['/authentication','login'])
    // }).catch((error) => {
    //   // An error happened.
    // });
  }

  // get user(): User | null {
  //   const auth = getAuth();
  //   return auth.currentUser;
  // }
}
