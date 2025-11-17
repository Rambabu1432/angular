import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';

@Component({   
  selector: 'app-middle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './middle-component.html',
  styleUrls: ['./middle-component.css'],

})
export class MiddleComponent  {
  router:Router=inject(Router);
  shoes = [
    { name: 'Woodland Camel Leather Boots', price: 4999, image: '/assets/image/woodland-men-olive-green-shoes-product-images-469458075_green-0-202312061449.webp', description: 'Durable leather boots for trekking and adventure.' },
    { name: 'Woodland Olive Casual Sneakers', price: 3599, image: 'assets/shoes/sneaker1.jpg', description: 'Comfortable sneakers for everyday wear.' },
    { name: 'Woodland Brown Trekking Shoes', price: 5499, image: 'assets/shoes/trek1.jpg', description: 'Perfect for hiking with anti-slip grip.' },
    { name: 'Woodland Black Leather Loafers', price: 4299, image: 'assets/shoes/loafers.jpg', description: 'Classic style with comfort and elegance.' },
    { name: 'Woodland Khaki High Ankle Boots', price: 5999, image: 'assets/shoes/highankle.jpg', description: 'Sturdy boots designed for outdoor trails.' },
    { name: 'Woodland Tan Outdoor Sandals', price: 2899, image: 'assets/shoes/sandals.jpg', description: 'Lightweight sandals for rough terrain.' },
    { name: 'Woodland Grey Running Shoes', price: 3899, image: 'assets/shoes/running.jpg', description: 'Stylish and durable running shoes.' },
    { name: 'Woodland Leather Slip-ons', price: 3399, image: 'assets/shoes/slipon.jpg', description: 'Easy to wear, soft and durable leather.' },
    { name: 'Woodland Suede Desert Boots', price: 4699, image: 'assets/shoes/desert.jpg', description: 'Smart casual suede boots for daily use.' },
    { name: 'Woodland Eco Trek Boots', price: 5799, image: 'assets/shoes/eco.jpg', description: 'Eco-friendly boots made from recycled materials.' },
     { name: 'Woodland Black Leather Loafers', price: 4299, image: 'assets/shoes/loafers.jpg', description: 'Classic style with comfort and elegance.' },
    { name: 'Woodland Khaki High Ankle Boots', price: 5999, image: 'assets/image/8.webp', description: 'Sturdy boots designed for outdoor trails.' },
    {second:'ram'}

  ];

  filtertodirect(){
    this.router.navigate(['filter']);
  }
}
