import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';
import { AgenderService } from 'src/app/providers/agender/agender.service';
import SignaturePad from 'signature_pad';
import { faCalendarTimes, faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private protocolService: ProtocolService,
    private agenderService: AgenderService,
    private formBuilder: FormBuilder,
    private element: ElementRef
  ) { }
  icons ={
    faCalendarTimes,
    faEdit
  } 
  formAgender!: FormGroup;
  public agenderPatients: any;
  public doctors: any;
  public protocols: any;
  public checkProtocols: any;
  public patientId: any;
  public patient: any;
  public interval: any;
  public dateCurrent = new Date().toLocaleString("pt-BR", {timeZone: "America/Recife"}).substr(0, 10).split('/').reverse().join('-');

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params.id;
    });
    this.formAgender = this.formBuilder.group({
      date: [this.dateCurrent],
      doctor_id: [null],
      hour: [null],
      protocols_id: [null],
      patient_id: [this.patientId]

    });
    this.getAgender();
    this.interval = setInterval(() => {
      this.getAgender();
    }, 1500);
    this.showPatient();
    this.allDoctors();
    this.allProtocols();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // @ViewChild('signature',{static: false}) canvas!: ElementRef;

  // ngAfterViewInit() {
  //    let el = this.canvas.nativeElement;
  //    el.style.color = 'white';
  //   el.style.background = 'red';
  //   const signaturePad = new SignaturePad(el);

  // }

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

  allDoctors() {
    this.doctorService.getDoctors().subscribe(
      async (result) => {
        console.log(result);
        this.doctors = result;
      }
    );
  }
  allProtocols() {
    this.protocolService.getProtocols().subscribe(
      async (result) => {
        this.protocols = result;
      }
    );
  }

  cadAgender() {
    const formValue = {
      ...this.formAgender.value,
    };
    this.agenderService.postAgender(formValue).subscribe(
      async (result) => {
        console.log(result);
        
        this.formAgender.reset({
          date: this.dateCurrent,
        });
      }
    );

  }

  getAgender() {
    this.agenderService.getAgender(this.patientId, this.dateCurrent).subscribe(
      async (result) => {
        console.log(result);
        this.agenderPatients = result;
      }
    );
  }

  cancelProtocol(id:number) {
    this.agenderService.cancelAgenderProtocol(id).subscribe(
      async (result) =>{
        alert('Protocolo cancelado')
      }
    );
  }

  translateStatus(status: string) {
    let state;
    switch (status) {
      case 'waiting':
        state = 'Aguardando';
      break;
      case 'canceled':
        state = 'Cancelado';
      break;
    }
    return state;
  }

 


}
