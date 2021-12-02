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
  
  error = {
    hasError: false,
    messageError:  '',
  }
  messageSuccess: string = ''

  ngOnInit(): void {
    this.formUser = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
      ]),
      cpf: new FormControl(null, [
        Validators.required, Validators.minLength(11), Validators.maxLength(11),
      ]),
      type_user: new FormControl(null, [
        Validators.required,
      ]),
      telephone: new FormControl(null, [
        Validators.required, Validators.minLength(10), Validators.maxLength(11)
      ]),
      crm: new FormControl(null),
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
    await this.usersService.cad_user(formValue)
    .then(result => {
      if(result.status != 200){
        this.error.messageError = result.error.error;
        this.error.hasError = true;  
      }else{
        this.messageSuccess = 'Cadastro realizado com sucesso!';
      }
    });
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.error.hasError = false;
  }
}
