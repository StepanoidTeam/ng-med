import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {MdDialog} from '@angular/material';
import {PatientFamilyMemberComponent} from '../patient-family-member/patient-family-member.component';

@Component({
  selector: 'app-patient-family',
  templateUrl: './patient-family.component.html',
  styleUrls: ['./patient-family.component.css']
})
export class PatientFamilyComponent implements OnInit {

  displayedColumns = [
    'name', 'relation', 'email', 'phone','action'];
  dataSource = new ExampleDataSource();


  constructor(public dialog: MdDialog) {

  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PatientFamilyMemberComponent, {
      // width: '250px',
      data: data[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      // todo: something
    });
  }
}

export interface FamilyRow {
  name: string;
  relation: string;
  email: string;
  phone: string;
}

const data: FamilyRow[] = [
  {
    name: 'John Smith',
    relation: 'brother',
    email: 'jsmith@mail.ro',
    phone: '+1435345234242',
  },
  {
    name: 'Mark Twen',
    relation: 'father',
    email: 'mtwen@ya.ro',
    phone: '+1438796754634',
  },
  {
    name: 'John Travolta',
    relation: 'uncle',
    email: 'jtrav@goo.ro',
    phone: '+1433242343243',
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
  connect(): Observable<FamilyRow[]> {
    return Observable.of(data);
  }

  disconnect() {
  }
}
