import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBrideSelectedComponent } from './about-bride-selected.component';

describe('AboutBrideSelectedComponent', () => {
  let component: AboutBrideSelectedComponent;
  let fixture: ComponentFixture<AboutBrideSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBrideSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBrideSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
