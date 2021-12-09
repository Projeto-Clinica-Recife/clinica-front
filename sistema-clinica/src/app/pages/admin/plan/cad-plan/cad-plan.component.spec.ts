import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPlanComponent } from './cad-plan.component';

describe('CadPlanComponent', () => {
  let component: CadPlanComponent;
  let fixture: ComponentFixture<CadPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
