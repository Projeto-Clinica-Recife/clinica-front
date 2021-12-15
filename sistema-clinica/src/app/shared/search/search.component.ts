import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../src/app/providers/patient/patient.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public search: any;
  public patients: any;
  public loading = false;
  public rota: any;

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rota = this.router.url;
  }

  searchPatient(): void {
    this.loading = true;
    this.patientService.getPatient(this.search).subscribe(
      async (result) => {
        this.loading = false;
        console.log(result);
        this.patients = result;
      },
      async ({ error }) => {
        this.loading = false;
        console.log(error);
      },
    );
  }

  viewPatient(id: any) {
    if (this.rota == '/paciente/consulta') {
      return this.router.navigate(['/paciente/ver-paciente'], { queryParams: { id: id } });
    } else if (this.rota == '/financeiro/gerar-contrato') {
      return this.router.navigate(['/financeiro/formulario-contrato'], { queryParams: { id: id } });
    }
    return;
  }

}
