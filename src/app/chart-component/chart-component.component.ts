import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit{
  @Output() emitChartValue: any =  new EventEmitter()
  public chart: any;
  constructor(private el: ElementRef) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

      this.createGanttChart();

  }

  createGanttChart() {
    // const ctx: any = this.canvas.nativeElement.getContext('2d');


    this.chart = new Chart('ganttCanvas', {
      type: 'bar',
      data: {
        labels: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
        datasets: [
          {
            label: 'Survey Paper',
            data: [0, 0, 0, 0,0,1,1,7,3,5,5,1],
            backgroundColor: '#ff474c',
            borderColor: [], // Initialize empty array for borders
            borderWidth: [],
          },
          {
            label: 'Perturbation Based Paper',
            data: [1, 2, 0, 1,2,0,2,0,1,1,1,0],
            backgroundColor: '#ffe5cc',
            borderColor: [], // Initialize empty array for borders
        borderWidth: [],
          },
          {
            label: 'Gradient Based Paper',
            data: [1, 0, 0, 2,2,2,4,3,0,0,2,3],
            backgroundColor: '#c7e9c0',
            borderColor: [], // Initialize empty array for borders
            borderWidth: [],
          },
           {
            label: 'Decomposition Based Paper',
            data: [0, 0, 2, 1,3,2,3,0,2,0,1,0],
            backgroundColor: '#cfe2f3',
            borderColor: [], // Initialize empty array for borders
            borderWidth: [],
          },
          {
            label: 'Concept Based Paper',
            data: [1, 0, 0, 0,0,1,4,1,1,1,0,1],
            backgroundColor: '#f4cccc',
            borderColor: [], // Initialize empty array for borders
            borderWidth: [],
          },
        ],
      },
      options: {
        indexAxis: 'y', // This makes it horizontal
        scales: {
          x: {
            stacked: true, // Stack the bars
          },
          y: {
            stacked: true, // Stack the bars
          },
        },
      },

    });

    // Add click event listener to the canvas
const canvas: any = document.getElementById('ganttCanvas');
canvas.onclick = (event: any) => {
  // Get the elements at the click position
  const activePoints = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
  
  // Check if any element was clicked
  if (activePoints.length) {
    const firstPoint = activePoints[0];
    const datasetIndex = firstPoint.datasetIndex; // Index of the clicked dataset
    const dataIndex = firstPoint.index; // Index of the clicked data point

    // Get the label and value
    const label = this.chart.data.labels[dataIndex];
    const value = this.chart.data.datasets[datasetIndex].data[dataIndex];
    const datasetLabel = this.chart.data.datasets[datasetIndex].label;

    // Handle the click event (e.g., display an alert or perform another action)
    alert(`Clicked on ${datasetLabel} for the year ${label}: ${value}`);
  }
};

    // Add event listener for chart clicks
    this.addChartClickListener();
  }

  addChartClickListener() {
    const canvas = this.el.nativeElement.querySelector('#ganttCanvas');

    canvas.onclick = (event: MouseEvent) => {
      const activePoints = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);

      if (activePoints.length > 0) {
        const { datasetIndex, index } = activePoints[0];
        const taskLabel = this.chart.data.labels[index];
        const taskData = this.chart.data.datasets[datasetIndex].data[index];
        const datasetLabel = this.chart.data.datasets[datasetIndex].label;

        this.chart.data.datasets.forEach((dataset: any) => {
          dataset.borderColor = dataset.data.map(() => 'transparent'); // Reset all borders
          dataset.borderWidth = dataset.data.map(() => 0); // Reset border widths
        });
    
        // Apply border to the selected dataset and data point (bar)
        this.chart.data.datasets[datasetIndex].borderColor[index] = '#000000';
        this.chart.data.datasets[datasetIndex].borderWidth[index] = 3; // Set border width only for selected bar
    
        // Update the chart to apply the border
        this.chart.update();

        this.chart.update();
        this.emitChartValue.emit({year: taskLabel,group: datasetLabel})
        this.handleTaskClick(taskLabel, datasetLabel);
      }
    };
  }

  handleTaskClick(taskLabel: string, taskData: any) {
    // You can implement your action here
    console.log(`Clicked on ${taskLabel}: Start - ${taskData}, End - ${this.chart}`);
  }
}
