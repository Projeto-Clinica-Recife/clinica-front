import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/providers/users/users.service';


@Injectable({
    providedIn: 'root'
})
export class AuthRecepAdminGuard implements CanActivate {
    constructor(
        private usersService: UsersService,
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const profile = this.usersService.get_profile();
        if (profile.type_user === 'doctor') {
            return false;
        }
        return true;
    }
}