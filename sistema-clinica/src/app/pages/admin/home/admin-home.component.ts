import { Component, OnInit } from '@angular/core';
import { faUserMd,faMedkit } from '@fortawesome/free-solid-svg-icons';
import { TokenManager } from 'src/app/providers/token-manager/token-manager.service';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {

  profile!: any;
  constructor(
    private tokenManager: TokenManager,
    private usersService: UsersService,
  ) { 
    this.profile = this.usersService.get_profile();
   }

  icons ={
    faUserMd,
    faMedkit
  } 

  ngOnInit(): void {
  }

  async logout() {
    this.tokenManager.remove();
  }

}
