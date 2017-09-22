import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  displayedColumns = [
    'name', 'bloodPressure', 'heartRate', 'weight', 'oxygenLevel', 'lastAlert', 'batteryLevel',
    'currentDeviceLocation', 'isActive', 'action'];
  dataSource = new ExampleDataSource();

  @ViewChild('filter') filter: ElementRef;

  constructor() {
  }

  ngOnInit() {
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        // if (!this.dataSource) { return; }
        // this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export interface PatientRow {
  name: string;
  bloodPressure: string;
  heartRate: string;
  weight: string;
  oxygenLevel: string;
  lastAlert: string;
  batteryLevel: number;
  currentDeviceLocation: string;
  isActive: boolean;
}

const data: PatientRow[] = [
  {
    name: 'John Smith',
    bloodPressure: '320/240',
    heartRate: '54',
    weight: '43',
    oxygenLevel: '43',
    lastAlert: '9/6/2017 1:33 pm',
    batteryLevel: 76,
    currentDeviceLocation: 'room A',
    isActive: true
  },
  {
    name: 'Mark Twen',
    bloodPressure: '640/480',
    heartRate: '74',
    weight: '67',
    oxygenLevel: '19',
    lastAlert: '9/6/2017 12:44 pm',
    batteryLevel: 88,
    currentDeviceLocation: 'room B',
    isActive: false
  },
  {
    name: 'John Travolta',
    bloodPressure: '800/600',
    heartRate: '73',
    weight: '81',
    oxygenLevel: '46',
    lastAlert: '9/6/2017 11:22 pm',
    batteryLevel: 20,
    currentDeviceLocation: 'room C',
    isActive: false
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
  connect(): Observable<PatientRow[]> {
    return Observable.of(data);
  }

  disconnect() {
  }
}
