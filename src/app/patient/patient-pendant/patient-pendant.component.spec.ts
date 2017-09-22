import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPendantComponent } from './patient-pendant.component';

describe('PatientPendantComponent', () => {
  let component: PatientPendantComponent;
  let fixture: ComponentFixture<PatientPendantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPendantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
