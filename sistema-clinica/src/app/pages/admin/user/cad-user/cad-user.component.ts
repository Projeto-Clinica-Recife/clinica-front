import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.component.html',
  styleUrls: ['./cad-user.component.scss']
})
export class CadUserComponent implements OnInit {

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
      type_user: new FormControl(null, [
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
          setTimeout(() => {this.router.navigate(['/admin/home']);}, 2000);
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
