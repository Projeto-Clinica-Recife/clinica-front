import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../providers/patient/patient.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) { }
  
  formRecp!: FormGroup;

  ngOnInit(): void {
    this.formRecp = this.formBuilder.group({
      nome: [null],
      data_nascimento: [null],
      cpf: [null],
      rg: [null],
      email: [null],
      cep: [null],
      rua: [null],
      numero: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
      complemento: [null],
      ponto_referencia: [null]
    });
  }

  cadPatient(): void {
    const formValue = {
      ...this.formRecp.value,
    };
    console.log(formValue);
    this.patientService.post(formValue).subscribe(
      async (result) => {
        console.log(result);
      },
      async ({ error }) => {
        console.log(error);
      },
    );
  }

}
