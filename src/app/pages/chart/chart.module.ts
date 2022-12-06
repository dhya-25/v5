import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { NgxChartistModule } from 'ngx-chartist';
import { NgxEchartsModule } from 'ngx-echarts';

import { UIModule } from '../../shared/ui/ui.module';
import { ChartRoutingModule } from './chart-routing.module';

import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { EchartComponent } from './echart/echart.component';
import { AbsantiesmeByLibComponent } from './chartjs/absantiesme-by-lib/absantiesme-by-lib.component';
import { DepartDefinitiveComponent } from './chartjs/depart-definitive/depart-definitive.component';
import { EntreSortieComponent } from './chartjs/entre-sortie/entre-sortie.component';

@NgModule({
  declarations: [ApexComponent, ChartjsComponent, ChartistComponent, EchartComponent, AbsantiesmeByLibComponent, DepartDefinitiveComponent, EntreSortieComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    UIModule,
    NgApexchartsModule,
    ChartsModule,
    NgxChartistModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class ChartModule { }
