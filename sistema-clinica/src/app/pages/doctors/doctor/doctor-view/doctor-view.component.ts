import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { DoctorService } from 'src/app/providers/doctor/doctor.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss']
})
export class DoctorViewComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) { }

  public doctorId: any;
  public doctor: any;
  public dateCurrent = new Date().toISOString().slice(0, 10);


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params.id);
      this.doctorId = params.id;
    });
    this.showDoctor();


  }

  showDoctor(){
    this.doctorService.getDoctor(this.doctorId).subscribe(
      async (result) =>{
        this.doctor = result;
        console.log(result);
      },
      async (error) =>{
        console.log(error);
      }
    );
  }

}
