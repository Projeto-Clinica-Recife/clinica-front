import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProtocolsComponent } from './list-protocols.component';

describe('ListProtocolsComponent', () => {
  let component: ListProtocolsComponent;
  let fixture: ComponentFixture<ListProtocolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProtocolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
