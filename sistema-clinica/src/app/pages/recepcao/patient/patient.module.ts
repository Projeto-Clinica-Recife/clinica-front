import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientConsultaComponent } from './patient-consulta/patient-consulta.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PatientHistoricComponent } from './patient-historic/patient-historic.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientPlansComponent } from './patient-plans/patient-plans.component';


@NgModule({
  declarations: [
    PatientComponent,
    PatientConsultaComponent,
    PatientViewComponent,
    PatientHistoricComponent,
    PatientPlansComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    MatExpansionModule,
    SharedModule
  ]
})
export class PatientModule { }
