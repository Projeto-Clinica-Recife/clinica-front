import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Credentials } from './auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenManager } from '../token-manager/token-manager.service';
import { UsersService } from 'src/app/providers/users/users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private URL = environment.api_url;
  constructor(
    private http: HttpClient,
    private tokenManager: TokenManager,
    private usersService: UsersService,
    private router: Router,
  ) { }
  private isAuthenticated: boolean = true; //por enquanto true para exibir a tela
  messageError: string = '';
  canActivate() {
    return this.isAuthenticated;
  }

  async login(credentials: Credentials) {
    const url = `${this.URL}/api/login`;

    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    });
      
    const data = {
      email: credentials.login,
      password: credentials.password,
      // grant_type: "password",
      // client_id: 2,
      // client_secret: "IYS2fzl2KM3aOgtrgSYJ0SaBGL5YwzLXKHhd7S8Z",
      // scope: '',
    };

    return this.http.post(url, data)
    .subscribe( async data => {
      const JWT = data.toString().replace(/['"]+/g, '');
      this.tokenManager.store(JWT);
      this.router.navigate(['/home']);
    }, error => {
        console.log(error); 
      }
    );
  }
}
