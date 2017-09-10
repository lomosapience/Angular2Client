import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersService } from './services/users/users.service';
import { LoginComponent } from './components/login/login.component';
import {MaterialModule, MdButtonModule} from '@angular/material';
import {LoginService} from './services/login/login.service';
import {Config} from './services/config/config.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import {MainModule} from './components/main/main.module';
import {AuthProviders, Routing} from './app.routes';
import { VoiceComponent } from './components/voice/voice.component';
import { PollyComponent } from './components/polly/polly.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    UsersComponent,
    VoiceComponent,
    PollyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MainModule,
    AuthProviders,
    Routing
  ],
  providers: [ LoginService, UsersService, Config ],
  bootstrap: [AppComponent]
})
export class AppModule { }
