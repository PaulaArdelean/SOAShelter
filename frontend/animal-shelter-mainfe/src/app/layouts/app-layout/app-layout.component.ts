import { Component, OnInit } from '@angular/core';
// import { User } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  // public currentUser: User | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void { }
}
