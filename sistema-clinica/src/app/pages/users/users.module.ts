import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeUserComponent } from './home-user/home-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadPatientComponent } from '../recepcao/cad-patient/cad-patient.component';


@NgModule({
  declarations: [
    HomeUserComponent,
    CadPatientComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
