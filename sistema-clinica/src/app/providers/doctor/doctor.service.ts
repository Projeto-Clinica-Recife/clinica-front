import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  SearchDoctors(search: any): Observable<any> {
    const url = `${this.URL}/${search}`;
    return this.http.get(url);
  }
  
  getDoctor(search: any): Observable<any> {
    const url = `${this.URL}/showby/${search}`;
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

  uploadLogo(doctorId: number, data: any): Observable<any> {
    const url = `${this.URL}/upload-image/${doctorId}`;
    const headers = new HttpHeaders;
    return this.http.post(url, data,{
      headers: headers,
    });
  }

  generatePrescriptionPdf(form: any): Observable<any> {
    const url = `${environment.api_url}/prescription/generate`;
    return this.http.post(url,form);
  }

  getPlansDoctor(doctorId: number){
    const url = `${this.URL}/plans/${doctorId}`;

    return this.http.get(url);
  }

}
