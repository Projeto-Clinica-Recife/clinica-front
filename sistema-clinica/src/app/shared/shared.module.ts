import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer/footer.component";
import { HeaderComponent } from "./header/header/header.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const components = [
  FooterComponent,
  HeaderComponent
];

const imports = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule
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


