import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeDetail()
  {
    this.onClose.emit();
  }
}
