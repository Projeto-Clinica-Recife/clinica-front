import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { ContractService } from 'src/app/providers/contract/contract.service';
import { PdfService } from 'src/app/providers/pdf/pdf.service';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { FormControl, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-plans',
  templateUrl: './patient-plans.component.html',
  styleUrls: ['./patient-plans.component.scss']
})
export class PatientPlansComponent implements OnInit {
  icons = {
    faArrowLeft
  }
  formContract!: FormGroup;
  patientId!: number;
  plans: any;
  public plansExist: any;
  public doctors: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    private contractService: ContractService,
    private pdfService: PdfService,
    private doctorService: DoctorService,
    private plansService: PlansService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params.id;
    });

    this.patientService.getPlans(this.patientId).subscribe( res => {
      console.log(res);
      this.plans = res;
      
    });

    this.formContract = new FormGroup({
      plan_id: new FormControl( null, [
        
      ]),
      doctor_id: new FormControl(null, [

      ]),
      discount: new FormControl(null, []),
    });

    this.getPlans();

    this.allDoctors();

  }

  getContract(contractId: any){
    
    return this.contractService.get_contract(contractId).subscribe( res => {
      
      this.pdfService.download_pdf(res);
      
    });
  }

  editContract(contractId: any){
    const form = {
      ...this.formContract.value,
    };
    
    return this.contractService.edit_contract(contractId, form).subscribe( res => {
      // console.log(res);
      setTimeout(() => { this.pdfService.download_pdf(res)}, 3000);
     
    }, error => console.log(error));
    
  }

  async getPlans(){
    this.plansService.getPlansActive().subscribe( async plans => {
      this.plansExist = plans;
    });
  }

  async allDoctors() {
    this.doctorService.getDoctors().subscribe(
      async (result) => {
        this.doctors = result;
      }
    );
  }

  back(){
    this.location.back();
  }
}
