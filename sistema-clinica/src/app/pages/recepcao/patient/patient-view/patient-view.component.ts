import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { PatientService } from 'src/app/providers/patient/patient.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) { }

  public patientId: any;
  public patient: any;
  public dateCurrent = new Date().toISOString().slice(0, 10);


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params.id);
      this.patientId = params.id;      
    });
    this.showPatient();

    
  }

  showPatient(){
    this.patientService.getPatient(this.patientId).subscribe(
      async (result) =>{
        this.patient = result;
        console.log(result);
      },
      async (error) =>{
        console.log(error);
      }
    );
  }

}
