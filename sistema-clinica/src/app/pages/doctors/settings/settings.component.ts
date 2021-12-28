import { Router } from '@angular/router';
import { UsersService } from 'src/app/providers/users/users.service';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  formEditDoctor!: FormGroup;
  formImage!: FormGroup;
  public doctor: any;
  files: any;

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
      cpf: new FormControl(this.doctor.cpf, [
        Validators.required, Validators.minLength(11),
      ]),
      email: this.doctor.email,
      telephone: new FormControl(this.doctor.user_information.telephone, [
        Validators.minLength(10),
      ]),
      crm: this.doctor.user_information.crm,
      crm_state: this.doctor.user_information.crm_state,
      password: null,
      confirm_password: null,
    });

    this.formImage = this.formBuilder.group({
      image: [null, Validators.required],
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

  uploadLogo(event: any){
    this.files = event.target.files[0];
    console.log(this.files);
  }

  onSubmit(){
    const formData = new FormData();
    formData.append("logo_doctor", this.files);
    const doctorId = this.doctor.id;
    
    return this.doctorService.uploadLogo(doctorId, formData). subscribe( res => {
      console.log(res);

      this.message.alertColor = 'alert-success';
      this.message.message = res.message;
      const user = res.user;
      this.userService.refresh_profile(user);

    }, err => {
      console.log(err);
      this.message.alertColor = 'alert-danger';
        this.message.message = err.error.error;
    });
    
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.message.message = undefined;
  }

}
