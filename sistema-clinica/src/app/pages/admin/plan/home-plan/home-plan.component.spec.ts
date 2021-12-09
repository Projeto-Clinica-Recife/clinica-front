import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlanComponent } from './home-plan.component';

describe('HomePlanComponent', () => {
  let component: HomePlanComponent;
  let fixture: ComponentFixture<HomePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
