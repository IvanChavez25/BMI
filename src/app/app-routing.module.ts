import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login.component';
import { BmiCalculatorComponent } from './bmicalculator/bmicalculator.component';

const routes: Routes = [
  {path:'', component:LoginFormComponent},
  {path:'bmi', component:BmiCalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
