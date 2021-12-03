import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../providers/patient/patient.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private http: HttpClient
  ) { }
  
  public end: any;
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
      ponto_referencia: [null],
      signature:['Assinatura não coletada. Cadastro feito na recepção']
    });
  }

  cadPatient(): void {
    const formValue = {
      ...this.formRecp.value,
    };
    console.log(formValue);
    this.patientService.post(formValue).subscribe(
      async (result) => {
        alert('Paciente cadastro com sucesso')
        console.log(result);  
        this.router.navigateByUrl('/home');
      },
      async ({ error }) => {
        console.log(error);
      },
    );
  }

  async viaCep() {
    this.http.get(`https://viacep.com.br/ws/${this.formRecp.value.cep}/json`).subscribe(resultado => {
      this.end = resultado;
      console.log(this.end);
      this.formRecp.patchValue({
        rua: this.end.logradouro,
        bairro: this.end.bairro,
        cidade: this.end.localidade,
        estado: this.end.uf
      });
    });

  }

}
