import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';
import { AgenderService } from 'src/app/providers/agender/agender.service';
import SignaturePad from 'signature_pad';
import { faCalendarTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DoctorService } from '../../../../providers/doctor/doctor.service';
import { UsersService } from 'src/app/providers/users/users.service';
@Component({
  selector: 'app-doctor-consulta',
  templateUrl: './doctor-consulta.component.html',
  styleUrls: ['./doctor-consulta.component.scss',]
})
export class DoctorConsultaComponent implements OnInit {

  constructor(
    private doctorService: DoctorService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private protocolService: ProtocolService,
    private agenderService: AgenderService,
    private formBuilder: FormBuilder,
    private element: ElementRef,
    private userService: UsersService
  ) { }

  public search: any;
  public doctors: any;
  model!: NgbDateStruct;
  date!: { year: number, month: number };
  @ViewChild('dp') dp!: NgbDatepicker;
  icons = {
    faCalendarTimes,
    faEdit
  }
  formAgender!: FormGroup;
  public agendamentoDoctor: any;
  public protocols: any;
  public checkProtocols: any;
  public interval: any;
  public dateCurrent = new Date().toLocaleString("pt-BR", { timeZone: "America/Recife" }).substr(0, 10).split('/').reverse().join('-');
  public user: any;
  clickedRows = new Set<any>();

  ngOnInit(): void {

    this.user = this.userService.get_profile();

    this.formAgender = this.formBuilder.group({
      hour: [null],
      status: [null],
      patient: [null],
      patient_id: [null]
    });

    this.getAgenda();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getAgenda() {
    this.doctorService.getAgendaDoctor(this.user.id, this.dateCurrent).subscribe(
      async (result) => {
        this.agendamentoDoctor = result;
        console.log(result);
      },
      async (error) => {
        console.log(error);
      }
    );
  }

  translateStatus(status: string) {
    let state;
    switch (status) {
      case 'waiting':
        state = 'Aguardando';
        break;
      case 'canceled':
        state = 'Cancelado';
        break;
    }
    return state;
  }

}
