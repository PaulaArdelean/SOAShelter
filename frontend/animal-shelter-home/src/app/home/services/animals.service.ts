import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private baseUrl = 'http://localhost:3000';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private options = { headers: this.headers };

  constructor(private http: HttpClient) { }
  

  public getAnimals() {
    return this.http.get(`${this.baseUrl}/animals`)
  }
}

