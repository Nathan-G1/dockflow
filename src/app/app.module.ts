import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { HttpClientModule } from '@angular/common/http';
import { MonthPipe } from './month.pipe';

@NgModule({
  declarations: [AppComponent, ShipmentComponent, MonthPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
