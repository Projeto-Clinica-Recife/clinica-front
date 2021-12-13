import { RegisterComponent } from './pages/recepcao/agenda/register/register.component';
import { AgendaComponent } from './pages/recepcao/agenda/agenda.component';
import { PatientHistoricComponent } from './pages/recepcao/patient/patient-historic/patient-historic.component';
import { HomeUserComponent } from './pages/users/home-user/home-user.component';
import { SettingsComponent } from './pages/doctors/settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/recepcao/home/home.component';
import { LoginComponent } from './pages/recepcao/login/login.component';
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
import { HomePlanComponent } from './pages/admin/plan/home-plan/home-plan.component';
import { CadPlanComponent } from './pages/admin/plan/cad-plan/cad-plan.component';
import { ListPlansComponent } from './pages/admin/plan/list-plans/list-plans.component';

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
    path: 'agenda',
    children: [
      {
        path: '',
        component: AgendaComponent,
        canActivate: [AuthGuard, AuthReceptionGuard]
      },
      {
        path: 'semana',
        component: RegisterComponent,
        canActivate: [AuthGuard, AuthReceptionGuard]
      }]
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
      },
      {
        path: 'ver-historico-paciente',
        component: PatientHistoricComponent
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
        canActivate: [AuthGuard, AuthAdminGuard],
      },
      {
        path: 'plano',
        component: HomePlanComponent,
        canActivate: [AuthGuard, AuthAdminGuard],
      },
      {
        path: 'cadastrar-plano',
        component: CadPlanComponent,
        canActivate: [AuthGuard, AuthAdminGuard],
      },
      {
        path: 'listar-planos',
        component: ListPlansComponent,
        canActivate: [AuthGuard, AuthAdminGuard],
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
