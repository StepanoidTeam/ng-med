import { Component, OnInit } from '@angular/core';

interface NavTab {
  label: string;
  link: string;
}

@Component({
  selector: 'app-patient-new',
  templateUrl: './patient-new.component.html',
  styleUrls: ['./patient-new.component.css']
})
export class PatientNewComponent implements OnInit {

  navTabs: NavTab[] = [
    {
      label: 'General Info',
      link: 'general',
    },
    {
      label: 'Family',
      link: 'family',
    }];

  constructor() { }

  ngOnInit() {
  }

}
