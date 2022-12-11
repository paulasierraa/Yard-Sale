import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { EmailSendComponent } from './components/email-send/email-send.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePasswordComponent,
    EmailSendComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
