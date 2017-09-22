import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-patient-family-member',
  templateUrl: './patient-family-member.component.html',
  styleUrls: ['./patient-family-member.component.css']
})
export class PatientFamilyMemberComponent implements OnInit {

  relations = ['father', 'mother', 'brother', 'sister', 'son', 'daughter'];

  constructor(public dialogRef: MdDialogRef<PatientFamilyMemberComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
