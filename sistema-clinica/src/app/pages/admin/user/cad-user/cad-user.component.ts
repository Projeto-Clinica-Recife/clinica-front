import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      name: [null],
      cpf: [null],
      crm: [null],
      email: [null],
      type_user: [null],
      telephone: [null],
      password: [null],
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
    console.log(this.isDoctor);
    
  }
  cadUser(){
    const formValue ={
      ...this.formUser.value,
    }
    this.usersService.cad_user(formValue);
    
    console.log(formValue);
  }

  closeAlert() {
    console.log('Teste');
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
  }
}
