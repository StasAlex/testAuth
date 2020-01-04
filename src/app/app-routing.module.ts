import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthInService, AuthOutService
} from './services/auth.service';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthOutService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthInService]
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
