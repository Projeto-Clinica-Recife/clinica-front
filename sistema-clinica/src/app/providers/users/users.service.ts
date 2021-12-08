import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { TokenManager } from '../token-manager/token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = environment.api_url;
  TOKEN = this.tokenManager.getTokenStorage();
  constructor(
    private http: HttpClient,
    private tokenManager: TokenManager,
  ) { }

  get_profile(){
    const user = JSON.parse(localStorage.getItem('profile')!);
    return user;
  }

  async get_user() {
    const url = `${this.URL}/api/user`;
    let token = this.tokenManager.getTokenStorage();
    
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  
    return this.http.get<any>(url, {headers: headers});
  }

  async cad_user(form: any){
    const url = `${this.URL}/api/register`;
    return this.http.post<any>(url, form);
  }

  async redefine_password(userId: number, password: any){
    const url = `${this.URL}/user/password/${userId}`;

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.TOKEN);
    
    return this.http.put<any>(url, {password: password}, {headers: headers})
    .subscribe( async (res) => {
      console.log(res.user);
      
      this.first_access(userId);
      const loggedUser =  (await this.get_user())
      .subscribe( result => {
          const user = result.user;
          localStorage.setItem('profile', JSON.stringify(user));
          alert('Senha alterada com sucesso!');
          location.reload();
        }, error => {
          console.log(error);
          }
        );
    }, error => 
      console.error(error)
    );

  }

  public async first_access(userid: number){
    const url = `${this.URL}/user/first_access/${userid}`;
    
    return this.http.put<any>(url, undefined)
    .subscribe();
  }

}
