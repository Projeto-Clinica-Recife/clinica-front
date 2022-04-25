import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.scss']
})
export class RegisterPaymentComponent implements OnInit {
  
  public search: any;
  public itens: any;
  public patients: any;
  public doctors: any;
  public plans: any;
  public protocols: any;
  public product_type: any;
  public loading = false;
  formCadPlan!: FormGroup;

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private plansService: PlansService,
    private protocolsService: ProtocolService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  public end: any;
  formRecp!: FormGroup;

  ngOnInit() {
    this.formRecp = this.formBuilder.group({
      client_id: [null, Validators.required],
      doctor_id: [null, Validators.required],
      type_product: [null, Validators.required],
      value: [null, Validators.required],
      form_of_payment: [null, Validators.required],
      observation: [null],
      payment_status: [null, Validators.required],
      value_remaing: [null],
      product_id: [null, Validators.required],
    });

    this.allPatients();
    this.allDoctors();
    this.allPlans();
    this.allProtocols();
  }

  register(){
    const form = {
      ...this.formRecp.value,
    }

    console.log(form);
    
  }

  selectProduct() {
    const form = {
      ...this.formRecp.value,
    }
    this.product_type = form.type_product;
  }

  allPatients(){
    return this.patientService.allPatients().subscribe(res =>{
      this.patients = res;
    })
  }

  allDoctors(){
    return this.doctorService.getDoctors().subscribe(res =>{
      this.doctors = res;
    })
  }

  allPlans(){
    return this.plansService.getPlansActive().subscribe(plans =>{
      this.plans = plans;
    })
  }

  allProtocols(){
    return this.protocolsService.getActiveProtocols().subscribe(res =>{
      this.protocols = res;
    })
  }
}
