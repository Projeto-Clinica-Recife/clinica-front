import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-payment-search',
  templateUrl: './register-payment-search.component.html',
  styleUrls: ['./register-payment-search.component.scss']
})
export class RegisterPaymentSearchComponent implements OnInit {

  public search: any;
  public itens: any;
  public type: string = 'paciente';
  public loading = false;

  constructor(
    private patientService: PatientService,
    private router: Router,
  ) { }


  ngOnInit() {
  }

  searchPD(){
   
    
        this.loading = true;
        this.patientService.getPatient(this.search).subscribe(
          async (result) => {
            this.loading = false;
           // console.log(result);
            this.itens = result;
          },
          async ({ error }) => {
            this.loading = false;
            console.log(error);
          },
        );
      
  }

  viewResultsPatient(itemId: number){
    return this.router.navigate(['/financeiro/lancar-pagamento'], { queryParams: { id: itemId } });
  }
}
