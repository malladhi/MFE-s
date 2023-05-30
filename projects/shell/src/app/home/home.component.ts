import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  login_details : any = [];
  constructor(private homeService : HomeService) {
    this.loginForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)])
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.login_details.push(this.loginForm.value);
      const customEvent = new CustomEvent('test', { detail: { data: this.login_details } });
      window.dispatchEvent(customEvent);
      this.homeService.setEmploeesData(this.login_details);
      console.log("form_vals",this.login_details); 
      this.loginForm.reset();     
      console.log(this._v());
    }
  }

  _v() {
    return this.loginForm.value;
  }
  get mobile() {
    return this.loginForm.get("mobile");
  } 

  ngOnInit() {
  }

}
