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
  
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  get_user(){
    const url = `${this.URL}/api/user`;
    let token = localStorage.getItem('token');
    
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token,);
  
    return this.http.get<User>(url, {headers: headers})
    .subscribe(data => {
      console.log(data);
    });
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
