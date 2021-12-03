import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    post(doctor: any): Observable<any> {
      const url = `${this.URL}/store`;
      return this.http.post(url,doctor);
    }

    // getDoctor(search: any): Observable<any> {
    //   const url = `${this.URL}/${search}`;

    getDoctors(): Observable<any> {
      const url = `${this.URL}/doctors`;
      return this.http.get(url);
    }
}
