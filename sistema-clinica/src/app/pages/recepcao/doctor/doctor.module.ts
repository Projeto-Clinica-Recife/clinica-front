import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRecComponent } from './doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorRecConsultaComponent } from './doctor-consulta/doctor-consulta.component';
import { DoctorRecViewComponent } from './doctor-view/doctor-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    DoctorRecComponent,
    DoctorRecConsultaComponent,
    DoctorRecViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class DoctorRecModule { }
