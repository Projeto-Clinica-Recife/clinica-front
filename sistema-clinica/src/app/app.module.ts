import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/recepcao/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './providers/auth/auth.service';
import { TokenManager } from './providers/token-manager/token-manager.service';
import { RedefinePasswordComponent } from 'src/app/pages/users/redefine-password/redefine-password.component';
import { HomeModule } from './pages/recepcao/home/home.module';
import { PatientModule } from './pages/recepcao/patient/patient.module';
import { AdminModule } from './pages/admin/admin.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoctorModule } from './pages/doctors/doctors.module';
import { RecepcaoModule } from './pages/recepcao/recepcao.module';
import { UsersModule } from './pages/users/users.module';
import { DoctorRecModule } from './pages/recepcao/doctor/doctor.module';
import { AuthInterceptor } from './providers/http-interceptor/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RedefinePasswordComponent,
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
    DoctorRecModule,
    RecepcaoModule,
    UsersModule
  ],
  providers: [
    AuthService,
    TokenManager,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
