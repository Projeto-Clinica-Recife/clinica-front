import { Router } from '@angular/router';
import { UsersService } from 'src/app/providers/users/users.service';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  formEditDoctor!: FormGroup;
  public doctor: any;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private userService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.doctor = this.userService.get_profile();

    this.formEditDoctor = this.formBuilder.group({
      name: this.doctor.name,
      cpf: this.doctor.cpf,
      email: this.doctor.email,
      telephone: this.doctor.user_information.telephone,
      crm: this.doctor.user_information.crm,
      crm_state: this.doctor.user_information.crm_state,
      password: null,
      confirm_password: null,
    });

  }

  message = {
    message:  undefined,
    alertColor: '',
  }

  validadePassword = {
    differentPasswords: false,
    message: '',
  }

  passwordCheck(){
    const form = {
      ...this.formEditDoctor.value,
    }

    const check = this.userService.passwordCheck(form.password, form.confirm_password);

    if(!check){
      this.validadePassword.differentPasswords = true;
      this.validadePassword.message = 'Ops! Senhas incompativeis.';
      return true;
    }else{
      this.validadePassword.differentPasswords = false;
      return false;
    }
  }


  updateDoctor(doctorID: any) {
    const formValue = {
      ...this.formEditDoctor.value,
    };

    if(this.passwordCheck()){
      return false;
    }

    return this.userService.update_user(doctorID, formValue).subscribe(
      async (result) => {
        
        this.message.alertColor = 'alert-success';
        this.message.message = result.message;
        const user = result.user;
        this.userService.refresh_profile(user);
        
        window.location.hash = '#top';
        
        setTimeout(() => {this.router.navigate(['/medico/home-medico'])}, 3000);

      }, error => {
        console.log(error);
        this.message.alertColor = 'alert-danger';
        this.message.message = error.message;
        window.location.hash = '#top';
      }
    );
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.message.message = undefined;
  }

}
