import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeMedicoComponent } from './home-medico/home-medico.component';



@NgModule({
  declarations: [
    HomeMedicoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MedicosModule { }
