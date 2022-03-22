import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProtocolService } from 'src/app/providers/protocol/protocol.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {

  public protocols: any;
  formAddProtocol!: FormGroup;
  public dateCurrent = new Date().toLocaleString("pt-BR", { timeZone: "America/Recife" }).substr(0, 10).split('/').reverse().join('-');
  public patientId: any;

  constructor(
    private protocolService: ProtocolService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params.id;
    });

    this.formAddProtocol = this.formBuilder.group({
      patient_id: [this.patientId],
      protocols_id: [null],
      form_of_payment: [null],
      obs: [null],
      date: [this.dateCurrent],
      value: [null]
    });

    this.allProtocols();
  }

  async allProtocols() {
    this.protocolService.getActiveProtocols().subscribe(
      async (result) => {
        console.log(result);
        
        this.protocols = result;
      }
    );
  }

  addProtocol(){

  }

}
