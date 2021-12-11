import { Component, OnInit } from '@angular/core';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';

@Component({
  selector: 'app-list-protocols',
  templateUrl: './list-protocols.component.html',
  styleUrls: ['./list-protocols.component.scss']
})
export class ListProtocolsComponent implements OnInit {

  protocols: any;
  constructor( 
    private protocolService: ProtocolService,
   ) { }

  ngOnInit(): void {
    this.protocolService.getProtocols().subscribe( res =>{
      this.protocols = res;
      
    })
  }

}
