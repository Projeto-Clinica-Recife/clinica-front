import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss']
})
export class ContractFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  formContract!: FormGroup;

  ngOnInit(): void {
    this.formContract = this.formBuilder.group({
      plan: [null],
      data_inicio: [null],
      data_fim: [null],
      protocols: [null]
    });
  }

  generateContract(){

  }

}
