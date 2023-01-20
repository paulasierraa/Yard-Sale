import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onOpen:EventEmitter<any> = new EventEmitter();
  @Output() onToggleSidebar:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  openShoppingCart()
  {
    this.onOpen.emit();
  }
  toggleSidebar()
  {
    this.onToggleSidebar.emit();
  }

}
