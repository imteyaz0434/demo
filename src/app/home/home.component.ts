import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../services/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response:any;
 currentData:any;
 
  constructor(public reqService:ServiceService) { }

  ngOnInit() {
    this.reqService.getlist().subscribe(response =>{
      this.response =response; 
    });
  }
  onNewData(response){
    this.response.unshift(response);
  }
  editdata(post){
    //console.log(post);
  this.currentData=post;
  }
}
