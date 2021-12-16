import { Component, OnInit } from '@angular/core';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';
import { faTrashAlt, faRecycle} from '@fortawesome/free-solid-svg-icons';

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

   icons = {
    faTrashAlt,
    faRecycle,
  }

  ngOnInit(): void {
    this.protocolService.getProtocols().subscribe( res =>{
      this.protocols = res;
      
    })
  }

  deleteProtocol(protocolId: number){
    console.log(protocolId);

    return this.protocolService.deleteProtocol(protocolId).subscribe( res =>{
      console.log(res);
      location.reload();
    })
    
  }
}
