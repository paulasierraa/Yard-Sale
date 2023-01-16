import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() onDetail: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openDetail()
  {
    this.onDetail.emit();
  }
}
