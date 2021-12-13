import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecepcaoService {

  daySelected:any;
  monthSelected:any;
  dayPosition:any;

  constructor() { }

  setDaySelected(daySelected:any){
    this.daySelected = daySelected;
    sessionStorage.setItem('daySelected', this.daySelected);
  }

  setMonthSelected(monthSelected:any){
    this.monthSelected = monthSelected;
    sessionStorage.setItem('monthSelected', this.monthSelected);
  }

  setDayPosition(dayPosition:any){
    this.dayPosition = dayPosition;
    sessionStorage.setItem('dayPosition', this.dayPosition);
  }

  getDaySelected(){
    return  sessionStorage.getItem('daySelected');
  }

  getMonthSelected(){
    return  sessionStorage.getItem('monthSelected');
  }

  getDayPosition(){
    return  sessionStorage.getItem('dayPosition');
  }
}
