import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private protocolService: ProtocolService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.protocolId = +params['item_id'];
      console.log(this.protocolId);
    });

    this.formUpdateProtocol = this.formBuilder.group({

    });
  }

}
