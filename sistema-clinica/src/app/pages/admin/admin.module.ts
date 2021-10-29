import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './home/admin-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadUserComponent } from './user/cad-user/cad-user.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    CadUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }
