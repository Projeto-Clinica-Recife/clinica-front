import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Credentials } from './auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenManager } from '../token-manager/token-manager.service';
import { UsersService } from 'src/app/providers/users/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

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

    try{
      await this.http.post<any>(url, data)
      .toPromise()
      .then( res => {
        const token = res.token;
        const user = res.user;
        this.tokenManager.store(token);
        localStorage.setItem('profile', JSON.stringify(user));
        console.log(user);
        switch(user.type_user) {
          case 'admin':
            this.router.navigate(['/admin/home']);
            break;
          case 'doctor':
            this.router.navigate(['/home']);
            break;
          case 'reception':
            this.router.navigate(['/home']);
            break;
        }
        
      })
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }

  public isAuthenticated(){
    const url = `${this.URL}/api/user`;
    const token = this.tokenManager.getTokenStorage();
    console.log(token);
    
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token,);

    return this.http.get(url, {headers: headers})
    .subscribe(res => {
      this.router.navigate(['/home']);
      console.log('Autorizado!');
      
    }, error => {
      console.log(error);
      this.router.navigate(['/']);
    })
  }
}
