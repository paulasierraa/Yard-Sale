import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
