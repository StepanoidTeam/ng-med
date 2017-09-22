import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-patient-pendant',
  templateUrl: './patient-pendant.component.html',
  styleUrls: ['./patient-pendant.component.css']
})
export class PatientPendantComponent implements OnInit {

  displayedColumns = [
    'date', 'location'];
  dataSource = new ExampleDataSource();

  batteryLevel = 100;

  get batteryColor() {
    return this.batteryLevel > 40 ? 'primary' : 'warn';
  }

  constructor() {

    setInterval(() => {
      this.batteryLevel -= 10;
      if (this.batteryLevel < 10) {
        this.batteryLevel = 100;
      }
    }, 700);

  }

  ngOnInit(): void {
  }

}

export interface PendantRow {
  date: Date;
  location: string;
}

const data: PendantRow[] = [
  {
    date: new Date(),
    location: 'Room A',
  },
  {
    date: new Date(),
    location: 'Room B',
  },
  {
    date: new Date(),
    location: 'Room C',
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
  connect(): Observable<PendantRow[]> {
    return Observable.of(data);
  }

  disconnect() {
  }
}
