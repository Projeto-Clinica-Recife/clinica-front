import { HomeUserComponent } from './pages/users/home-user/home-user.component';
import { SettingsComponent } from './pages/doctors/settings/settings.component';
import { HomeDoctorComponent } from './pages/doctors/home-doctor/home-doctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/recepcao/home/home.component';
import { LoginComponent } from './pages/recepcao/login/login.component';
import { RecepcaoModule } from "./pages/recepcao/recepcao.module";
import { AdminHomeComponent } from './pages/admin/home/admin-home.component';
import { CadUserComponent } from './pages/admin/user/cad-user/cad-user.component';
import { PatientViewComponent } from './pages/recepcao/patient/patient-view/patient-view.component';
import { DoctorConsultaComponent } from './pages/doctors/doctor/doctor-consulta/doctor-consulta.component';
import { DoctorViewComponent } from './pages/doctors/doctor/doctor-formulario-consulta/doctor-view.component';
import { PatientComponent } from './pages/recepcao/patient/patient.component';
import { PatientConsultaComponent } from './pages/recepcao/patient/patient-consulta/patient-consulta.component';
import { AuthGuard } from 'src/app/providers/guard/auth.guard';
import { AuthAdminGuard } from 'src/app/providers/guard/auth_admin.guard';
import { AuthReceptionGuard } from 'src/app/providers/guard/auth_reception.guard';
import { AuthDoctorGuard } from 'src/app/providers/guard/auth_doctor.guard';
import { CadPatientComponent } from './pages/recepcao/cad-patient/cad-patient.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, AuthReceptionGuard],
  },
  {
    path: 'paciente',
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
    path: 'admin',
    children: [
      {
        path: 'home',
        component: AdminHomeComponent,
        canActivate: [AuthGuard, AuthAdminGuard],
      },
      {
        path: 'cadastrar',
        component: CadUserComponent,
        canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: 'medico',
    children: [
      {
        path: 'home-medico',
        component: DoctorConsultaComponent
        ,
      },
      {
        path: 'consulta/:patient_id/:item_id',
        component: DoctorViewComponent
      },
      {
        path: 'editar-medico',
        component: SettingsComponent
      }
    ]
  },
  {
    path: 'usuario',
    component: HomeUserComponent,
    children: [
      {
        path: 'home-paciente',
        component: HomeUserComponent
      },
      {
        path: 'cadastro-paciente',
        component: CadPatientComponent
      },
      // {
      //   path: 'cadastrar',
      //   component:
      // },
      // {
      //   path: 'assinar',
      //   component:
      // }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
