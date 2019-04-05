import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
Username; Name; Email; Password; Cnfmpassword; Mobileno; Address; user = []; userDetails;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const mblnumber = this.route.snapshot.paramMap.get('mblno');
    this.userDetails = JSON.parse(localStorage.getItem('userdetails') || '[]');
    for (let i = 0; i < this.userDetails.length; i++) {
      if (mblnumber === this.userDetails[i].Mblno ) {
        this.user.push({
          Username : this.userDetails[i].Username,
          Name : this.userDetails[i].Name,
          Email : this.userDetails[i].Email,
          Password : this.userDetails[i].Password,
          Cnfmpassword : this.userDetails[i].Cnfmpassword,
          Mobileno : this.userDetails[i].Mblno,
          Address : this.userDetails[i].Address
        });


      }
    }
  }

}
