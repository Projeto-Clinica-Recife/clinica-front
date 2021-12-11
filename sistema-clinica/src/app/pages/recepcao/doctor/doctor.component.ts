import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../providers/patient/patient.service';
import { AbstractControl, FormBuilder, FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorRecComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService,
  ) {}

  formUser!: FormGroup;
  isDoctor: boolean = false;
  
  success = {
    messageSuccess: '',
    isSuccess: false,
  }
  error = {
    messageError: '',
    hasError: false,
  }

  ngOnInit(): void {
    this.formUser = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
      ]),
      cpf: new FormControl(null, [
        Validators.required, Validators.minLength(11),
      ]),
      type_user: new FormControl('doctor', [
        Validators.required,
      ]),
      telephone: new FormControl(null, [
        Validators.required, Validators.minLength(10),
      ]),
      crm: new FormControl(null),
      crm_state: new FormControl(null),
    });
  }

  select_type_user(){
    const formValue ={
      ...this.formUser.value,
    }
    const type_user = formValue.type_user;
    if(type_user == 'doctor'){
      this.isDoctor = true;
    }else{
      this.isDoctor = false;
    }
  }

  async cadUser(){
    const formValue ={
      ...this.formUser.value,
    }
    await (await this.usersService.cad_user(formValue)).subscribe(
      async ({ statusCode }) => {
        if (statusCode === 200) {
          this.success.isSuccess = true;
          this.success.messageSuccess = 'Cadastro realizado com sucesso!';
          this.formUser.reset();
          setTimeout(() => {this.router.navigate(['/home']);}, 2000);
        }
      }, async ({ error }) => {
        console.log(error);
        if(error.statusCode === 422){
          this.error.messageError = 'Por favor, verifique se todos os campos estão preenchidos!';
        }else{   
          this.error.messageError = error.error;
        }
        this.error.hasError = true;
      }
    )
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.error.hasError = false;
    this.success.isSuccess = false;
  }

  

}
