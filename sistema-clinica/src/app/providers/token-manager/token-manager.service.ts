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

    public remove(){
        const url = `${this.URL}/api/logout`;
        const token = localStorage.getItem('token');
        const JWT = token?.replace(/['"]+/g, '');
        
        const headers = new HttpHeaders()
        .set('Authorization', `Bearer ${JWT}`,);
        console.log(headers);
        
        // console.log(headers.get('Authorization'));
        localStorage.removeItem(this.TOKEN);
        this.router.navigate(['/']);
        
        // return this.http.post(url,{headers:headers})
        // .subscribe( result => {
        //     console.log(result);
        //     // localStorage.removeItem(this.TOKEN);
        //     // this.router.navigate(['/']);
        // }, error => {
        //     console.log(error);
        //     }
        // );
    }
}