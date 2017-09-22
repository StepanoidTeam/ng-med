import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {DataSource} from "@angular/cdk/collections";
import "rxjs/add/observable/of";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/startWith";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/observable/fromEvent";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns = ['name', 'role', 'email', 'phone', 'branch', 'facility', 'active', 'action'];
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

export interface UserRow {
  name: string;
  role: string;
  email: string;
  phone: string;
  branch: string;
  facility: string;
  active: boolean;
}

const data: UserRow[] = [
  {
    name: 'John Smith',
    role: 'Nurse',
    email: 'K.Smith@gmail.com',
    phone: '(541)-744-3010',
    branch: 'dentistry',
    facility: 'Acute care',
    active: true,
  },
  {
    name: 'Angelina Joli',
    role: 'Neurosurgeon',
    email: 'Angelina@gmail.com',
    phone: '(341)-744-3010',
    branch: 'immunology',
    facility: 'Isolation ward',
    active: false,
  },
  {
    name: 'Brad Pit',
    role: 'Cardiologist',
    email: 'Brad@gmail.com',
    phone: '(941)-744-3010',
    branch: 'urology',
    facility: 'Primary healthcare',
    active: true,
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
  connect(): Observable<UserRow[]> {
    return Observable.of(data);
  }

  disconnect() {
  }
}
