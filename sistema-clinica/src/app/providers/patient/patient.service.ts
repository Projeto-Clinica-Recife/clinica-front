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
}
