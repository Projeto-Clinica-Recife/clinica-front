import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../providers/doctor/doctor.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private router: Router
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

  cadDoctor(): void {
    const formValue = {
      ...this.formRecp.value,
    };
    console.log(formValue);
    this.doctorService.post(formValue).subscribe(
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

}
