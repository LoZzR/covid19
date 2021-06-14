import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppConfig } from '../app.config';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private static API_ENDPOINT_PATIENTS = AppConfig.API_ENDPOINT + 'patients';

  constructor(private http: HttpClient) { }

  addShop(patient: Patient){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.post<Patient>(PatientService.API_ENDPOINT_PATIENTS,Patient, options).subscribe();
  }
}
