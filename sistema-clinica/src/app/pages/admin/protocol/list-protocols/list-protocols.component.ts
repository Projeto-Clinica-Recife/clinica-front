import { Component, OnInit } from '@angular/core';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';
import { faPenSquare, faBan, faRecycle} from '@fortawesome/free-solid-svg-icons';
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
    faPenSquare,
    faBan,
    faRecycle
  }

  message = {
    message:  undefined,
    alertColor: '',
  }

  ngOnInit(): void {
    this.protocolService.getProtocols().subscribe( res =>{
      this.protocols = res;
      
    })
  }

  updateProtocol(protocolId: number){
    return this.router.navigate([`/admin/editar-protocolo/${protocolId}`]);
  }

  disabledProtocol(protocolId: number){

    const result = this.protocolService.disableProtocol(protocolId).subscribe( res => {
      this.message.message = res.message;
      this.message.alertColor = 'alert-success';
      window.location.reload();
    }, err => {
      this.message.message = err.message;
      this.message.alertColor = 'alert-danger';
    });

    window.location.hash = '#top';

    return result;
  }

  deleteProtocol(protocolId: number){
    return this.protocolService.deleteProtocol(protocolId).subscribe( res =>{
      console.log(res);
      location.reload();
    })
  }

  showAlertConfirm(){
    var elem = document.querySelector('.body');

    elem!.classList.add("bg-dark");

    console.log(elem);
    
    
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    this.message.message = undefined;
  }

}
