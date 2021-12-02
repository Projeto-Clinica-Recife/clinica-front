import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { faUserMd,faMedkit } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
