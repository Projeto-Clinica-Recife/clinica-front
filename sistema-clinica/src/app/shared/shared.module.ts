import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  FooterComponent,
  HeaderComponent,
];

const imports = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatTableModule,
  FontAwesomeModule
];

@NgModule({
  imports:[
    ...imports
  ],
  declarations: components,
  providers: [],
  exports: [
    ...components,
    imports],
  bootstrap: [
  ],
  entryComponents: [

  ],
})
export class SharedModule {}


