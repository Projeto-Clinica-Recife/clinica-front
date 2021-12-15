import { UsersService } from 'src/app/providers/users/users.service';
import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import SignaturePad from 'signature_pad';
import { HttpClient } from '@angular/common/http';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { PdfService } from 'src/app/providers/pdf/pdf.service';


@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss']
})
export class DoctorViewComponent implements OnInit {

  public patientId: any;
  public item_id: any;
  public idade: any = 20;

  public agender_id: any;
  public doctor: any;
  public patient: any;
  public dateCurrent = new Date().toLocaleString("pt-BR", { timeZone: "America/Recife" }).substr(0, 10).split('/').reverse().join('-');

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService,
    private formBuilder: FormBuilder,
    private pdfService: PdfService,
    private patientService: PatientService,
    private userService: UsersService,

  ) {
    this.activatedRoute.params.subscribe(
      (res) => (
        this.patientId = res.patient_id,
        this.item_id = res.item_id
      )
    );
    this.getPatient();
    this.doctor = this.userService.get_profile();
  }


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
      observation: [null],
      item_id: [this.item_id]
    });
    
  }

  getPatient() {
    const agender_id = this.item_id;
    this.patientService.getPatientById(this.patientId).subscribe(
      async (result) => {
        this.patient = result;
        this.formReceita = this.formBuilder.group({
          agender_id: agender_id,
          patient_name: [this.patient.nome],
          patient_cpf: [this.patient.cpf],
          prescription: [null],
          doctor_name: [this.doctor.name],
          doctor_crm: [this.doctor.user_information.crm],
          crm_state: [this.doctor.user_information.crm_state],
          data_current: [this.dateCurrent]
        });
        console.log(result);
      },
      async (error) => {
        console.log(error);
      }
    );

  }

  gerarReceita() {
    const formValue = {
      ...this.formReceita.value
    };

    this.doctorService.generatePdf(formValue).subscribe(
      async (result) => {
        const base64 = result;
        
        this.pdfService.download_pdf(base64);
        
        if (result) {
          this.router.navigate(['/medico/home-medico']);
        } else {
          alert('Algum erro ocorreu ao tentar gerar');
        }
      }, error =>{
        console.log(error.error);
      }
    );
  }

  saveFormQuery() {
    const formValue = {
      ...this.formQueryPacient.value,
    };
    console.log(formValue);
    
    this.doctorService.saveFormQuery(formValue).subscribe(
      async (result) => {
        console.log(result);
        
        if (result.message === "Success!") {
          alert('Consulta salva!');
          this.router.navigate(['/medico/home-medico']);
        } else {
          alert('Algum erro ocorreu ao tentar salvar! Verifique se todos os campos estão preenchidos corretamente.');
        }
      }
    );
  }

}
