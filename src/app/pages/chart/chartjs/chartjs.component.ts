import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';


import { lineAreaChart, pieChart, donutChart, radarChart, polarChart } from './data';
// const lineBarChart: ChartType = {
//   labels: [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July'
//   ],
//   datasets: [
//       {
//           label: 'Sales Analytics',
//           backgroundColor: 'rgba(52, 195, 143, 0.8)',
//           borderColor: 'rgba(52, 195, 143, 0.8)',
//           borderWidth: 1,
//           hoverBackgroundColor: 'rgba(52, 195, 143, 0.9)',
//           hoverBorderColor: 'rgba(52, 195, 143, 0.9)',
//           data: [65, 59, 81, 45, 56, 80, 50, 20],
//           barPercentage: 0.4

//       },
//   ],
//   options: {
//       maintainAspectRatio: false,
//       scales: {
//           xAxes: [
//               {
//                   gridLines: {
//                       color: 'rgba(166, 176, 207, 0.1)'
//                   },
//               }
//           ],
//           yAxes: [
//               {
//                   gridLines: {
//                       color: 'rgba(166, 176, 207, 0.1)'
//                   }
//               }
//           ]
//       }
//   }
// };
@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})

/**
 * chartjs-chart component
 */
export class ChartjsComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'pie';
 
  lstNbr:number[];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Series A' },

  ];
  list:any[]=[]
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Line Chart
  lineAreaChart: ChartType;
  // Bar Chart
  lineBarChart: ChartType;
  // Pie Chart
  pieChart: ChartType;
  // Donut Chart
  donutChart: ChartType;
  // Polar area Chart
  ScatterChart: ChartType;
  // Radar Chart
  radarChart: ChartType;
  // polarChart
  polarChart: ChartType;

  constructor(private serv :ChartService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Charts' }, { label: 'Chartjs chart', active: true }];

   /**
    * Fetches the data
    */
    
  }
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end',
  //       font: {
  //         size: 20,
  //       }
  //     }
  //   }
  // };
  lineChartColors: Color[] = [
    {
      borderColor: ['#556ee6', '#34c38f'],
      backgroundColor: ['#556ee6', '#34c38f'],
    },
  ];
  /**
   * Fetch chart's data
   */
  // private _fetchData() {
  //   // Line Chart data
  //   this.lineAreaChart = lineAreaChart;
  //   // Bar Chart data
  //   this.lineBarChart = lineBarChart;
  //   // Pie Chart data
  //   this.pieChart = pieChart;
  //   // Donut Chart
  //   this.donutChart = donutChart;

  //   // Radar Chart data
  //   this.radarChart = radarChart;
  //   // Financial Report
  //   this.polarChart = polarChart;
  // }
  onSelect(event:any){
  this.barChartLabels=[]
    this.lstNbr=[]

    this.serv.GetAbsantiesmeBySexe(event.target.value).subscribe((data:Object[])=>{
      
     this.list=data
     console.log(this.list)
      data.forEach(element => {

        this.lstNbr.push(element["d"]);
        this.barChartLabels.push(element["sexe"]);



      });
       this.barChartData=[
         { data: this.lstNbr,
            label: 'Nombre de jour de congé' },
       ]
    })
  


  }
  
}
