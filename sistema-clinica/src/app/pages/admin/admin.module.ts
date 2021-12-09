import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './home/admin-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadUserComponent } from './user/cad-user/cad-user.component';
import { CadPlanComponent } from './plan/cad-plan/cad-plan.component';
import { HomePlanComponent } from './plan/home-plan/home-plan.component';
import { ListPlansComponent } from './plan/list-plans/list-plans.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    CadUserComponent,
    CadPlanComponent,
    HomePlanComponent,
    ListPlansComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class AdminModule { }
