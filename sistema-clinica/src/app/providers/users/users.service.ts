import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { TokenManager } from '../token-manager/token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = environment.api_url;
  private TOKEN = localStorage.getItem('token');
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenManager: TokenManager,
  ) { }

  get_profile(){
    const user = JSON.parse(localStorage.getItem('profile')!);
    return user;
  }

  async get_user() {
    const url = `${this.URL}/api/user`;
    let token = this.tokenManager.getTokenStorage();
    console.log(token);
    
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token,);
  
    return this.http.get<User>(url, {headers: headers})
    .subscribe(data => {
        console.log(data); 
    }, error => {
        console.log(error);
      }
    );
  }

  async cad_user(form: any){
    const url = `${this.URL}/api/register`;
    return this.http.post<any>(url, form);
  }

}
