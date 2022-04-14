import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.scss']
})
export class RegisterPaymentComponent implements OnInit {
  
  public search: any;
  public itens: any;
  public loading = false;
  formCadPlan!: FormGroup;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  public end: any;
  formRecp!: FormGroup;

  ngOnInit() {
    this.formRecp = this.formBuilder.group({
      client_id: [null, Validators.required],
      type_product: [null, Validators.required],
      value: [null, Validators.required],
      form_of_payment: [null, Validators.required],
      observation: [null],
      payment_status: [null, Validators.required],
      value_remaing: [null],
      product_id: [null, Validators.required],
    });
  }

  register(){}

}
