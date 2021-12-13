import { Component, OnInit } from '@angular/core';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';
import { faCalendarTimes, faEdit} from '@fortawesome/free-solid-svg-icons';

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
    faCalendarTimes,
    faEdit
  }

  ngOnInit(): void {
    this.protocolService.getProtocols().subscribe( res =>{
      this.protocols = res;
      
    })
  }

}
