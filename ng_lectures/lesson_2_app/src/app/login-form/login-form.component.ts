import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../validators/custom.validators";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup(
    {'creds': new FormGroup(

        {
          'email': new FormControl('', [Validators.email, Validators.required], [CustomValidators.checkAvailability]),
          'password': new FormControl('', [Validators.required, CustomValidators.canNotStartWthHash])
        }
      )}
  );

  get email() {
    return this.loginForm.get('email')
  }

  constructor() {
    // this.loginForm = new FormGroup(
    //   {
    //     'email': new FormControl(''),
    //     'password': new FormControl('')
    //   }
    // )
  }

  ngOnInit(): void {
  }

  performLogin(){
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }

}
