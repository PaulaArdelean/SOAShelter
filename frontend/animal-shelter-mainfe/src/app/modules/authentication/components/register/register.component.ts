import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authService/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email = new FormControl('',[Validators.required, Validators.email]);
  public pass = new FormControl('',[Validators.required]);
  public cpass = new FormControl('',[Validators.required]);
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void { }

  public register(): void {
    if(this.pass.value !== this.cpass.value) {
      return;
    }
    this.authenticationService.register(this.email.value, this.pass.value);
  }
}
