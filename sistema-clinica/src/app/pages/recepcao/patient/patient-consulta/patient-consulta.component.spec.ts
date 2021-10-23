import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientConsultaComponent } from './patient-consulta.component';

describe('PatientConsultaComponent', () => {
  let component: PatientConsultaComponent;
  let fixture: ComponentFixture<PatientConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
