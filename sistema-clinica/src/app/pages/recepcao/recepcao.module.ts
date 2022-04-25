import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { CadPatientComponent } from './cad-patient/cad-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendaComponent } from './agenda/agenda.component';
import { RegisterComponent } from './agenda/register/register.component';
import { SettingsReceptionComponent } from './settings-reception/settings-reception.component';
import { FinanceComponent } from './finance/finance.component';
import { GenerateContractComponent } from './finance/generate-contract/generate-contract.component';
import { ContractFormComponent } from './finance/contract-form/contract-form.component';
import { MatSelectModule } from '@angular/material/select';
import { ContractListComponent } from './finance/contract-list/contract-list.component';
import { ProtocolComponent } from './finance/protocol/protocol.component';
import { RegisterPaymentComponent } from './finance/register-payment/register-payment.component';
import { RegisterPaymentSearchComponent } from './finance/register-payment-search/register-payment-search.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  // canActivateChild: [AuthGuard],
  children: [
    {
      path: 'cadastrar',
         component: PatientComponent
        },
      ],
    }
  ];

@NgModule({
  declarations: [
    AgendaComponent,
    RegisterComponent,
    SettingsReceptionComponent,
    FinanceComponent,
    GenerateContractComponent,
    ContractFormComponent,
    ContractListComponent,
    ProtocolComponent,
    RegisterPaymentComponent,
    RegisterPaymentSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class RecepcaoModule {


}
