import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProtocolComponent } from './cad-protocol.component';

describe('CadProtocolComponent', () => {
  let component: CadProtocolComponent;
  let fixture: ComponentFixture<CadProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadProtocolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
