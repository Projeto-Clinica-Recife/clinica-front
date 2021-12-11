import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-redefine-password',
  templateUrl: './redefine-password.component.html',
  styleUrls: ['./redefine-password.component.scss']
})
export class RedefinePasswordComponent implements OnInit {


  constructor(
    private userService: UsersService,
  ) { }

  formPassword!: FormGroup;
  validadePassword = {
    differentPasswords: false,
    message: '',
  }
  ngOnInit(): void {
    this.formPassword = new FormGroup({
      password: new FormControl(null,[
        Validators.required, Validators.minLength(8)
      ]),
      confirmPassword: new FormControl(null,[
        Validators.required, Validators.minLength(8)
      ]),
    })
  }

  passwordCheck(): boolean{
    const form = {
      ...this.formPassword.value
    };
    const user = this.userService.get_profile();
    
    const newPassword = form.password;
    const confirmPassword = form.confirmPassword;
    if(newPassword === '12345678'){
      this.validadePassword.message  = 'Sua senha deve ser diferente da padrão';
      this.validadePassword.differentPasswords = true;
      return false;
    }else if(newPassword !== confirmPassword){
            this.validadePassword.differentPasswords = true;
            this.validadePassword.message = 'Ops! Senhas incompativeis.';
            return false;
      }
      this.validadePassword.differentPasswords = false;
      return true;
  }

  async redefine_password(){
    console.log('Vai trocar');
    const form = {
      ...this.formPassword.value
    };
    if(!this.passwordCheck()){
      return false;
    }
    const user = this.userService.get_profile();
    return await this.userService.redefine_password(user.id, form.password);
  }

  async reset_form(){
    this.formPassword.reset();
  }
}
