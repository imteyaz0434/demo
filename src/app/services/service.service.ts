import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http:HttpClient) {}

getlist():Observable<any>{
  return this.http.get(this.url);
}

postlist(data):Observable<any>{
  return this.http.post(this.url,data);
}
}
