import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: FormGroup;
   
    constructor(private fb:FormBuilder) {
        this.createForm();
    }

    createForm = () => {
      this.user = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }

    getErrorMessage = () => {
      if(this.user.get('email').hasError('required')) {
        return 'PLease enter email';
      } else if (this.user.get('email').hasError('email')) {
        return 'PLease enter valid email';
      }
    }

    onSubmit = ()=> { 
      console.log(this.user.value);
      console.log(this.user.valid);
    }

  }
