import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(
    private http: HttpClient,
  ) { }

  private URL = `${environment.api_url}/contract`;

  get_contract(contractId: any): Observable<any>{
    const url = `${this.URL}/${contractId}`;

    return this.http.get(url);
  }

  edit_contract(contractId: any, form: any): Observable<any>{
    const url = `${this.URL}/edit/${contractId}`;

    return this.http.put(url, form);
  }
}
