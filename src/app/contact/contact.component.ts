import { Component, OnInit,EventEmitter,Output ,Input} from '@angular/core';
import {ServiceService } from '../services/service.service';


@Component({   
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
data={
  id:'',
  title:'',
  body:''
};

@Output() emmitData = new EventEmitter();
@Input() currentData = this.data;
 
  constructor(public reqService:ServiceService) { }

  ngOnInit() {
  }
  addlist(){
    this.reqService.postlist(this.data).subscribe(response =>{
      console.log(response);
      this.emmitData.emit(response);
    });
  }
}
