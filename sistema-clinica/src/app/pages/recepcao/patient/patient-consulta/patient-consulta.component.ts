import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-consulta',
  templateUrl: './patient-consulta.component.html',
  styleUrls: ['./patient-consulta.component.scss',]
})
export class PatientConsultaComponent implements OnInit {

  icons = {
    faArrowLeft: faArrowLeft
  }
  constructor(

  ) { }

  ngOnInit(): void {
  }



}
