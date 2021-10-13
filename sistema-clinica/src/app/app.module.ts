import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { LoginModule } from './views/login/login.module';
import { UserDetailModule } from './views/user-detail/user-detail.module';
import { HomeModule } from './views/home/home.module';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    LoginModule,
    UserDetailModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
