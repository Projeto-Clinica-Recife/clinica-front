import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFinanceiroComponent } from './doctor-financeiro.component';

describe('DoctorFinanceiroComponent', () => {
  let component: DoctorFinanceiroComponent;
  let fixture: ComponentFixture<DoctorFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
