import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
