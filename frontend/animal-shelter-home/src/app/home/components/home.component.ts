import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public user: any;
  public animals: any;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.animalsService.getAnimals().subscribe(resp => {
      this.animals = Object.values(resp);
      console.log('animals',this.animals)
    });
  }
}