import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from '../../patient.model';

import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  @ViewChild('f', { static: false }) patientForm: NgForm;

  constructor(private patientService: PatientService) { }
  ngOnInit() {
  }

  onSubmit(f) {
    const value = f.value;
    const patient = new Patient(value.lastName, value.firstName, value.cin, value.birthday, value.sex, value.phone, value.adresse);
    this.patientService.addShop(patient);
  }

}
