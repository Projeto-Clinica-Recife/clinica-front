import { Component, OnInit, ViewChild } from '@angular/core';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { faCalendarTimes, faRecycle} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-list-plans',
  templateUrl: './list-plans.component.html',
  styleUrls: ['./list-plans.component.scss']
})
export class ListPlansComponent implements OnInit {

  public plans: Plan[] | any;

  constructor(
    private router: Router,
    private plansService: PlansService,
   ) { }

   icons = {
    faCalendarTimes,
    faRecycle,
  }

  message = '';

  ngOnInit(): void {
    this.plansService.getPlans().subscribe(plans => 
      { this.plans = plans; 
      }, error => {
        console.log(error);
        
      });
    
  }

  cancelPlan(planId: number){
    // return this.plansService.cancelPlan(planId).subscribe( res => { 
    //   console.log(res);
    //   location.reload();
    // }, error => {
    //   console.log(error);
    //   this.message = error.message;
    // })
    console.log(planId);
    
  }

  reactivatePlan(planId: number){
    // return this.plansService.activePlan(planId).subscribe( res => { 
    //   console.log(res);
    //   // location.reload();
    // }, error => {
    //   console.log(error);
    //   this.message = error.message;
    // })
    console.log(planId);
    
  }

  closeModal() {
    var elem = document.querySelector('.modal');
    elem!.parentNode!.removeChild(elem!);
  }

}
