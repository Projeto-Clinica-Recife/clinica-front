import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenManager } from 'src/app/providers/token-manager/token-manager.service';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // name = this.usersService.user.name;
  constructor(
    private tokenManager: TokenManager,
    private router: Router,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.tokenManager.remove();
    // this.usersService.get_user();
  }

}
