import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Output() onClose:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  closeShoppingCart()
  {
    this.onClose.emit();
  }
}
