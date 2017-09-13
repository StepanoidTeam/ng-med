import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


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


  roles = ["Anesthesiologist", "Anesthesiology Fellow", "Certified Registered Nurse Anesthetist",
    "Registered Respiratory Therapist", "Anesthesiologist Assistant", "Cardiologist", "Cardiology Fellow",
    "Intensivist", "Neonatologist", "Critical Care Nurse Practitioner", "Critical Care Registered Nurse",
    "Critical Care Respiratory Therapist", "Emergency physician", "Emergency Nurse Practitioner",
    "Emergency Physician Assistant", "Flight Nurse", "Registered Nurse", "Registered Respiratory Therapist",
    "Emergency Medical Technician", "Emergency Medical Technician", "Emergency Medical Technician",
    "Emergency Medical Technician", "Emergency Medical Technician", "Endocrinologist", "Geriatrician",
    "Gerontological Nurse Practitioner", "Gastroenterologist", "Haematologist", "Medical Laboratory Technician",
    "Phlebotomist", "Nephrologist", "Neurologist", "Oncologist", "Ophthamologist", "Otolaryngologist", "Pulmonologist",
    "Pulmonology Fellow", "Registered Respiratory Therapist", "Certified Respiratory Therapist", "General practitioner",
    "Family Practice Physician", "Internist", "Family Nurse Practitioner", "Physician Assistant", "Pharmacist",
    "Neonatalologist", "Pediatrician", "Neonatal Nurse Practitioner", "Pediatric Physician Assistant",
    "Pediatric Nurse Practitioner", "Pediatric Nurse", "Pediatric Respiratory Therapist", "Podiatric Surgeon",
    "Doctor of Podiatric Medicine", "Podiatrist", "Assistant Podiatrist", "Psychiatrist", "Psychologist",
    "Psychiatric Nurse Practitioner", "Mental Health Nurse Practitioner", "Orthopedic Physician", "Physical Therapist",
    "Occupational Therapist", "Physical Therapy Assistant", "Occupational Therapy Assistant", "Orthopaedic Technologist",
    "Chiropractor", "Athletic Trainer", "Radiotherapist", "Radiologist", "Radiographer", "CT Radiographer",
    "Interventional Radiographer", "Mammographer", "Neuroradiographer", "Medical Dosimetry Technologist",
    "Radiologist Practitioner Assistant", "Reporting Radiographer", "Sonographer", "Obstetrician",
    "Women's Health Nurse Practitioner", "Nurse-Midwife", "General Doctor", "Bariatric Surgeon",
    "Cardiothoracic surgeon", "Cardiac Surgeon", "Hepatic Biliary Pancreatic Surgeon", "Neurosurgeon",
    "Podiatric Surgeon", "Urologist"];

  constructor() {

  }

  ngOnInit() {
  }

}
