import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './home/admin-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadUserComponent } from './user/cad-user/cad-user.component';
import { CadPlanComponent } from './plan/cad-plan/cad-plan.component';
import { HomePlanComponent } from './plan/home-plan/home-plan.component';
import { ListPlansComponent } from './plan/list-plans/list-plans.component';
import { SettingsAdminComponent } from './settings-admin/settings-admin.component';
import { HomeProtocolComponent } from './protocol/home-protocol/home-protocol.component';
import { CadProtocolComponent } from './protocol/cad-protocol/cad-protocol.component';
import { ListProtocolsComponent } from './protocol/list-protocols/list-protocols.component';
import { EditProtocolComponent } from './protocol/edit-protocol/edit-protocol.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    CadUserComponent,
    CadPlanComponent,
    HomePlanComponent,
    ListPlansComponent,
    SettingsAdminComponent,
    HomeProtocolComponent,
    CadProtocolComponent,
    ListProtocolsComponent,
    EditProtocolComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AdminModule { }
