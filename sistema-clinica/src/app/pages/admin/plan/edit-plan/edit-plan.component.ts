import { Component, OnInit } from '@angular/core';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.scss']
})
export class EditPlanComponent implements OnInit {

  planId: any;
  plan: any;
  formUpdatePlan!: FormGroup;

  message = {
    message:  '' || null,
    alertColor: '',
  };

  constructor(
    private plansService: PlansService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

    this.route.params.subscribe((params: Params) => {
      this.planId = +params['item_id'];
    }); 

    this.plansService.getPlanById(this.planId).subscribe( res => {
      console.log(res);
      
      this.plan = res;
      
      this.formUpdatePlan = new FormGroup({
        description: new FormControl(this.plan.description),
        period: new FormControl(this.plan.period),
        value: new FormControl(this.plan.value),
      });

    })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    const form = {
      ...this.formUpdatePlan.value
    }
    
    return this.plansService.updatePlan(form, this.planId).subscribe( res => {
      console.log(res);
      
      this.message.alertColor = "alert-success";
      this.message.message = res.message;

      setTimeout( () => {this.router.navigate(['admin/listar-planos'])}, 3000);

      return true;
    }, err => {
      this.message.alertColor = "alert-danger";
      this.message.message = err.error;
      return false;
    })
    
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.message.message = null;
  }

}
