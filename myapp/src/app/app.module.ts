
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
registerLocaleData(localeDE);

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { InputsModule } from '@progress/kendo-angular-inputs';

import 'hammerjs';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

//services
import { AppService } from './service/app.service';
import { ListComponent } from './component/home/list/list.component';
import { AboutUsComponent } from './component/home/about-us/about-us.component';
import { SingleRadioComponent } from './component/home/list/single-radio/single-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    AboutUsComponent,
    SingleRadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxAudioPlayerModule,
    InputsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

