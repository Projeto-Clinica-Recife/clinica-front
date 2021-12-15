import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PatientService } from 'src/app/providers/patient/patient.service';

@Component({
  selector: 'app-patient-historic',
  templateUrl: './patient-historic.component.html',
  styleUrls: ['./patient-historic.component.scss']
})
export class PatientHistoricComponent implements OnInit {

  public patientId: any;
  public patient: any;
  panelOpenState = false;
  public consultas!: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,

  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params.id;
    });

    this.showPatient();
  }


  showPatient() {
    this.patientService.getPatientById(this.patientId).subscribe(
      async (result) => {
        this.consultas = result;
      },
      async (error) => {
        console.log(error);
      }
    );
  }

}
