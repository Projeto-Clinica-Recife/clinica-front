import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private URL = `${environment.api_url}/patient`;

  constructor(
    private http: HttpClient
    ) { }

    post(patient: any): Observable<any> {
      const url = `${this.URL}/store`;
      return this.http.post(url,patient);
    }

    getPatient(search: any): Observable<any> {
      const url = `${this.URL}/${search}`;
      return this.http.get(url);
    }

    allPatients(): Observable<any> {
      const url = `${this.URL}/all`;
      return this.http.get(url);
    }

    updatePatient(formValue: any, patient: any): Observable<any> {
      const url = `${this.URL}/${patient}`;
      return this.http.put(url,formValue);
    }

    getPatientById(patientID: any): Observable<any> {
      const url = `${this.URL}/detail/${patientID}`;
      return this.http.get(url);
    }

    cadPlan(patientID: any, formValue: any): Observable<any> {
      const url = `${this.URL}/cad-plan/${patientID}`;
      return this.http.post(url, formValue);
    }

    getPlans(patientId: number): Observable<any> {
      const url = `${this.URL}/plans/${patientId}`;

      return this.http.get(url);
    }

}
