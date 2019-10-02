import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login = {};
  constructor(public route:Router) { }

  ngOnInit() {
  }

  getlogin(){
  console.log(this.login);
  alert("Login done");
  this.route.navigateByUrl('/home');


  }

}
