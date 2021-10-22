import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientConsultaComponent } from './patient-consulta/patient-consulta.component';



@NgModule({
  declarations: [
    PatientComponent,
    PatientConsultaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PatientModule { }
