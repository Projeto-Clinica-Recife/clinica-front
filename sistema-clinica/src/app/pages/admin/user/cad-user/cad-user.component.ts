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
  ) { }

  formUser!: FormGroup;
  isDoctor: boolean = false;
  
  error = {
    hasError: false,
    messageError:  '',
  }

  ngOnInit(): void {
    // this.formUser = this.formBuilder.group({
    //   name: [null, Validators.compose([Validators.required])],
    //   cpf: [null, Validators.compose([Validators.required])],
    //   crm: [null],
    //   email: [null, Validators.compose([Validators.required])],
    //   type_user: [null, Validators.compose([Validators.required])],
    //   telephone: [null, Validators.compose([Validators.required])],
    // });

    this.formUser = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
      ]),
      cpf: new FormControl(null, [
        Validators.required,
      ]),
      type_user: new FormControl(null, [
        Validators.required,
      ]),
      telephone: new FormControl(null, [
        Validators.required,
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

  validadForm(){
    const formValue = {
      ...this.formUser.value,
    }
    console.log(this.formUser);
    
  }

  cadUser(){
    const formValue ={
      ...this.formUser.value,
    }
    this.validadForm();
    this.usersService.cad_user(formValue)
    .then(result => {
      if(result.status != 200){
        this.error.messageError = result.error.error;
        this.error.hasError = true;  
        setTimeout(() => { this.error.hasError = false},2000);
      }
    });
    console.log(formValue);
  }

  closeAlert() {
    console.log('Teste');
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
  }
}
