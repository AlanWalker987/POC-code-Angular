import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3LineChartComponent } from './d3-line-chart/d3-line-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { D3SliderBarComponent } from './d3-slider-bar/d3-slider-bar.component';

const routes: Routes = [
  { path : "chart-line" , component: LineChartComponent},
  { path : "d3-line", component: D3LineChartComponent},
  { path : "d3-slider", component:D3SliderBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
