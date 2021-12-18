import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { ContractService } from 'src/app/providers/contract/contract.service';
import { PdfService } from 'src/app/providers/pdf/pdf.service';
import { FormControl, FormGroup } from '@angular/forms';
import { PlansService } from 'src/app/providers/plan/plans.service';

@Component({
  selector: 'app-doctor-plans',
  templateUrl: './doctor-plans.component.html',
  styleUrls: ['./doctor-plans.component.scss']
})
export class DoctorPlansComponent implements OnInit {

  doctorId: any;
  plans: any;
  formContract!: FormGroup;
  patientId!: number;
  public plansExist: any;
  public doctors: any;

  constructor(
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
    private contractService: ContractService,
    private pdfService: PdfService,
    private plansService: PlansService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.doctorId = params.id;
    });

    this.doctorService.getPlansDoctor(this.doctorId).subscribe(plans => {
      console.log(plans);
      this.plans = plans;
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

}
