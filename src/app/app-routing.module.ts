import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: '', component: SignupComponent},
    {path: 'userdetails/:mblno', component: UserdetailsComponent},

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
