import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = environment.api_url;
  private TOKEN = localStorage.getItem('token');
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  
  // getUser = localStorage.getItem('profile'); 
  // profile = JSON.parse(this.getUser!.toString());
  // public user = {
  //   name: this.profile.user.name,
  // }

  formatToken(){
    const token = localStorage.getItem('token');
    let jwt: string = '';
    if (token) {
       jwt = token.toString().replace(/['"]+/g, '');
    }
    return jwt;
  }

  async get_user() {
    const url = `${this.URL}/api/user`;
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token,);
  
    return this.http.get<User>(url, {headers: headers})
    .subscribe(data => {
      localStorage.setItem('profile', JSON.stringify(data));
      
    }, error => {
        console.log(error);
      }
    );
  }

  public isAuthenticated(){
    const url = `${this.URL}/api/user`;
    const token = this.formatToken()
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

  cadUser(form: any){
    const url = `${this.URL}/api/register`;
    return this.http.post(url, form).subscribe(data => {
      this.router.navigate(['/admin/home']);
    }, error => {
        console.log(error.status);
    });
  }
}
