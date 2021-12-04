import { UsersService } from 'src/app/providers/users/users.service';
import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import SignaturePad from 'signature_pad';
import { HttpClient } from '@angular/common/http';
import { PatientService } from 'src/app/providers/patient/patient.service';


@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss']
})
export class DoctorViewComponent implements OnInit {

  public patientId: any;
  public idade:any = 20;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private patientService: PatientService,
    private userService: UsersService,


  ) {
    this.activatedRoute.params.subscribe(
      (res) => (this.patientId = res.patient_id)
    );
    this.getPatient();
    this.doctor = this.userService.get_profile();
  }

  public agender_id: any;
  public doctor: any;
  public patient: any;
  public dateCurrent = new Date().toISOString().slice(0, 10);
  public end: any;
  formQueryPacient!: FormGroup;
  formReceita!: FormGroup;
  signaturePad: any;
  paciente: any;

  ngOnInit(): void {

    this.formQueryPacient = this.formBuilder.group({
      doctor_id: this.doctor.id,
      patient_id: this.patientId,
      plaint: [null],
      protocols: [null],
      observation: [null]
    });

    this.formReceita = this.formBuilder.group({
      date: [this.dateCurrent],
      doctor_id: [null],
      hour: [null],
      protocols_id: [null],
      patient_id: [this.patientId]
    });

  }

  getPatient() {
    this.patientService.getPatientById(this.patientId).subscribe(
      async (result) => {
        this.patient = result;
        console.log(result);
      },
      async (error) => {
        console.log(error);
      }
    );
  }

  gerarReceita() {

  }

  saveFormQuery() {
    const formValue = {
      ...this.formQueryPacient.value,
    };
    this.doctorService.saveFormQuery(formValue).subscribe(
      async (result) => {
        if (result.statusCode === '200') {
          alert('Perfil atualizado!');
          this.router.navigate(['/medico/home-medico']);
        } else {
          alert('Algum erro ocorreu! Tente novamente em alguns minutos');
          this.router.navigate(['/medico/home-medico']);
        }
      }
    );
  }

}
