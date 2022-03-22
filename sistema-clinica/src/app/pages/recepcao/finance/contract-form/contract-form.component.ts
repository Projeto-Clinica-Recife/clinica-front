import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlansService } from 'src/app/providers/plan/plans.service';
import { PdfService } from 'src/app/providers/pdf/pdf.service';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { PatientService } from 'src/app/providers/patient/patient.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {

  formCadPlan!: FormGroup;
  form_of_payment!: any;
  public patientId: any;
  public plans: any;
  public doctors: any;
  public paymentForms = [
    {id: 1, name: 'Dinheiro'},
    {id: 2, name: 'Pix'},
    {id: 3, name: 'Cartão de Crédito'},
    {id: 4, name: 'Cartão de Débito'},
    {id: 4, name: 'Outro'},
  ];

  alert = {
    message: '',
    color: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private plansService: PlansService,
    private pdfService: PdfService,
    private doctorService: DoctorService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params.id;
    });

    this.formCadPlan = this.formBuilder.group({
      doctor_id: new FormControl(null,
        Validators.required
        ),
      plan_id: new FormControl(null,
        Validators.required
        ),
      form_of_payment: new FormControl([],
        Validators.required
        ),
      discount: new FormControl(null),
      observation: new FormControl(null),
    });

    this.getPlans();

    this.allDoctors();
  }

  async cadPlan(){
    var form = {
      ...this.formCadPlan.value,
    };
    const patientd = this.patientId;
    form.form_of_payment = form.form_of_payment.toString();

    console.log(form);
     
    return this.patientService.cadPlan(patientd, form).subscribe( res => {
      console.log(res);
      const patientPlanId = res.patient_plan.id;

        // Gera o contrato
        this.pdfService.generateContractPdf(patientd, patientPlanId).subscribe( async res => {

          // Retorna o pdf do contrato criado
          this.pdfService.download_pdf(res);

          this.alert.message = 'Contrato gerado com sucesso!';
          this.alert.color = 'alert-success';
          window.location.hash = '#top';
        }, error => {
          console.log(error);
          this.alert.message = 'Houve algum erro ao gerar o contrato!';
          this.alert.color = 'alert-danger';
          window.location.hash = '#top';
        });

    }, error => {
      console.log(error);
      
    });
    
  }

  async getPlans(){
    this.plansService.getPlansActive().subscribe( async plans => {
      this.plans = plans;
    });
  }

  async allDoctors() {
    this.doctorService.getDoctors().subscribe(
      async (result) => {
        this.doctors = result;
      }
    );
  }

  closeAlert() {
    var elem = document.querySelector('.alert');
    elem!.parentNode!.removeChild(elem!);
    if(this.alert.color === "alert-success"){
      this.router.navigate(['/financeiro']);
    }
    this.alert.message = '';
    this.alert.color = '';
  }

}
