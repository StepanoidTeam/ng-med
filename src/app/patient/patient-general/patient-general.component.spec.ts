import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGeneralComponent } from './patient-general.component';

describe('PatientGeneralComponent', () => {
  let component: PatientGeneralComponent;
  let fixture: ComponentFixture<PatientGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
