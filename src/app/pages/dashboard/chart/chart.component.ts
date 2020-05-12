import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    lineChartData: ChartDataSets[] = [
        { data: [12022, 29429, 155, 1653, 100], label: 'Earns by Purchase' },
    ];

    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May'];

    lineChartOptions = {
        responsive: true,
    };

    lineChartColors: Color[] = [
        {
            borderColor: '#000',
            backgroundColor: 'rgba(241, 142, 155, 0.5)',
        },
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
