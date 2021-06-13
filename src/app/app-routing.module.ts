import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { SejoursListComponent } from './sejours/sejours-list/sejours-list.component';
import { AuthGuard } from './auth/services/auth.guard';
import { EditPatientComponent } from './patients/patient/edit-patient/edit-patient.component';

const routes: Routes = [
  {
    path: 'login', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '', redirectTo: 'sejours', pathMatch: 'full'
  },
  {
    path: 'sejours', component: SejoursListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'patient', component: EditPatientComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
