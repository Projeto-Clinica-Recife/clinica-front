import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';

export const routes: Routes = [{
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


// export const routes: Routes = [{
//   path: '',
//   // canActivateChild: [AuthGuard],
//   children: [
//     {
//       path: "home",
//       children: [{ path: "/home", component: HomeComponent }],
//       data: {
//         rota: "/home",
//       },
//     }
//   ]
// }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepcaoRoutingModule { }
