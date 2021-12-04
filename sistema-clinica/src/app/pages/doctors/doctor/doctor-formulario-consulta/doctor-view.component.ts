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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private patientService: PatientService,

  ) {
    this.activatedRoute.params.subscribe(
      (res) => (this.agender_id = res.agender_id)
    );
  }

  public agender_id: any;
  public doctorId: any;
  public doctor: any;
  public patientId: any;
  public patient: any;
  public dateCurrent = new Date().toISOString().slice(0, 10);
  public end: any;
  formConsultaPacient!: FormGroup;
  formReceita!: FormGroup;


  signaturePad: any;
  paciente: any;

  ngOnInit(): void {

    this.formConsultaPacient = this.formBuilder.group({
      queixas: [null],
      protocolos: [null],
      observacoes: [null]
    });


    this.formReceita = this.formBuilder.group({
      date: [this.dateCurrent],
      doctor_id: [null],
      hour: [null],
      protocols_id: [null],
      patient_id: [this.patientId]
    });

  }

  getConsulta() {
    //falta o back
    this.patientId = '';
  }

  showPatient() {
    this.patientService.getPatient(this.patientId).subscribe(
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

  salvarConsulta() {

  }

}
