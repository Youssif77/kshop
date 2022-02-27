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
import { ProductsListComponent } from './components/home/products-list/products-list.component';
import { ProductItemComponent } from './components/home/product-item/product-item.component';
import { CustomCurrencyPipe } from './shared/pipes/custom-currency.pipe';
import { WatchedProductItemComponent } from './components/home/watched-product-item/watched-product-item.component';
import { WatchedProductListComponent } from './components/home/watched-product-list/watched-product-list.component';

registerLocaleData(ar);

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, ProductsListComponent, ProductItemComponent, CustomCurrencyPipe, WatchedProductItemComponent, WatchedProductListComponent],
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
