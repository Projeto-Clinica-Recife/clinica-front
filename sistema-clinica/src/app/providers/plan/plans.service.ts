import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Plan } from 'src/app/models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private URL = `${environment.api_url}/plan`;
  constructor( 
    private http: HttpClient,
   ) { }

   cadPlan(form: any){
     const url = `${this.URL}/store`;

     return this.http.post<any>(url, form);
   }

   getPlans(){
    const url = `${this.URL}`;

    return this.http.get<Plan>(url);
   }
}
