import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WebsiteComponent } from "../website-component";

@Component({
  selector: 'app-filter-component',

  templateUrl: './filter-component.html',
  styleUrls: ['./filter-component.css'],
  imports: [WebsiteComponent]
})
export class FilterComponent { 
  totalItemList:number = 0
  Instocklist:number = 0
  OutstockList:number = 0


}
