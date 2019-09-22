import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBrideComponent } from './about-bride.component';

describe('AboutBrideComponent', () => {
  let component: AboutBrideComponent;
  let fixture: ComponentFixture<AboutBrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
