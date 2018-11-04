import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Http } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
