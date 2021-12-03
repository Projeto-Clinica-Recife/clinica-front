import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeDoctorComponent } from './home-doctor/home-doctor.component';



@NgModule({
  declarations: [
    HomeDoctorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MedicosModule { }
