import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  data1: any;
  
  constructor(public data:DataService,private formBuilder: FormBuilder, public routing : Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      countryCode:[''],
  });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    let value = {
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      password:this.registerForm.value.password,
      phone:this.registerForm.value.phone,
      email:this.registerForm.value.email,
      countryCode:this.registerForm.value.countryCode,
     
    }
    
    this.submitted = true;   
    if (this.registerForm.invalid) {
        return;
    }else{
        this.data.regData(value).then((res) => {
          this.data1 = res;
          this.routing.navigate(['/login']);
          console.log(res)
        })
      }
    }
}
