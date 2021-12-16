import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { ContractService } from 'src/app/providers/contract/contract.service';
import { PdfService } from 'src/app/providers/pdf/pdf.service';

@Component({
  selector: 'app-patient-plans',
  templateUrl: './patient-plans.component.html',
  styleUrls: ['./patient-plans.component.scss']
})
export class PatientPlansComponent implements OnInit {

  patientId!: number;
  plans: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    private contractService: ContractService,
    private pdfService: PdfService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params.id;
    });

    this.patientService.getPlans(this.patientId).subscribe( res => {
      console.log(res);
      this.plans = res;
      
    })

  }

  getContract(contractId: any){
    
    return this.contractService.get_contract(contractId).subscribe( res => {
      
      this.pdfService.download_pdf(res);
      
    });
  }

}
