import { SearchComponent } from './search/search.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MAT_DATE_LOCALE } from "@angular/material/core";

const components = [
  FooterComponent,
  HeaderComponent,
  SearchComponent
];

const imports = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatTableModule,
  FontAwesomeModule,
  MatDatepickerModule,
  MatCardModule,
  MatMomentDateModule
];

@NgModule({
  imports:[
    ...imports
  ],
  declarations: components,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  exports: [
    ...components,
    imports],
  bootstrap: [
  ],
  entryComponents: [

  ],
})
export class SharedModule {}


