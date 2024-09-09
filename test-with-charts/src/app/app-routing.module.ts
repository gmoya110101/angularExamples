import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestChartComponent } from './test-chart/test-chart.component';
import { OtroComponent } from './otro/otro.component';


const routes: Routes = [
  {path: 'first_chart', component: TestChartComponent},
  {path: 'second_chart', component: OtroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
