import { Component, OnInit } from '@angular/core';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';
import { faTrashAlt, faRecycle, faPenSquare} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-protocols',
  templateUrl: './list-protocols.component.html',
  styleUrls: ['./list-protocols.component.scss']
})
export class ListProtocolsComponent implements OnInit {

  protocols: any;
  constructor( 
    private protocolService: ProtocolService,
    private router: Router,
   ) { }

   icons = {
    faTrashAlt,
    faRecycle,
    faPenSquare,
  }

  ngOnInit(): void {
    this.protocolService.getProtocols().subscribe( res =>{
      this.protocols = res;
      
    })
  }

  updateProtocol(protocolId: number){
    return this.router.navigate([`/admin/editar-protocolo/${protocolId}`]);
  }

  deleteProtocol(protocolId: number){
    console.log(protocolId);

    return this.protocolService.deleteProtocol(protocolId).subscribe( res =>{
      console.log(res);
      location.reload();
    })
  }
}
