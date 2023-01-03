import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  @Input() isShoppingCart:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
