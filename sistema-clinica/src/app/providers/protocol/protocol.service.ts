import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
      const url = `${this.URL}/protocols`;
      return this.http.get(url);
    }

    cadProtocol(form: any){
      const url = `${this.URL}/`;
      return this.http.post<any>(url, form);
    }

    deleteProtocol(protocolId: number): Observable<any> {
      const url = `${this.URL}/delete/${protocolId}`;

      return this.http.put(url, undefined);
    }

}
