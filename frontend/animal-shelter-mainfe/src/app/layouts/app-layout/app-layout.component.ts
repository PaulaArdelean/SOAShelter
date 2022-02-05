import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  public currentUser: any;

  constructor(private router: Router) {}

  ngOnInit(): void { 
    const userstring = localStorage.getItem('loggedUser');
    if(userstring) 
      this.currentUser = JSON.parse(userstring);
  }
}
