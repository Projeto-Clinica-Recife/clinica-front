import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor() { }
  private isAuthenticated: boolean = true; //por enquanto true para exibir a tela

  canActivate() {
    return this.isAuthenticated;
  }
}
