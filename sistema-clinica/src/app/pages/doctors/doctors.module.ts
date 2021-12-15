import { DoctorViewComponent } from './doctor/doctor-formulario-consulta/doctor-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeDoctorComponent } from './home-doctor/home-doctor.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorConsultaComponent } from './doctor/doctor-consulta/doctor-consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { DoctorFinanceiroComponent } from './doctor/doctor-financeiro/doctor-financeiro.component';

const routes: Routes = [{
  path: '',
  component: HomeDoctorComponent,
  // canActivateChild: [AuthGuard],
}];

@NgModule({
  declarations: [
    HomeDoctorComponent,
    DoctorConsultaComponent,
    DoctorViewComponent,
    SettingsComponent,
    DoctorFinanceiroComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
