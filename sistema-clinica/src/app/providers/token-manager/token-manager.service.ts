import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class TokenManager {
    private TOKEN: string = 'token';
    private URL = environment.api_url;

    constructor(
        private http: HttpClient,
        private router: Router,
        ){}

    public store(token: string){
        localStorage.setItem(this.TOKEN, JSON.stringify(token));
    }

    public async remove(){
        const url = `${this.URL}/api/logout`;
        const token = this.getTokenStorage();
        
        const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token,);
        localStorage.removeItem(this.TOKEN);
        localStorage.removeItem('profile');
        return this.http.post(url, undefined, {headers: headers})
        .subscribe( () => {
            this.router.navigate(['/']);
        }, error => {
            console.log(error);
            this.router.navigate(['/']);
            }
        );
    }

    getTokenStorage(){
        const token = localStorage.getItem('token');
        let jwt: string = '';
        if (token) {
           jwt = token.toString().replace(/['"]+/g, '');
        }
        return jwt;
      }
}