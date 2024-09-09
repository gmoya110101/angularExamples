import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';//Import the library



@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.css']
})
export class TestChartComponent implements OnInit {
  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  

createChart(){
  const data = [];
  const data2 = [];
  let prev:number = 100;
  let prev2 = 80;

  for (let i = 0; i < 100; i++) {
    prev += 5 - Math.random() * 10;
    data.push({x: i, y: prev});
    prev2 += 5 - Math.random() * 10;
    data2.push({x: i, y: prev2});
  }
  const totalDuration = 10000;
  const delayBetweenPoints = totalDuration / data.length;
  const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
  const animation = {
    x: {
      //type: 'number',
      //easing: 'linear',
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx) {
        if (ctx.type !== 'data' || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      }
    },
    y: {
      //type: 'number',
      //easing: 'linear',
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx:any) {
        if (ctx.type !== 'data' || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      }
    }
  };

    this.chart = new Chart("MyChart", {
      type: 'line',
  data: {
    
    datasets: [{
      backgroundColor: '#D3990C',
      borderColor:'#D3990C',
      borderWidth: 1,
      label: "Golden Citra",
      data: data,
    },
    {
      backgroundColor: '#C7072D',
      borderColor: '#C7072D',
      borderWidth: 1,
      label: "Melophobia",
      data: data2,
    }]
  },
  options: {
    animations: animation,
    interaction: {
      intersect: false
    },
    scales: {
      x: {
        type: 'linear'
      }
    }
  }
});/*type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2024-04-01', '2024-04-02', '2024-04-03','2024-04-04',
								 '2024-04-05', '2024-04-06', '2024-04-07','2024-04-08',
                 '2024-04-09', '2024-04-10', '2024-04-11' ], 
	       datasets: [
          {
            label: "Golden Citra",
            data: ['467','576', '572', '79', 
                    '92', '23', '234', '932',
								 '574', '573', '576'],
            backgroundColor: '#D3990C',
            fill: {
              target: 'origin',
              above: 'rgb(232, 200, 0,0.2)',   // Area will be red above the origin
              below: '#C6AB03'    // And blue below the origin
            }
          },
          {
            label: "Melophobia",
            data: ['542', '542', '536', '327', 
                    '177', '432', '234', '912',
									 '890.00', '538', '541'],
            backgroundColor: '#C7072D',
            fill: {
              target: 'origin',
              above: 'rgb(255, 105, 134,0.2)',   // Area will be red above the origin
              below: 'rgb(0, 0, 255)'    // And blue below the origin
            }
          }  
        ]
      },
      options: {
        aspectRatio:2.5,
        responsive: true
      }
      
    });*/
  }



}
