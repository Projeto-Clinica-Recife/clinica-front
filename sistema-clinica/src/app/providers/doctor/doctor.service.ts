import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private URL = `${environment.api_url}/doctor`;

  constructor(
    private http: HttpClient
    ) { }


    getDoctors(): Observable<any> {
      const url = `${this.URL}/doctors`;
      return this.http.get(url);
    }
}
