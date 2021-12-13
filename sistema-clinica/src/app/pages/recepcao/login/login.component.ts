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
    private router: Router,
    private authService: AuthService,
    private userService: UsersService,
  ) {}
  
  login: string = '';
  password: string = '';

  error = {
    hasError: false,
    messageError:  '',
  }
  

  ngOnInit(): void {
    const user = this.userService.get_profile();
    if(user) {
      switch (user.type_user){
            case 'admin':
              this.router.navigate(['/admin/home']);
              break;
            case 'doctor':
              this.router.navigate(['medico/home-medico']);
              break;
            case 'reception':
              this.router.navigate(['/home']);
              break;
          }
    }
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
      this.error.hasError = true;
      console.log(error);
      
      if (error.status === 404) {
              this.error.messageError = error.error.error;
        }else if (error.status === 500){
          this.error.messageError = 'Houve algum erro no servidor!'
        }
        console.log(this.error.messageError);
    });
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.error.hasError = false;
  }
}
