import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Protocol } from 'src/app/models/protocol';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  private URL = `${environment.api_url}/protocol`;

  constructor(
    private http: HttpClient
    ) { }


    getProtocols(): Observable<any> {
      const url = `${this.URL}/`;
      return this.http.get(url);
    }

    getActiveProtocols(): Observable<any> {
      const url = `${this.URL}/active`;
      return this.http.get(url);
    }

    getProtocolById(protocolId: number): Observable<Protocol> {
      const url = `${this.URL}/${protocolId}`;
      return this.http.get<Protocol>(url);
    }

    cadProtocol(form: any){
      const url = `${this.URL}/`;
      return this.http.post<any>(url, form);
    }

    updateProtocol(protocolId: number, form: any){
      const url = `${this.URL}/${protocolId}`;

      return this.http.put<any>(url, form);
    }

    disableProtocol(protocolId: number){
      const url = `${this.URL}/disable/${protocolId}`;

      return this.http.put<any>(url, undefined);
    }

    deleteProtocol(protocolId: number): Observable<any> {
      const url = `${this.URL}/${protocolId}`;

      return this.http.delete(url, undefined);
    }

}
