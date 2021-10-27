import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth/auth.service';
import { UsersService } from 'src/app/providers/users/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form : FormGroup = this.fb.group({
    login: ['', Validators.email],
    password: ['', Validators.required]
  });
  public loginInvalid = false;
  private formSubmitAttempt = false;
  //private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService,
  ) {
   }
  

  login: string = '';
  password: string = '';

  ngOnInit(): void {

  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;

    const login = this.login;
    const password = this.password;
    const resultLogin = await this.authService.login({login, password});
    // if (resultLogin){
    //   this.usersService.get_user();
    // }
  }
}
