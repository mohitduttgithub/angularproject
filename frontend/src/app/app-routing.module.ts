import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShareComponent } from './share/share.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:ShareComponent,
  children: [
  
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'users', component:UsersComponent},
  
],
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
