import { Component, OnInit } from '@angular/core';
import { PlansService } from 'src/app/providers/plan/plans.service';

@Component({
  selector: 'app-list-plans',
  templateUrl: './list-plans.component.html',
  styleUrls: ['./list-plans.component.scss']
})
export class ListPlansComponent implements OnInit {

  constructor( 
    private plansService: PlansService,
   ) { }

  ngOnInit(): void {
    this.plansService.getPlans().subscribe(plans => { this.plans = plans; });
    
  }

  public plans: any;


}
