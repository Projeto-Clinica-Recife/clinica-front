import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/providers/auth/auth.service';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema-clinica';
  showHeader: boolean = true;
  user = this.userService.get_profile();
  first_access: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UsersService,
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd){
        if(event.url === '/' ||
         event.url ==='/usuario/cadastro-paciente' ||
         event.url ==='/usuario/home-paciente' ||
         event.url ==='/usuario'){
          this.showHeader = false;
        } else{
          this.showHeader = true;
          if(this.user.first_access === 1){
            this.first_access = true;
          }else{
            this.first_access = false;
          }
          
        }
      }
      
    });
  }
}
