import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {

  public lineChartData: any =  {
    chartType: 'LineChart',
    dataTable: [
      ['Date', 'Value'],
      [new Date(1797, 2, 4),  100],
      [new Date(1797, 2, 5),  170],
      [new Date(1797, 2, 6),  60],
      [new Date(1797, 2, 7),  130]
    ],
    // options: {title: 'Company Performance'}
  };

  constructor() { }

  ngOnInit() {
  }

}
