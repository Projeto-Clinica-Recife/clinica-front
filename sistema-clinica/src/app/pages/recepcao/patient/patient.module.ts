import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientConsultaComponent } from './patient-consulta/patient-consulta.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PatientComponent,
    PatientConsultaComponent,
    PatientViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PatientModule { }
