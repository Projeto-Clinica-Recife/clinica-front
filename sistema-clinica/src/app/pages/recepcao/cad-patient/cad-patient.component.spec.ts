import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPatientComponent } from './cad-patient.component';

describe('CadPatientComponent', () => {
  let component: CadPatientComponent;
  let fixture: ComponentFixture<CadPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
