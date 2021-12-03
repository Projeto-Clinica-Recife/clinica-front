import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoViewComponent } from './medico-view.component';

describe('MedicoViewComponent', () => {
  let component: MedicoViewComponent;
  let fixture: ComponentFixture<MedicoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
