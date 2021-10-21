import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Credentials, Login } from './auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private URL = environment.api_url;

  constructor(
    private http: HttpClient,
  ) { }
  private isAuthenticated: boolean = true; //por enquanto true para exibir a tela

  canActivate() {
    return this.isAuthenticated;
  }

  async login(credentials: Credentials) {
    console.log(credentials);
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

    return this.http.post(url, data).subscribe( data => console.log(data));

    // return this.http.post<Login[]>(url, data, {headers: headers})
    // .subscribe( data => {
    //   console.log(data)
    // });
  }
}
