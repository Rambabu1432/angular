import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api-service';
import { Observable } from 'rxjs';

import { NgModule } from '@angular/core';



@Component({
  selector: 'app-api-testing',
  templateUrl: './api-testing.html',
  styleUrl: './api-testing.css',

  imports: [CommonModule]
})
export class ApiTesting implements OnInit {
  
public requestdetail: any = [];
  data: any;
  constructor(public http:HttpClient){}
  ngOnInit(){
    
  }

  requestdetails(){
    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
    .subscribe((res)=>{
      this.requestdetail = res;
      console.log(`requestdetail`,this.requestdetail)
   
    })
    
    


  }


  





}









