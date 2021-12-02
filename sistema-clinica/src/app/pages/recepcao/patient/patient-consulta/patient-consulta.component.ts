import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../providers/patient/patient.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-patient-consulta',
  templateUrl: './patient-consulta.component.html',
  styleUrls: ['./patient-consulta.component.scss',]
})
export class PatientConsultaComponent implements OnInit {
  public search: any;
  public patients:any;
  public loading = false;

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchPatient(): void {
    this.loading = true;
    this.patientService.getPatient(this.search).subscribe(
      async (result) => {
        this.loading = false;
        console.log(result); 
        this.patients = result;
      },
      async ({ error }) => {
        this.loading = false;
        console.log(error);
      },
    );
  }

  viewPatient(id: any){
    return this.router.navigate(['/paciente/ver-paciente'], {queryParams: {id: id}});
  }

}
