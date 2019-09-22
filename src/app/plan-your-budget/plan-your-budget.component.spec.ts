import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanYourBudgetComponent } from './plan-your-budget.component';

describe('PlanYourBudgetComponent', () => {
  let component: PlanYourBudgetComponent;
  let fixture: ComponentFixture<PlanYourBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanYourBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanYourBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
