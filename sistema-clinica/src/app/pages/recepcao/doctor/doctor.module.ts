import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRecComponent } from './doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorRecConsultaComponent } from './doctor-consulta/doctor-consulta.component';
import { DoctorRecViewComponent } from './doctor-view/doctor-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoctorPlansComponent } from './doctor-plans/doctor-plans.component';



@NgModule({
  declarations: [
    DoctorRecComponent,
    DoctorRecConsultaComponent,
    DoctorRecViewComponent,
    DoctorPlansComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class DoctorRecModule { }
