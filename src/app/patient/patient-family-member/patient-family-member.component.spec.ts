import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFamilyMemberComponent } from './patient-family-member.component';

describe('PatientFamilyMemberComponent', () => {
  let component: PatientFamilyMemberComponent;
  let fixture: ComponentFixture<PatientFamilyMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFamilyMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFamilyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
