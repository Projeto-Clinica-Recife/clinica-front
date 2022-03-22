import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';

@Component({
  selector: 'app-cad-protocol',
  templateUrl: './cad-protocol.component.html',
  styleUrls: ['./cad-protocol.component.scss']
})
export class CadProtocolComponent implements OnInit {

  formProtocol!: FormGroup;
  doctors: any;

  constructor( 
    private router: Router,
    private protocolService: ProtocolService,
    private doctorService: DoctorService,
   ) { }

  ngOnInit(): void {
    this.formProtocol = new FormGroup({
      description: new FormControl(null, [Validators.required]),
      value: new FormControl(null, [Validators.required]),
      doctor_id: new FormControl(null),
    });

    this.getDoctors();
  }

  message = {
    message:  undefined,
    alertColor: '',
  }

  cadProtocol(){
    const form = {
      ...this.formProtocol.value,
    }

    return this.protocolService.cadProtocol(form).subscribe( res => {
      console.log(res);
      this.message.alertColor = 'alert-success';
      this.message.message = res.message;

      setTimeout(() => {this.router.navigate(['/admin/protocolo'])}, 3000)
      
    }, error => {
      console.log(error);
      this.message.message = error.error;
    });
    
  }

  async getDoctors() {
    this.doctorService.getDoctors().subscribe(
      async (result) => {
        this.doctors = result;
      }
    );
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.message.message = undefined;
  }

}
