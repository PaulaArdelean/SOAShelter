import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers };


  constructor(private router: Router, private http: HttpClient) { }

  public register(email: string, password: string) {
    const body = JSON.stringify({email,password});
    console.log('sending for register',body);
    return this.http.post(`http://localhost:3000/auth/register`, body, this.options);
  }

  public login(email: string, password: string) {
    const body = JSON.stringify({email,password});
    console.log('sending for login', body);
    return this.http.post(`http://localhost:3000/auth/login`, body, this.options);
  }
}
