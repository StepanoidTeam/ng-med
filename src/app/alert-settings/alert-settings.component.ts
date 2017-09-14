import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DataSource} from "@angular/cdk/collections";

@Component({
  selector: 'app-alert-settings',
  templateUrl: './alert-settings.component.html',
  styleUrls: ['./alert-settings.component.css']
})
export class AlertSettingsComponent implements OnInit {

  displayedColumns = ['fullName', 'providers', 'patientSelector', 'action'];
  dataSource = new ExampleDataSource();


  constructor() {
  }

  ngOnInit() {
  }

}

export interface AlertRow {
  fullName: string;
  providers: string;
  patientSelector: string;
}

const data: AlertRow[] = [
  {
    fullName: 'John Smith',
    providers: 'E-mail, SMS',
    patientSelector: 'Branch: Pharmacy',
  },
  {
    fullName: 'Angelina Joli',
    providers: 'SMS',
    patientSelector: 'All Patients',
  },
  {
    fullName: 'Brad Pit',
    providers: 'E-mail',
    patientSelector: 'Facility: Primary healthcare',
  },

];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<AlertRow[]> {
    return Observable.of(data);
  }

  disconnect() {
  }
}
