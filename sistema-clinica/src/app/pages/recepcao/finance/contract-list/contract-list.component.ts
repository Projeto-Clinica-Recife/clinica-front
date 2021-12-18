import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  public search: any;
  public itens: any;
  public type: string = 'paciente';
  public loading = false;

  constructor(
    private patientService: PatientService,
    private plansService: PlansService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  searchPD(){
    
    if(this.type === 'paciente'){
      this.plansService.searchPlanPatient(this.search).subscribe( res => {
        console.log(res);
        this.itens = res;
      });
    } else{
      this.plansService.searchPlanDoctot(this.search).subscribe( res => {
        console.log(res);
        this.itens = res;
      });
      
    }
    
  }

  viewResultsPatient(itemId: number){

      return this.router.navigate(['/financeiro/ver-planos-paciente'], { queryParams: { id: itemId } });
    
  }

  viewResultsDoctor(itemId: number){

    console.log(itemId);
    

      return this.router.navigate(['/financeiro/ver-planos-medico'], { queryParams: { id: itemId } });
    
  }

}
