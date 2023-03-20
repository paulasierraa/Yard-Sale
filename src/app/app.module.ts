import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { EmailSendComponent } from './components/email-send/email-send.component';
import { LoginComponent } from './components/login/login.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MainComponent } from './components/main/main.component';
import { ToggleMenuComponent } from './components/toggle-menu/toggle-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrderProductComponent } from './components/order-product/order-product.component';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorImageDirective } from './core/directives/error-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreatePasswordComponent,
    EmailSendComponent,
    LoginComponent,
    ManageAccountComponent,
    EditAccountComponent,
    ProductComponent,
    ProductListComponent,
    MainComponent,
    ToggleMenuComponent,
    SidebarComponent,
    OrderProductComponent,
    OrderComponent,
    OrdersComponent,
    NavbarComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ErrorImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
