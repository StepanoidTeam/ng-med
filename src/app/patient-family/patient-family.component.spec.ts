import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFamilyComponent } from './patient-family.component';

describe('PatientFamilyComponent', () => {
  let component: PatientFamilyComponent;
  let fixture: ComponentFixture<PatientFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
