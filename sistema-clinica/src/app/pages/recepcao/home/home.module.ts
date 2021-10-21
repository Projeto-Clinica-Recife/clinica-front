import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { AuthService } from 'src/app/providers/auth/auth.service';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [AuthService],
  bootstrap: []
})
export class HomeModule { }
