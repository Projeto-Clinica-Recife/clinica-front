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
    private router: Router
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
    });

  }


  updateDoctor(doctorID: any) {
    const formValue = {
      ...this.formEditDoctor.value,
    };
    this.doctorService.updateDoctor(formValue, doctorID).subscribe(
      async (result) => {
        if (result.statusCode === '200') {
          alert('Perfil atualizado!');
          this.router.navigate(['/medico/home-medico']);
        } else {
          alert('Algum erro ocorreu! Tente novamente em alguns minutos');
          this.router.navigate(['/medico/home-medico']);
        }
      }
    );
  }

}
