import { Component, OnInit } from '@angular/core';
import { faUserMd,faMedkit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TokenManager } from 'src/app/providers/token-manager/token-manager.service';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  icons ={
    faUserMd,
    faMedkit
  }

  profile!: any;

  constructor(private tokenManager: TokenManager,
    private router: Router,
    private usersService: UsersService,
  ) {
    this.profile = this.usersService.get_profile();
    
  }

  ngOnInit(): void {

  }


  async logout() {
    this.tokenManager.remove();
  }

}
