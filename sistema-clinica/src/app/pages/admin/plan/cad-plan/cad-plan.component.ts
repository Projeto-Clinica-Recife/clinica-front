import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PlansService } from 'src/app/providers/plan/plans.service';

@Component({
  selector: 'app-cad-plan',
  templateUrl: './cad-plan.component.html',
  styleUrls: ['./cad-plan.component.scss']
})
export class CadPlanComponent implements OnInit {

  constructor( 
    private plansService: PlansService,
    private router: Router,
   ) { }

  formPlan!: FormGroup;

  ngOnInit(): void {
    this.formPlan = new FormGroup({
      description: new FormControl(null, [
        // Validators.required
      ]),
      period: new FormControl(null, [
        // Validators.required
      ]),
      value: new FormControl(null, [
        // Validators.required
      ]),
    });
  }
  
  message = {
    message:  undefined,
    alertColor: '',
  }

  cadPlan(){
    const form = {
      ...this.formPlan.value
    }
    
    return this.plansService.cadPlan(form).subscribe( ({message}) => {
      this.message.message = message;
      this.message.alertColor = 'alert-success';
      setTimeout(() => {this.router.navigate(['admin/home'])}, 3000)
    }, error => {
      this.message.alertColor = 'alert-danger';
      if(error.status == 422){
        this.message.message = error.error.message;
      }
    });
  }

  getPlans(){
    return this.plansService.getPlans().subscribe();
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.message.message = undefined;
  }

}
