import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { D3LineChartComponent } from './d3-line-chart/d3-line-chart.component';
import { D3HorizontalBarComponent } from './d3-horizontal-bar/d3-horizontal-bar.component';
import { D3SliderBarComponent } from './d3-slider-bar/d3-slider-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    D3LineChartComponent,
    D3HorizontalBarComponent,
    D3SliderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
