import { Component, OnInit } from '@angular/core';
import { faUserMd,faMedkit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  icons ={
    faUserMd,
    faMedkit
  } 

  ngOnInit(): void {
  }

}
