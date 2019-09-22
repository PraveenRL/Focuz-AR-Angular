import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AboutBrideComponent } from './about-bride/about-bride.component';
import { AboutBrideSelectedComponent } from './about-bride-selected/about-bride-selected.component';
import { OnemoreThingComponent } from './onemore-thing/onemore-thing.component';
import { PlanYourBudgetComponent } from './plan-your-budget/plan-your-budget.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { WhenWeddingComponent } from './when-wedding/when-wedding.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutBrideComponent,
    AboutBrideSelectedComponent,
    OnemoreThingComponent,
    PlanYourBudgetComponent,
    ResetPasswordComponent,
    VerifyOtpComponent,
    WhenWeddingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
