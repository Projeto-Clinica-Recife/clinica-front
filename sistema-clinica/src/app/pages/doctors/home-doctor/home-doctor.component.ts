import { Component, OnInit } from '@angular/core';
import { faUserMd,faMedkit } from '@fortawesome/free-solid-svg-icons';


const horarios: any[] = [
  {horario: '10:00', paciente: 'Ana Claudia'},
  {horario: '11:00', paciente: 'Maria Silva'},
  {horario: '12:00', paciente: 'João Santos'},
  {horario: '13:00', paciente: 'Ricardo Farias'},
  {horario: '14:00', paciente: 'Amanda Rosana'},
  {horario: '15:00', paciente: 'Julia dos Santos'}
];

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.scss']
})

export class HomeDoctorComponent implements OnInit {

  icons ={
    faUserMd,
    faMedkit
  }

  displayedColumns: string[] = ['horario', 'paciente'];

  dataSource = horarios;
  clickedRows = new Set<any>();


  constructor() { }

  ngOnInit(): void {
  }

  acessarFichaConsulta(linha:any){

  }

}
