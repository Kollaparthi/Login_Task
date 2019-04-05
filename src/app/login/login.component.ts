import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails; error;
  ume; password;
  constructor(private router: Router) { }
login() {
  for (let i = 0; i < this.userDetails.length; i++) {
    if ((this.ume === this.userDetails[i].Username || this.ume === this.userDetails[i].Email ||
        this.ume === this.userDetails[i].Mblno) && this.password === this.userDetails[i].Password ) {
      this.router.navigate(['/userdetails/', this.userDetails[i].Mblno]);

    } else {
      this.error = 'Invalid Credentials';
    }
  }

}
  ngOnInit() {
this.userDetails = JSON.parse(localStorage.getItem('userdetails') || '[]');
// alert(this.userDetails.length);
  }

}
