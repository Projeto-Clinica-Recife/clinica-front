import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { CadPatientComponent } from './cad-patient/cad-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  // canActivateChild: [AuthGuard],
  children: [
    {
      path: 'cadastrar',
         component: PatientComponent
        },
      ],
    }
  ];

@NgModule({
  declarations: [
    CadPatientComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecepcaoModule {

}
