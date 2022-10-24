import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private myapi:ApiService) { }
  email_id=""
  password=""
  readValue=()=>{
    let data={
      "email_id":this.email_id,
      "password":this.password
    }
    console.log(data)
   
  }

  ngOnInit(): void {
  }

}
