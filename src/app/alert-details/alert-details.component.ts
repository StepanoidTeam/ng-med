import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {

  users = ['Jonh Smith', 'Erick Brown', 'Gabe Newel', 'Bob Kallanick'];

  alertProviders = ['SMS', 'E-Mail', 'Phone'];

  pendantEventTypes = ['Blood Pressure', 'Oxygen', 'Weight', 'Heart Rate'];

  branches = ["aetiology", "bioengineering", "biomedicine", "biomedicine", "cardiology", "chiropody",
    "cytology", "dentistry", "dietetics", "embryology", "ENT", "epidemiology", "general practice", "genetics",
    "geriatrics", "gerontology", "GP", "gynaecology", "gynecology", "haematology", "hematology", "immunology",
    "medicine", "neurology", "neuroscience", "nutrition", "obstetrics", "oncology", "orthopaedics", "orthopedics",
    "paediatrics", "pathology", "pediatrics", "pharmacology", "pharmacy", "proctology", "radiology", "rheumatology",
    "urology", "virology"];

  facilities = ["Abortion clinic", "Acute care", "Adult daycare center", "Workplace safety in healthcare settings",
    "Ambulatory care", "Clinic", "Community health center", "Community Therapeutic Care", "Day hospital", "Doctor's office",
    "Free clinic", "Guided Care", "Healing environments", "Health facility", "Hospice", "Hospital", "Hospital ship",
    "Hospital train", "In absentia health care", "Inpatient care", "Isolation ward", "Long-term acute care facility",
    "Medical home", "Medical Respite Care", "Nurse-led clinic", "Nurse-managed health center", "Nursing home care",
    "Online pharmacy", "Outpatient clinic (hospital department)", "Patient hotel", "Person-centered care", "Polyclinic",
    "Primary healthcare", "Private healthcare", "Quarantine station", "Respite care", "Sanatorium", "Sexual health clinic",
    "Shipping container clinic", "Sick bay", "Surgicenter", "Telehomecare", "Therapeutic garden", "Transitional care",
    "Transmural care", "Urgent care", "Walk-in clinic", "Xenodochium"];

  patients = ['George Brown', 'Liam Larson', 'Alan Wake'];

  constructor() {
  }

  ngOnInit() {
  }

}
