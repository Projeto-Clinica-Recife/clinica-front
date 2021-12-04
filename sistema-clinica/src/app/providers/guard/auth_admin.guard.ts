import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UsersService } from 'src/app/providers/users/users.service';


@Injectable({
    providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        private usersService: UsersService,
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const profile = this.usersService.get_profile();
        if (profile.type_user != 'admin') {
            return false;
        }
        return true;
    }
}