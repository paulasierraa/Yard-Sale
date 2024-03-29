import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayDetail: boolean = false;
  displayShoppingCart: boolean = false;
  showMenu: boolean = false;

  //productDetail
  productId: number = -1;
  constructor() { }

  ngOnInit(): void {
  }
  openDetail(productId) {
    this.productId = productId;
    this.displayDetail = true;
  }
  closeDetail() {
    this.displayDetail = false;
  }
  openShoppingCart() {
    this.displayShoppingCart = true;
  }
  closeShoppingCart() {
    this.displayShoppingCart = false;
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
