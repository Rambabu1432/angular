import { NgPlural } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  baseapi = 'https://jsonplaceholder.typicode.com/posts'
 

  constructor(private http:HttpClient){}

  fetchdata(){
    this.http.get(this.baseapi).subscribe((data)=>{
      console.log(data)
    }); 




  }


adduser(data:any){
  return this.http.post('https://jsonplaceholder.typicode.com/posts',data)
}


  }


