import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() onDetail: EventEmitter<any> = new EventEmitter();

  productList: Product[] = []


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  openDetail(id:number) {
    this.onDetail.emit(id);
  }
  fetchProducts() {
    this.productService.getAllProducts().subscribe((response) => { this.productList = response });
  }
}
