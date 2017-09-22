import { Component, OnInit } from '@angular/core';

interface NavTab {
  label: string;
  link: string;
}

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  navTabs: NavTab[] = [
    {
      label: 'General Info',
      link: 'general',
    },
    {
      label: 'Family',
      link: 'family',
    },
    {
      label: 'Pendant',
      link: 'pendant',
    },
    {
      label: 'History',
      link: 'history',
    }];


  constructor() { }

  ngOnInit() {
  }

}
