import { Component, ElementRef, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { PatientService } from 'src/app/providers/patient/patient.service';
import { ProtocolService } from 'src/app/providers/protocol/protocol.service';
import { AgenderService } from 'src/app/providers/agender/agender.service';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { PdfService } from 'src/app/providers/pdf/pdf.service';
import SignaturePad from 'signature_pad';
import { faCalendarTimes, faEdit, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {
  formAgender!: FormGroup;
  formRecp!: FormGroup;
  formCadPlan!: FormGroup;
  public agenderPatients: any;
  public doctors: any;
  public protocols: any;
  public checkProtocols: any;
  public patientId: any;
  public patient: any;
  public interval: any;
  public end: any
  public dateCurrent = new Date().toLocaleString("pt-BR", { timeZone: "America/Recife" }).substr(0, 10).split('/').reverse().join('-');
  public selectDoctors: any = '';
  public plans: any;
  public payOnCredit: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private protocolService: ProtocolService,
    private agenderService: AgenderService,
    private formBuilder: FormBuilder,
    private element: ElementRef,
    private http: HttpClient,
    private plansService: PlansService,
    private pdfService: PdfService,
  ) { }
  icons = {
    faCalendarTimes,
    faEdit,
    faDollarSign
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params.id;
    });

    this.plansService.getPlansActive().subscribe( plans => {
      this.plans = plans;
      console.log(plans);
      
    })

    this.formAgender = this.formBuilder.group({
      date: [this.dateCurrent],
      doctor_id: [null],
      hour: [null],
      protocols_id: [null],
      patient_id: [this.patientId]

    });

    this.formRecp = this.formBuilder.group({
      nome: [null],
      data_nascimento: [null],
      cpf: [null],
      rg: [null],
      email: [null],
      cep: [null],
      rua: [null],
      numero: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
      complemento: [null],
      ponto_referencia: [null],
      signature: ['Assinatura não coletada. Cadastro feito na recepção']
    });

    this.formCadPlan = this.formBuilder.group({
      doctor_id: [null],
      plan_id: [null],
      form_of_payment: [null],
      discount: [null],
    });

    this.getAgender();
    this.interval = setInterval(() => {
      this.getAgender();
    }, 1500);
    this.showPatient();
    this.allDoctors();
    this.allProtocols();
  }

  @ViewChild('mselect', { static: false }) select!: ElementRef;

  ngAfterViewInit() {
    let el = this.select.nativeElement;
    el.style.color = 'white';

  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // @ViewChild('signature',{static: false}) canvas!: ElementRef;

  // ngAfterViewInit() {
  //    let el = this.canvas.nativeElement;
  //    el.style.color = 'white';
  //   el.style.background = 'red';
  //   const signaturePad = new SignaturePad(el);

  // }

  async showPatient() {
    this.patientService.getPatient(this.patientId).subscribe(
      async (result) => {
        this.patient = result;
        this.formRecp.patchValue({
          nome: this.patient.nome,
          data_nascimento: this.patient.data_nascimento,
          cpf: this.patient.cpf,
          rg: this.patient.rg,
          email: this.patient.email,
          cep: this.patient.cep,
          rua: this.patient.rua,
          numero: this.patient.numero,
          bairro: this.patient.bairro,
          cidade: this.patient.cidade,
          estado: this.patient.estado,
          complemento: this.patient.complemento,
          ponto_referencia: this.patient.ponto_referencia,

        });
      },
      async (error) => {
        console.log(error);
      }
    );
  }

  updatePatient(patient: any) {
    const formValue = {
      ...this.formRecp.value,
    };
    this.patientService.updatePatient(formValue, patient).subscribe(
      async (result) => {
        alert('Ficha de Paciente Atualizada')
        this.showPatient();
      }
    );
  }

  async allDoctors() {
    this.doctorService.getDoctors().subscribe(
      async (result) => {
        console.log(result);
        this.doctors = result;
      }
    );
  }
  async allProtocols() {
    this.protocolService.getProtocols().subscribe(
      async (result) => {
        this.protocols = result;
      }
    );
  }

  async cadAgender() {
    const formValue = {
      ...this.formAgender.value,
    };
    this.agenderService.postAgender(formValue).subscribe(
      async (result) => {
        console.log(result);

        this.formAgender.reset({
          date: this.dateCurrent,
        });
        this.getAgender()
      }
    );

  }

  async getAgender() {
    this.agenderService.getAgender(this.patientId, this.dateCurrent).subscribe(
      async (result) => {
        console.log(result);
        this.agenderPatients = result;
      }
    );
  }

  async cancelProtocol(id: number) {
    this.agenderService.cancelAgenderProtocol(id).subscribe(
      async (result) => {
        alert('Protocolo cancelado')
      }
    );
  }

  async cadPlan(){
    const form = {
      ...this.formCadPlan.value,
    };
    const patientd = this.patientId;
    
    return this.patientService.cadPlan(patientd, form).subscribe( res => {
      console.log(res);
      const patientPlanId = res.patient_plan.id;

        // Gera o contrato
        this.pdfService.generateContractPdf(patientd, patientPlanId).subscribe( async res => {

          // Retorna o pdf do contrato criado
          this.pdfService.download_pdf(res);

        }, error => {
          console.log(error);
          
        });

    }, error => {
      console.log(error);
      
    })
    
  }

  async payCredit(){
    const form = {
      ...this.formCadPlan.value,
    };

    if(form.form_of_payment === 'Cartão de Crédito'){
      this.payOnCredit = true;
    }
    
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

  async viaCep() {
    this.http.get(`https://viacep.com.br/ws/${this.formRecp.value.cep}/json`).subscribe(resultado => {
      this.end = resultado;
      console.log(this.end);
      this.formRecp.patchValue({
        rua: this.end.logradouro,
        bairro: this.end.bairro,
        cidade: this.end.localidade,
        estado: this.end.uf
      });
    });

  }

  viewHistoricPatient() {
    return this.router.navigate(['/paciente/ver-historico-paciente'], { queryParams: { id: this.patientId } });
  }

}
