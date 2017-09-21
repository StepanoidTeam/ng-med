import {Component, OnInit} from "@angular/core";

interface NavTab {
  label: string;
  link: string;
}

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {


  navTabs: NavTab[] = [
    {
      label: 'General Info',
      link: 'general',
    },
    {
      label: 'Pendant',
      link: 'pendant',
    },
    {
      label: 'History',
      link: 'history',
    },
    {
      label: 'Family',
      link: 'family',
    }];

  constructor() {
  }

  ngOnInit() {
  }


}
