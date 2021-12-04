import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { PatientService } from 'src/app/providers/patient/patient.service';
import SignaturePad from 'signature_pad';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cad-patient',
  templateUrl: './cad-patient.component.html',
  styleUrls: ['./cad-patient.component.scss']
})

export class CadPatientComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private http: HttpClient
  ) { }

  public end: any;
  formPatient!: FormGroup;
  signaturePad: any;

  ngOnInit(): void {
    this.formPatient = this.formBuilder.group({
      nome: [null],
      data_nascimento: [null],
      cpf: [null],
      rg: [null],
      dispatcher: [null],
      email: [null],
      cep: [null],
      rua: [null],
      numero: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
      complemento: [null],
      ponto_referencia: [null],
      nationality: [null],
      profession: [null],
      marital_status: [null],
      contracted_plan: [null],
      signature: [null]
    });
  }

  @ViewChild('signature', { static: false }) canvas!: ElementRef;

  ngAfterViewInit() {
    let el = this.canvas.nativeElement;
    el.style.color = 'white';
    this.signaturePad = new SignaturePad(el);

  }

  clearSignature() {
    this.signaturePad.clear();
  }

  dataSignature() {
    const data = this.signaturePad.toDataURL()
    return data;
  }

  verifySignature() {
    return this.signaturePad.isEmpty();
  }

  cadPatient(): void {
    if (this.verifySignature()) {
      alert('Campo de assinatura vazio');
    } else {
      this.formPatient.patchValue({
        signature: this.dataSignature()
      });
      const formValue = {
        ...this.formPatient.value,
      };
      console.log(formValue);
      this.patientService.post(formValue).subscribe(
        async (result) => {
          alert('Paciente cadastro com sucesso')
          console.log(result);
          this.formPatient.reset();
        },
        async ({ error }) => {
          console.log(error);
        },
      );
    }
  }

  async viaCep() {
    this.http.get(`https://viacep.com.br/ws/${this.formPatient.value.cep}/json`).subscribe(resultado => {
      this.end = resultado;
      console.log(this.end);
      this.formPatient.patchValue({
        rua: this.end.logradouro,
        bairro: this.end.bairro,
        cidade: this.end.localidade,
        estado: this.end.uf
      });
    });

  }
}
