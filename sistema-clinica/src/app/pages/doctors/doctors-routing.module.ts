import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDoctorComponent } from './home-doctor/home-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';

export const routes: Routes = [{
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepcaoRoutingModule { }
