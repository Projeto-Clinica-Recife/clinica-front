import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeDoctorComponent } from './home-doctor/home-doctor.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorConsultaComponent } from './doctor/doctor-consulta/doctor-consulta.component';

const routes: Routes = [{
  path: '',
  component: HomeDoctorComponent,
  // canActivateChild: [AuthGuard],
  children: [
    {
      path: 'cadastrar',
         component: DoctorComponent
        },
      ],
    }
  ];

@NgModule({
  declarations: [
    HomeDoctorComponent,
    DoctorConsultaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorModule { }
