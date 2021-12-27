import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/providers/users/users.service';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-admin',
  templateUrl: './settings-admin.component.html',
  styleUrls: ['./settings-admin.component.scss']
})
export class SettingsAdminComponent implements OnInit {

  formEditAdmin!: FormGroup;
  public admin: any;

  constructor( 
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
   ) { }

  ngOnInit(): void {
    this.admin = this.userService.get_profile();

    this.formEditAdmin = this.formBuilder.group({
      name: this.admin.name,
      cpf: new FormControl(this.admin.cpf, [
        Validators.required, Validators.minLength(11),
      ]),
      email: this.admin.email,
      telephone: new FormControl(this.admin.user_information.telephone,[
        Validators.minLength(10),
      ]),
      password: null,
      confirm_password: null,
    });

  }

  validadePassword = {
    differentPasswords: false,
    message: '',
  }

  message = {
    message:  undefined,
    alertColor: '',
  }

  passwordCheck(){
    const form = {
      ...this.formEditAdmin.value,
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

  updateAdmin(adminId: number){

    const form = {
      ...this.formEditAdmin.value,
    }

    if(this.passwordCheck()){
      return false;
    }

    return this.userService.update_user(adminId ,form).subscribe( res => {

      this.message.alertColor = 'alert-success';
      this.message.message = res.message;
      const user = res.user;
      this.userService.refresh_profile(user);

      window.location.hash = '#top';

      setTimeout(() => {this.router.navigate(['/admin/home'])}, 3000);
      
    }, error => {
      console.log(error);
      this.message.alertColor = 'alert-danger';
      this.message.message = error.message;
      window.location.hash = '#top';
    })
    
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.message.message = undefined;
  }

}
