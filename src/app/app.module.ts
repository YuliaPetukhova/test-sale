import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimerComponent} from './components/timer/timer.component';
import { SaleComponent } from './components/sale/sale.component';
import { RatesItemComponent } from './components/sale/rates-item/rates-item.component';
import { InfoComponent } from './components/sale/info/info.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    SaleComponent,
    RatesItemComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
