import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';
import { HomeComponent } from './pages/recepcao/home/home.component';
import { LoginComponent } from './pages/recepcao/login/login.component';

import{PatientComponent} from './pages/recepcao/patient/patient.component';
import{PatientConsultaComponent} from './pages/recepcao/patient/patient-consulta/patient-consulta.component';
import { AdminHomeComponent } from './pages/admin/home/admin-home.component';
import { CadUserComponent } from './pages/admin/user/cad-user/cad-user.component';
import { PatientViewComponent } from './pages/recepcao/patient/patient-view/patient-view.component';
import { AuthGuard } from 'src/app/providers/guard/auth.guard';
import { CadPatientComponent } from './pages/recepcao/cad-patient/cad-patient.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cadastro-paciente',
    component: CadPatientComponent
  },
  {
    path:'paciente',
    children: [
      {
        path: 'cadastrar',
        component: PatientComponent
      },
      {
        path: 'consulta',
        component: PatientConsultaComponent
      },
      {
        path: 'ver-paciente',
        component: PatientViewComponent
      }
    ]
  },
  {
    path:'admin',
    children: [
      {
        path: 'home',
        component: AdminHomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cadastrar',
        component: CadUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
