import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHistoricComponent } from './patient-historic.component';

describe('PatientHistoricComponent', () => {
  let component: PatientHistoricComponent;
  let fixture: ComponentFixture<PatientHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHistoricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
