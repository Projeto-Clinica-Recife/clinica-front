import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(
    private http: HttpClient
  ) { }

  private URL = `${environment.api_url}`;

  view_pdf(base64: string){

    let html = '';
    html += "<html>";
    html += '<body style="margin:0!important">';
    html += '<embed width="100%" height="100%" src="data:application/pdf;base64,' + base64 + '" type="application/pdf" />';
    html += '<a href="www.google.com>Download</a>';
    html += "</body>";
    html += "</html>";
    setTimeout(() => {
      const win = window.open('', "_blank");
      win!.document.write(html);
    }, 100);

  }

  download_pdf(base64: string){

    var binary = atob(base64.replace(/\s/g, ''));
    var len = binary.length;
    var buffer = new ArrayBuffer(len);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
    }

    var blob = new Blob( [view], { type: "application/pdf" });
    var url = URL.createObjectURL(blob);
    window.open(url,'_blank');

    // const downloadLink = document.createElement("a");
    // const fileName = `prescricao_${patient_name}.pdf`;
    // downloadLink.href = base64;
    // downloadLink.download = fileName;
    // downloadLink.click();
  }


  generateContractPdf(patientId: number, patientPlanId: number): Observable<any> {
    const url = `${this.URL}/contract/${patientId}`;
    return this.http.post(url, {patient_plan_id: patientPlanId});
  }

}
