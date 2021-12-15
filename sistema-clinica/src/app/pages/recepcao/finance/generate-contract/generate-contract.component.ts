import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../providers/patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-contract',
  templateUrl: './generate-contract.component.html',
  styleUrls: ['./generate-contract.component.scss']
})
export class GenerateContractComponent implements OnInit {
  public loading = false;


  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


}
