import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
username; name; email; password; cnfmpassword; mblno; address;  userDetails = [];
signupForm: FormGroup; registerForm: FormGroup;  submitted = false;


  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    localStorage.clear();
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
      mobilenumber: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(30)]]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.userDetails.push({
      Username :  this.username,
      Name : this.name,
      Email : this.email,
      Password : this.password,
      Cnfmpassword : this.cnfmpassword,
      Mblno : this.mblno,
      Address : this.address
    });
        localStorage.setItem('userdetails', JSON.stringify(this.userDetails));

        alert('Successfully registered');
    }

}
