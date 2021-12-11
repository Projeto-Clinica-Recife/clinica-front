import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProtocolComponent } from './home-protocol.component';

describe('HomeProtocolComponent', () => {
  let component: HomeProtocolComponent;
  let fixture: ComponentFixture<HomeProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProtocolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
