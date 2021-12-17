import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenderService {

  private URL = `${environment.api_url}/agender`;

  constructor(
    private http: HttpClient
    ) { }


  postAgender(agender: any): Observable<any> {
      const url = `${this.URL}/store`;
      return this.http.post(url,agender);
    }
  getAgender(id:number, date:any): Observable<any> {
      const url = `${this.URL}/${id}/${date}`;
      return this.http.get(url);
    }

    getAgenderByWeek(date:any): Observable<any> {
      const url = `${this.URL}/week`;
      return this.http.post(url,date);
    }
  
  cancelAgenderProtocol(id: number){
      const url = `${this.URL}/cancel-agender/${id}`;
      return this.http.put(url,id);
    }
}
