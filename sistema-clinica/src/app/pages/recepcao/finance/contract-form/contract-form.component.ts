import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { PdfService } from 'src/app/providers/pdf/pdf.service';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { PatientService } from 'src/app/providers/patient/patient.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {

  formCadPlan!: FormGroup;
  public patientId: any;
  public plans: any;
  public doctors: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private plansService: PlansService,
    private pdfService: PdfService,
    private doctorService: DoctorService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params.id;
    });

    this.formCadPlan = this.formBuilder.group({
      doctor_id: [null],
      plan_id: [null],
      form_of_payment: [null],
      discount: [null],
    });


    this.getPlans();

    this.allDoctors();
  }

  async cadPlan(){
    const form = {
      ...this.formCadPlan.value,
    };
    const patientd = this.patientId;
    
    return this.patientService.cadPlan(patientd, form).subscribe( res => {
      console.log(res);
      const patientPlanId = res.patient_plan.id;

        // Gera o contrato
        this.pdfService.generateContractPdf(patientd, patientPlanId).subscribe( async res => {

          // Retorna o pdf do contrato criado
          this.pdfService.download_pdf(res);

        }, error => {
          console.log(error);
          
        });

    }, error => {
      console.log(error);
      
    });
    
  }

  async getPlans(){
    this.plansService.getPlansActive().subscribe( async plans => {
      this.plans = plans;
    });
  }

  async allDoctors() {
    this.doctorService.getDoctors().subscribe(
      async (result) => {
        this.doctors = result;
      }
    );
  }

}
