import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  form: any = {};

  constructor() { }
  ngOnInit() {
  }

  onSubmit() {
    /*this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        if(err.error !== undefined && err.error.message !== undefined) this.errorMessage = err.error.message;
        else this.errorMessage = err;
        this.isSignUpFailed = true;
      }
    );*/
  }

}
