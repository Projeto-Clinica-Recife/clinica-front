import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { ProtocolService } from './../../../../providers/protocol/protocol.service';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AgenderService } from 'src/app/providers/agender/agender.service';
import { RecepcaoService } from '../../recepcao.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formAgender!: FormGroup;
  public dateCurrent = new Date().toLocaleString("pt-BR", { timeZone: "America/Recife" }).substr(0, 10).split('/').reverse().join('-');
  doctors: any;
  patients: any;
  selected!: Date;
  protocols: any;
  public selectDoctors: any = '';
  public patientId: any;
  public agenderPatients: any;
  public weekAgender:any;
  headerComponent: any;
  daySelected!: number;
  dayPosition!: number;
  monthSelected!: any;
  // dateCalendar = [{
  //     'data': '2'
  //   }
  // ];

  public dateCalendar: any[] = [];
  horarios: any[] = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
  contador = 1;
  constructor(
    private doctorService: DoctorService,
    private protocolService: ProtocolService,
    private formBuilder: FormBuilder,
    private agenderService: AgenderService,
    private patientService: PatientService,
    private recepcaoService: RecepcaoService
  ) {
    this.daySelected = Number(this.recepcaoService.getDaySelected());
    this.monthSelected = this.recepcaoService.getMonthSelected();
    this.dayPosition = Number(this.recepcaoService.getDayPosition());


    if (this.daySelected - this.dayPosition > 0) {
      for (let i = 0; i < 7; i++) {
        this.dateCalendar[i] = (this.daySelected - this.dayPosition) + (i + 1);
      }
    } else if (this.daySelected - this.dayPosition < 0) {
      for (let i = 0; i < 7; i++) {
        if (i < this.dayPosition - 1) {
          this.dateCalendar[i] = '';
        } else {
          this.dateCalendar[i] = this.contador++;
        }
      }
    }

  }

  ngOnInit(): void {

    this.formAgender = this.formBuilder.group({
      date: [this.dateCurrent],
      doctor_id: [null],
      hour: [null],
      hourEnd: [null],
      protocols_id: [null],
      patient_id: [this.patientId]

    });
    this.allProtocols();
    this.allDoctors();
    this.getPatient('h'); //Modificar pra entrar com alguma letra e pesquisar
    this.getAllAgender();

  
  }

  async allDoctors() {
    this.doctorService.getDoctors().subscribe(
      async (result) => {
        this.doctors = result;
      }
    );
  }

  async allProtocols() {
    this.protocolService.getProtocols().subscribe(
      async (result) => {
        this.protocols = result;
      }
    );
  }

  getPatient(nome: any) {
    this.patientService.getPatient(nome).subscribe(
      async (result) => {
        this.patients = result;
      },
      async (error) => {
        console.log(error);
      }
    );
  }

  async cadAgender(hora: any, position: any) {

    let dia = this.dateCurrent.slice(0,4)+'-'+this.monthSelected+'-'+ this.dateCalendar[position];
    this.formAgender.patchValue({
      hour: hora,
      date: dia
    });
   

  }


async agender() {
 const formValue = {
      ...this.formAgender.value,
    };
    this.agenderService.postAgender(formValue).subscribe(
      async (result) => {
        console.log(result);
        this.formAgender.reset({
          date: this.dateCurrent,
        });
        alert('Agendamento Realizando com sucesso');
      }
    );
  }

  async getAllAgender() {
  
    this.agenderService.getAgenderByWeek({date: this.dateCurrent}).subscribe(
      async (result) => {
        // console.log(result);
        this.weekAgender = result;
        console.log(this.weekAgender);
      }
    );
  }

  editAgender(){
    alert('sds');
  }
  // pointAgender(hora:any, position: any){
  //   let point ={
  //     hora:'',
  //     has: false
  //   }
  //   let test = '';
  //   let dia = this.dateCurrent.slice(0,4)+'-'+this.monthSelected+'-'+ this.dateCalendar[position];

  //   this.weekAgender.forEach((element: any) => {
  //     test = element;
  //   });
    

  // }

}
