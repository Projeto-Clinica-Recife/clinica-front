import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/recepcao/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './providers/auth/auth.service';
import { TokenManager } from './providers/token-manager/token-manager.service';

import { HomeModule } from './pages/recepcao/home/home.module';
import { PatientModule } from './pages/recepcao/patient/patient.module';
import { AdminModule } from './pages/admin/admin.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoctorModule } from './pages/doctors/doctors.module';
import { RecepcaoModule } from './pages/recepcao/recepcao.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    PatientModule,
    AdminModule,
    FontAwesomeModule,
    DoctorModule,
    RecepcaoModule
  ],
  providers: [
    AuthService,
    TokenManager,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
