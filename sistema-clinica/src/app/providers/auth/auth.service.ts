import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Credentials } from './auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenManager } from '../token-manager/token-manager.service';
import { UsersService } from 'src/app/providers/users/users.service';
import { Router } from '@angular/router';

export const messageError = '';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.api_url;
  constructor(
    private http: HttpClient,
    private tokenManager: TokenManager,
    private usersService: UsersService,
    private router: Router,
  ) { }
   messageError: string = '';

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

    return this.http.post<any>(url, data).pipe(
      tap((res) => {
        const token = res.token;
        const user = res.user;
        this.tokenManager.store(token);
        localStorage.setItem('profile', JSON.stringify(user));
      }),
      )
  }

  public isAuthenticated(): boolean {
    const url = `${this.URL}/api/user`;
    const token = this.tokenManager.getTokenStorage();

    return !token ? false : true;
  }
}
