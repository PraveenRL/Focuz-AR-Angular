import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutBrideComponent } from './about-bride/about-bride.component';
import { AboutBrideSelectedComponent } from './about-bride-selected/about-bride-selected.component';
import { OnemoreThingComponent } from './onemore-thing/onemore-thing.component';
import { PlanYourBudgetComponent } from './plan-your-budget/plan-your-budget.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { WhenWeddingComponent } from './when-wedding/when-wedding.component';

 const routes: Routes = [
   { path: '', redirectTo: 'register', pathMatch: 'full' },
   { path: 'register', component: RegisterComponent },
   { path: 'login', component: LoginComponent },
   { path: 'about', component: AboutBrideComponent },
   { path: 'selected', component: AboutBrideSelectedComponent },
   { path: 'onemore', component: OnemoreThingComponent },
   { path: 'plan', component: PlanYourBudgetComponent },
   { path: 'resetpassword', component: ResetPasswordComponent },
   { path: 'verifyotp', component: VerifyOtpComponent },
   { path: 'whenwedding', component: WhenWeddingComponent },
  
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 