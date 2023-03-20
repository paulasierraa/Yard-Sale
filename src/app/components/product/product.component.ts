import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Product;
  @Output() onDetail: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  openDetailProduct(product:Product)
  {
    this.onDetail.emit(product.id);
  }
}
