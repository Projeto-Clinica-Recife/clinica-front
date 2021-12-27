import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/providers/users/users.service';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings-reception.component.html',
  styleUrls: ['./settings-reception.component.scss']
})
export class SettingsReceptionComponent implements OnInit {

  formEditPatient!: FormGroup;
  public patient: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
   ) { }

   message = {
    message:  undefined,
    alertColor: '',
  }

   validadePassword = {
    differentPasswords: false,
    message: '',
  }

  ngOnInit(): void {
    this.patient = this.userService.get_profile();

    this.formEditPatient = this.formBuilder.group({
      name: this.patient.name,
      cpf: new FormControl(this.patient.cpf,[
        Validators.required, Validators.minLength(11),
      ]),
      email: this.patient.email,
      telephone: new FormControl(this.patient.user_information.telephone,[
        Validators.minLength(10),
      ]),
      password: null,
      confirm_password: null,
    });
  }

  passwordCheck(): boolean{
    const form = {
      ...this.formEditPatient.value
    };
    
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

  updatePatient(patientId: any) {
    const formValue = {
      ...this.formEditPatient.value,
    };
    
    if(this.passwordCheck()){
      return false;
    }
    
    return this.userService.update_user(patientId, formValue).subscribe(
      async (result) => {
        
        this.message.alertColor = 'alert-success';
        this.message.message = result.message;

        const user = result.user;
        this.userService.refresh_profile(user);
        
        window.location.hash = '#top';

      setTimeout(() => {this.router.navigate(['/home'])}, 3000);

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
