import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenWeddingComponent } from './when-wedding.component';

describe('WhenWeddingComponent', () => {
  let component: WhenWeddingComponent;
  let fixture: ComponentFixture<WhenWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
