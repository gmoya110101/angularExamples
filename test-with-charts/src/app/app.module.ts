import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestChartComponent } from './test-chart/test-chart.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { OtroComponent } from './otro/otro.component';

@NgModule({
  declarations: [
    AppComponent,
    TestChartComponent,
    MenuComponent,
    OtroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
