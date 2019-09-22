import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemoreThingComponent } from './onemore-thing.component';

describe('OnemoreThingComponent', () => {
  let component: OnemoreThingComponent;
  let fixture: ComponentFixture<OnemoreThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnemoreThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnemoreThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
