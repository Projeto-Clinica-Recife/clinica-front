import { Component, OnInit, ViewChild  } from '@angular/core';
import { DoctorService } from '../../../../providers/doctor/doctor.service';
import { Router } from '@angular/router'
import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-consulta',
  templateUrl: './doctor-consulta.component.html',
  styleUrls: ['./doctor-consulta.component.scss',]
})
export class DoctorConsultaComponent implements OnInit {
  public search: any;
  public doctors:any;

  model!: NgbDateStruct;
  date!: { year: number, month: number };
  @ViewChild('dp') dp!: NgbDatepicker;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchPatient(): void {
    this.doctorService.getDoctors().subscribe(
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

  navigateEvent(event:any) {
    this.date = event.next;
  }
}
