import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router'
import { DoctorService } from 'src/app/providers/doctor/doctor.service';

@Component({
  selector: 'app-doctor-consulta',
  templateUrl: './doctor-consulta.component.html',
  styleUrls: ['./doctor-consulta.component.scss',]
})
export class DoctorRecConsultaComponent implements OnInit {
  public search: any;
  public doctors:any;
  public loading = false;

  constructor(
    private DoctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchDoctors(): void {
    this.loading = true;
    this.DoctorService.SearchDoctors(this.search).subscribe(
      async (result) => {
        this.loading = false;
        console.log(result); 
        this.doctors = result;
      },
      async ({ error }) => {
        this.loading = false;
        console.log(error);
      },
    );
  }

  viewDoctor(id: any){
    return this.router.navigate(['/ver-medico'], {queryParams: {id: id}});
  }

}
