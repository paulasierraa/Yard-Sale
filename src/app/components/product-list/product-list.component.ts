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
  limit: number = 10;
  offset = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts(this.limit, this.offset);
  }

  openDetail(id: number) {
    this.onDetail.emit(id);
  }
  fetchProducts(limit: number, offset: number) {
    this.productService.getProductsByPage(limit, offset)
      .subscribe((response) => { this.productList = this.productList.concat(response) });
  }
  loadMore() {
    this.offset += this.limit;
    this.fetchProducts(this.limit, this.offset);
  }
}
