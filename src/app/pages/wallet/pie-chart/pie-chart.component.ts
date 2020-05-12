import { Component, OnInit } from '@angular/core';
import {Label} from 'ng2-charts';
import {ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

    // Pie
    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'top',
        }
    };
    public pieChartLabels: Label[] = ['Sport', 'Clothing', 'Food'];
    public pieChartData: number[] = [300, 500, 1000];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartColors = [
        {
            backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
    ];

    constructor() { }

    ngOnInit() {
    }
}
