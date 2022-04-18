import { Component, OnInit, ViewChild } from '@angular/core';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { faBan, faRecycle, faPenSquare } from '@fortawesome/free-solid-svg-icons';
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
    faBan,
    faRecycle,
    faPenSquare
  }

  message = '';

  ngOnInit(): void {
    this.plansService.getPlans().subscribe(plans => 
      { this.plans = plans; 
      }, error => {
        console.log(error);
        
      });
    
  }

  disabledPlan(planId: number){
    return this.plansService.cancelPlan(planId).subscribe( res => { 
      location.reload();
    }, error => {
      console.log(error);
      this.message = error.message;
    })
  }

  reactivatePlan(planId: number){
    return this.plansService.activePlan(planId).subscribe( res => { 
      console.log(res);
      location.reload();
    }, error => {
      console.log(error);
      this.message = error.message;
    });
  }

  updatePlan(planId: number){
    console.log(planId);
    return this.router.navigate([`/admin/editar-plan/${planId}`]);
  }

  closeModal() {
    var elem = document.querySelector('.modal');
    elem!.parentNode!.removeChild(elem!);
  }

}
