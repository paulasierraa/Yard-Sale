import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() onDetail: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  openDetailProduct()
  {
    this.onDetail.emit();
  }
}
