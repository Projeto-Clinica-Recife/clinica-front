import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
  }
}
