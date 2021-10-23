import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';

export const routes: Routes = [{
  path: 'home',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepcaoRoutingModule { }
