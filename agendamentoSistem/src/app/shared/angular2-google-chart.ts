import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var google: any;
declare var googleLoaded: any;
declare var googleChartsPackagesToLoad: any;
@Directive({
    selector: '[GoogleChart]',
    // properties: [
    //     'chartType',
    //     'chartOptions',
    //     'chartData'
    //   ]
})

export class GoogleChart implements OnInit {
  public _element:any;
  @Input('chartType') public chartType:string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;
  @Input('reDraw') public reDraw: boolean;
  constructor(public element: ElementRef) {
    this.reDraw = true;
    this._element = this.element.nativeElement;
    setInterval(() => {
                      googleLoaded = true;
                      google.charts.load('current', {'packages':['corechart','GeoChart', 'gauge']});
                      this.drawGraph(this.chartOptions,this.chartType,this.chartData,this._element);
                      }, 10000);
    if(this.reDraw){
        this.redrawGraph();
    }
  }
  ngOnInit() {
    if(!googleLoaded) {
      googleLoaded = true;
      google.charts.load('current', {'packages':['corechart','GeoChart', 'gauge']});
     }
    setTimeout(() =>this.drawGraph(this.chartOptions,this.chartType,this.chartData,this._element),5000);
  }
  redrawGraph(){
      var self = this;
      console.log(self);
      window.setInterval(function () {
          self.drawGraph(self.chartOptions,self.chartType,self.chartData,self._element);
      }, 10000);
   }
  drawGraph (chartOptions,chartType,chartData,ele) {
      console.log(ele);
      console.log(chartOptions);
      console.log(chartType);
      console.log(chartData);
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
     
        var wrapper;
       wrapper = new google.visualization.ChartWrapper({
             chartType: chartType,
             dataTable:chartData ,
             options:chartOptions
           });
      wrapper.draw(ele);

    }
}
}