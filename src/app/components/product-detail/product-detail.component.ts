import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Input() productId: number;

  productDetail: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }
  ngOnChanges() {
    if (this.productId&&this.productId>0) {
      this.productService.getProductById(this.productId).subscribe((productResponse) => {
        this.productDetail = productResponse;
      },
      (error)=>{
        Swal.fire({
          title:'<strong style="color: #ee3e54">Ooops..</strong>',
          text: error,
          imageUrl: '../../../assets/images/error/errorx.png',
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Error image',
          confirmButtonColor:'#ffa4c5',
          confirmButtonText: 'Aceptar'
        })
      }
      )
    }
  }
  closeDetail() {
    this.onClose.emit();
  }
}
