import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../providers/patient/patient.service'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(
    private patientService : PatientService
  ) { }

  ngOnInit(): void {

  }

  cadPatient(){
    this.patientService.post('teste').subscribe(
      async(result) =>{
        console.log(result);
      },
      async ({ error }) => {
        console.log(error);
      },
    );
  }

}
