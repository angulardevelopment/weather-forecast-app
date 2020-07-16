import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  constructor() { }
  cels=0;
  fahr=32;
  ngOnInit() {
  } 
  celsiusChanged(newvalue){
    let tempValue=newvalue==""?"0":newvalue;
    this.fahr=((parseFloat(tempValue) * 9)/5) + 32
  }

  fahrChanged(newvalue){    
    let tempValue=newvalue==""?"0":newvalue;
    this.cels=((parseFloat(tempValue) - 32) * 5)/9;
    
  }
}
