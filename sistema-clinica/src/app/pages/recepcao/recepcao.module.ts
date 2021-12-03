import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadPatientComponent } from './cad-patient/cad-patient.component';


@NgModule({
  declarations: [  
    CadPatientComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RecepcaoModule { }
