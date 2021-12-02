import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth/auth.service';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService,
  ) {}
  // form:FormGroup = this.fb.group({
  //   login: ['', Validators.email],
  //   password: ['', Validators.required]
  // });
  
  login: string = '';
  password: string = '';

  error = {
    hasError: false,
    messageError:  null,
  }
  

  ngOnInit(): void {

  }

  async onSubmit() {

    const login = this.login;
    const password = this.password;
    console.log(login, password);
    
    const auth = await this.authService.login({login, password})
    .then( result => {
      if (result) {
        if (result.status != 200) {
          this.error.messageError = result.error.error;
          this.error.hasError = true;
          setTimeout(() => { this.error.hasError = false},2000);
        }
      }
    });
    
  }
}
