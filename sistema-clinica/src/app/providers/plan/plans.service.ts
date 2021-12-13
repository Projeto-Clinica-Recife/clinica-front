import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Plan } from 'src/app/models/plan';
import { TokenManager } from '../token-manager/token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private URL = `${environment.api_url}/plan`;
  constructor( 
    private http: HttpClient,
    private tokenManager: TokenManager,
   ) { }

   token = this.tokenManager.getTokenStorage();

   cadPlan(form: any){
     const url = `${this.URL}/store`;

     return this.http.post<any>(url, form);
   }

   getPlans(){
    const url = `${this.URL}`;

    const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.token,);
    
    return this.http.get<Plan>(url);
   }

   cancelPlan(planId: number){
    const url = `${this.URL}/cancel/${planId}`;

    return this.http.put<any>(url, {body: undefined});
   }

   activePlan(planId: number){
    const url = `${this.URL}/reactivate/${planId}`;

    return this.http.put<any>(url, {body: undefined});
   }
}
