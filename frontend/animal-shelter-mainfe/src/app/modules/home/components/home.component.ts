import { Component, Inject, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authService/authentication.service';
// import { DocumentData } from 'firebase/firestore';
// import { AuthService } from 'src/app/services/auth.service';
// import { BlogPostsService } from 'src/app/services/blogPosts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public user: any;
  
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    // this.user = this.authenticationService.user;    
  }
}