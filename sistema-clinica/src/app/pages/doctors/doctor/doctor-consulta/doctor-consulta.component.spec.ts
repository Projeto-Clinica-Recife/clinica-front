import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConsultaComponent } from './doctor-consulta.component';

describe('DoctorConsultaComponent', () => {
  let component: DoctorConsultaComponent;
  let fixture: ComponentFixture<DoctorConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
