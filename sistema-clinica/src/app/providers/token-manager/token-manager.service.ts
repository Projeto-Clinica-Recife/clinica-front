import { Injectable } from '@angular/core';

@Injectable()
export class TokenManager {
    private token: string = 'token';

    public store(token: Object){
        localStorage.setItem(this.token, JSON.stringify(token));
    }

    public get_user(){

    }

    public remove(){
        
    }
}