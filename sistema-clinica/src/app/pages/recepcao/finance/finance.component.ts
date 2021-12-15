import { Component, OnInit } from '@angular/core';
import { faUserMd,faMedkit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  icons ={
    faUserMd,
    faMedkit
  }


  constructor() { }

  ngOnInit(): void {
  }

}
