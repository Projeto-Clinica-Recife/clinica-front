import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/providers/auth/auth.service';

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
    private authService: AuthService,
  ) { 
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd){
        if(event.url === '/' || event.url ==='/cadastro-paciente'){
          this.showHeader = false;
        } else{
          this.showHeader = true;
        }
      }
    });

    this.authService.isAuthenticated();
  }
}
