import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth/auth.service';

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
  ) {}
  
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
    const password = this.password
    const auth = (await this.authService.login({login, password}))
    .subscribe( result => {
      console.log(result);
      const user = result.user;
      switch(user.type_user) {
        case 'admin':
          this.router.navigate(['/admin/home']).then(() => { location.reload() });
          break;
        case 'doctor':
          this.router.navigate(['medico/home-medico']).then(() => { location.reload() });
          break;
        case 'reception':
          this.router.navigate(['/home']).then(() => { location.reload() });
          break;
      }
    }, error => {
      if (error.status != 200) {
              this.error.messageError = error.error.error;
              this.error.hasError = true;
          }
    });
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.error.hasError = false;
  }
}
