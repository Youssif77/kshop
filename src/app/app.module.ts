import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import ar from '@angular/common/locales/ar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ar_EG } from 'ng-zorro-antd/i18n';

import { AppRoutingModule } from './app-routing.module';
import { ZorroModule } from './zorro.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

registerLocaleData(ar);

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZorroModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ar_EG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
