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
    return this.http.post(url, doctor);
  }

  saveFormQuery(form: any): Observable<any> {
    const url = `${this.URL}/query-patient`;
    return this.http.post(url, form);
  }

  getDoctors(): Observable<any> {
    const url = `${this.URL}/doctors`;
    return this.http.get(url);
  }

  getAgendaDoctor(id_doctor: any, dateCurrent: any): Observable<any> {
    const url = `${this.URL}/agender/${id_doctor}/${dateCurrent}`;
    return this.http.get(url);
  }

  updateDoctor(formValue: any, doctorId: any): Observable<any> {
    const url = `${environment.api_url}/user/update/${doctorId}`;
    return this.http.put(url,formValue);
  }

  getGeneratePdf(form: any): Observable<any> {
    const url = `${environment.api_url}/prescription/generate`;
    return this.http.post(url,form);
  }

}
