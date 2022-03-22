import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';

@Component({
  selector: 'app-edit-protocol',
  templateUrl: './edit-protocol.component.html',
  styleUrls: ['./edit-protocol.component.scss']
})
export class EditProtocolComponent implements OnInit {

  protocolId: any;
  protocol: any;
  formUpdateProtocol!: FormGroup;

  message = {
    message:  '' || null,
    alertColor: '',
  };

  constructor(
    private route: ActivatedRoute,
    private protocolService: ProtocolService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.protocolId = +params['item_id'];
    }); 
      this.protocolService.getProtocolById(this.protocolId).subscribe( res =>{
        
        this.protocol = res;

        // Atribui os valores ao formulario
        this.formUpdateProtocol = this.formBuilder.group({
          descricao: new FormControl(this.protocol.descricao),
          value: new FormControl(this.protocol.value),
        });
        
      });
    
  }

  onSubmit() {
    var form = {
      ...this.formUpdateProtocol.value,
    };

    return this.protocolService.updateProtocol(this.protocolId, form).subscribe( result => {
      this.message.alertColor = "alert-success";
      this.message.message = result.message;
      return true;
    }, err => {
      this.message.alertColor = "alert-danger";
      return false;
    });
    
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.message.message = null;
  }

}
