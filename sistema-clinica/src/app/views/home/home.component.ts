import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  tiles: Tile[] = [
    {text: 'Menu lateral', cols: 1, rows: 5, color: '#bfb39c'},
    {text: 'Botões', cols: 3, rows: 5, color: 'white'},
  ];

 textobotao : string ='teste';
 color : string ='pink';

  constructor() { }
  ngOnInit(): void {
  }




}
