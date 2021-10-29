import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema-clinica';
  showHeader: boolean = true;

  constructor(
    private router: Router,
    private usersService: UsersService,
  ) { 
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd){
        if(event.url === '/'){
          this.showHeader = false;
        } else{
          this.showHeader = true;
        }
      }
    });

    // this.usersService.isAuthenticated();
  }
}
