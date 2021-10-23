import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/recepcao/home/home.component';
import { LoginComponent } from './pages/recepcao/login/login.component';
import { UserDetailComponent } from './pages/recepcao/user-detail/user-detail.component';
import { PatientComponent } from './pages/recepcao/patient/patient.component';
import { PatientConsultaComponent } from './pages/recepcao/patient/patient-consulta/patient-consulta.component';
import { RecepcaoModule } from "./pages/recepcao/recepcao.module";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
   component: HomeComponent
  },
  {
    path: 'user-detail',
    component: UserDetailComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
