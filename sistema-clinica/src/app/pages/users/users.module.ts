import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeUserComponent } from './home-user/home-user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class UsersModule { }
