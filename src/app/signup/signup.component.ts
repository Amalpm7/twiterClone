import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  dob=""
  phone=""
  place=""
  email_id=""
  password=""
  confirm_password=""


  readValue=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phone":this.phone,
      "email_id":this.email_id,
      "password":this.password,
      
    }
    console.log(data)
    this.myapi.addUser(data).subscribe(
      (resp)=>{
        alert("REGISTERED")
      }
    )
    this.name="",
    this.dob="",
    this.phone,
    this.place,
    this.email_id,
    this.password,
    this.confirm_password
    
  }


  ngOnInit(): void {
  }

}
