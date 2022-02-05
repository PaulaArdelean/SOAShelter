import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authService/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = new FormControl('',[Validators.required, Validators.email]);
  public pass = new FormControl('',[Validators.required]);

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authenticationService.login(this.email.value, this.pass.value).subscribe(user => {
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.router.navigate(['/']);
    });
  }
}
