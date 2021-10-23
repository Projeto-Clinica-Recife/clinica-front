import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecepcaoRoutingModule } from './recepcao-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecepcaoRoutingModule,
    SharedModule
  ]
})
export class RecepcaoModule { }
