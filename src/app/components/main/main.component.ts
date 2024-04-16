import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
// set the labels option to true to show the labels on the X and Y axis
      xaxis: {
        show: true,
        categories: ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75++'],
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          },
          formatter: function (value: any) {
            return  value;
          }
        }
      },
      series: [
        {
          name: "Male",
          data: [700, 477, 600, 991, 1009, 1530, 900, 1900, 1566, 3011,2700,1644, 911],
          color: "#2563EB",
        },
        {
          name: "Female",
          data: [500, 610, 1311, 1000, 2000, 1000, 1100, 1200, 1544, 2012, 3021, 1600, 1700],
          color: "#7E3BF2",
        },
      ],
      chart: {
        sparkline: {
          enabled: false
        },
        height: "100%",
        width: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      legend: {
        show: false
      },
      grid: {
        show: false,
      },
    }

    if (document.getElementById("labels-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("labels-chart"), options);
      chart.render();
    }

  }

}
