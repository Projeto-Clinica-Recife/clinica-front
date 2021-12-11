import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsReceptionComponent } from './settings-reception.component';

describe('SettingsComponent', () => {
  let component: SettingsReceptionComponent;
  let fixture: ComponentFixture<SettingsReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
