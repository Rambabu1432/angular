import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ekar.component',
 imports:[CommonModule],
  templateUrl: './ekar.component.html',
  styleUrl: './ekar.component.css'
})
export class EkarComponent {
  ekartproducts = [
    {mobile:'vivo',
      brand:'vivo brand',
      ram:'32gb'
    }
  ]

}
