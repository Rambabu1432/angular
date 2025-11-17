import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api-service';



@Component({
  selector: 'app-api-testing',
  templateUrl: './api-testing.html',
  styleUrl: './api-testing.css',
  imports: [CommonModule]
})
export class ApiTesting  {


  product:any;
  

  constructor(private http:HttpClient){}

  getdetails(){
    return this.http.get('https://fakestoreapi.com/products')
  }





  }










