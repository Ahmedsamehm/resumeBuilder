import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { LoginComponent } from './login-component/login-component';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { CreateCvComponent } from './create-cv-component/create-cv-component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
   { path: 'create-cv', component: CreateCvComponent},
 
 

  { path: '**', redirectTo: '' }  //for the wrong pass
];
