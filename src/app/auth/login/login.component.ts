import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.router.navigate(['sejours']);
      },
      err => {
        if(err.error !== undefined && err.error.message !== undefined) this.errorMessage = err.error.message;
        else this.errorMessage = err;
        this.isLoginFailed = true;
      }
    );
  }
}

