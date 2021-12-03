import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../providers/doctor/doctor.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-doctor-consulta',
  templateUrl: './doctor-consulta.component.html',
  styleUrls: ['./doctor-consulta.component.scss',]
})
export class DoctorConsultaComponent implements OnInit {
  public search: any;
  public doctors:any;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchDoctor(): void {
    this.doctorService.getDoctor(this.search).subscribe(
      async (result) => {
        console.log(result);
        this.doctors = result;
      },
      async ({ error }) => {
        console.log(error);
      },
    );
  }

  viewDoctor(id: any){
    return this.router.navigate(['/paciente/ver-paciente'], {queryParams: {id: id}});
  }

}
