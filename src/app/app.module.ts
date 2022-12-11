import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { EmailSendComponent } from './components/email-send/email-send.component';
import { LoginComponent } from './components/login/login.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePasswordComponent,
    EmailSendComponent,
    LoginComponent,
    ManageAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
