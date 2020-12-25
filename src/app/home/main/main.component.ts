import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  kiloMeter;
  meter;
  centiMetr;
  miliMetr;

  microMetr;
  decaMetr;
  nanoMetr;
  mile;

  yard;
  foot;
  inch;
  gajj;

  sqkilometer;
  sqmetr;
  sqmile;
  sqyard;

  sqft;
  sqinch;
  acre;
  hectare;
  ELEMENT_DATA = [
    {position: 1, name: 'square kilometer', weight: '1000000 sq. m', symbol: 'sq. km'},
    {position: 2, name: 'square meter', weight: '1.19 sq. yd', symbol: 'sq. m'},
    {position: 3, name: 'square mile', weight: '6.941', symbol: 'sq. mile'},
    {position: 4, name: 'square yard', weight: '9.0122', symbol: 'sq. yard', desc: 'it is also called gaj'},
    {position: 5, name: 'square foot', weight: '10.811', symbol: 'sq. foot'},
    {position: 6, name: 'square inch', weight: '12.0107', symbol: 'sq. inch'},
    {position: 7, name: 'acre', weight: '14.0067', symbol: 'acre'},
    {position: 8, name: 'hectare', weight: '11959.9 sq. yd', symbol: 'hectare'},

    {position: 9, name: 'kilometer', weight: '1000m', symbol: 'km'},
    {position: 10, name: 'meter', weight: '100cm', symbol: 'm'},
    {position: 2, name: 'centimeter', weight: '10mm', symbol: 'cm'},
    {position: 3, name: 'millimeter', weight: '.01dm', symbol: 'mm'},
    {position: 4, name: 'decameter', weight: '100mm', symbol: 'dm'},
    {position: 5, name: 'micrometer', weight: '0.001mm', symbol: 'um'},
    {position: 6, name: 'nanometer', weight: '0.001um', symbol: 'nm'},
    {position: 7, name: 'mile', weight: '0.621371km', symbol: 'mile'},
    {position: 8, name: 'yard', weight: '3ft', symbol: 'yard'},
    {position: 7, name: 'foot', weight: '30.48cm', symbol: 'foot'},
    {position: 8, name: 'inch', weight: '2.54cm', symbol: 'inch'},
  ];

  ngOnInit() {

  }

  kmChanged(newvalue)  {
  const tempValue = newvalue === '' ? '0' : newvalue;
        this.meter = (parseFloat(tempValue) * 1000);
        this.centiMetr = (parseFloat(tempValue) * 100000);
        this.miliMetr = (parseFloat(tempValue) * 1e+6 );
        this.microMetr = (parseFloat(tempValue) * 1e+9);
        this.decaMetr = (parseFloat(tempValue) * 10000);
        this.nanoMetr = (parseFloat(tempValue) * 1e+12);
        this.mile = (parseFloat(tempValue) * 0.621371);    // or divide length by 1.609
        this.yard = (parseFloat(tempValue) * 1093.613);
        this.foot = (parseFloat(tempValue) * 3280.84);
        this.inch = (parseFloat(tempValue) * 39370.079);
  }

  mtrChanged (newvalue)  {
        const tempValue = newvalue === '' ? '0' : newvalue;
          this.kiloMeter = (parseFloat(tempValue) / 1000);
        this.kmChanged(this.kiloMeter);
  }

  cmChanged (newvalue)  {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = (parseFloat(tempValue) / 100000);
    this.kmChanged(this.kiloMeter);
  }

  mmChanged  ( newvalue)  {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = (parseFloat(tempValue) / (1e+6));
    this.kmChanged(this.kiloMeter);
  }

  decaChanged  ( newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = (parseFloat(tempValue) / 10000);
    this.kmChanged(this.kiloMeter);
  }

  microChanged  ( newvalue)  {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = (parseFloat(tempValue) / (1e+9));
    this.kmChanged(this.kiloMeter);
  }

  nanoChanged  (newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = (parseFloat(tempValue) / (1e+12));
    this.kmChanged(this.kiloMeter);
  }

  mileChanged  ( newvalue)  {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = (parseFloat(tempValue) * 1.609);
    this.kmChanged(this.kiloMeter);
  }

  yardChanged  ( newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = (parseFloat(tempValue) / 1093.613);
    this.kmChanged(this.kiloMeter);
  }

  inchChanged ( newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter = (parseFloat(tempValue) / 39370.079);
    this.kmChanged(this.kiloMeter);
  }

footChanged( newvalue)  {
  const tempValue = newvalue === '' ? '0' : newvalue;
    this.kiloMeter =  (parseFloat(tempValue) / 3280.84);
    this.kmChanged(this.kiloMeter);
}


  sqkmChanged ( newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqmetr = (parseFloat(tempValue) * (1e+6));
    this.sqmile = (parseFloat(tempValue) / 2.59);
    this.sqyard = (parseFloat(tempValue) * (1.19e+6) );
    this.sqft = (parseFloat(tempValue) * (1.076e+7));
    this.sqinch = (parseFloat(tempValue) * (1.55e+9));
    this.acre = (parseFloat(tempValue) * (247.105));
    this.hectare = (parseFloat(tempValue) * 100);
  }
  sqmChanged ( newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = (parseFloat(tempValue) / (1e+6));
    this.sqkmChanged(this.sqkilometer);
  }
  sqmileChanged ( newvalue)  {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = (parseFloat(tempValue) * (2.59));
    this.sqkmChanged(this.sqkilometer);
  }

  sqydChanged  ( newvalue)  {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = (parseFloat(tempValue) / (1.19e+6));
    this.sqkmChanged(this.sqkilometer);
  }

  sqinchChanged  ( newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = (parseFloat(tempValue) / (1.55e+9));
    this.sqkmChanged(this.sqkilometer);
  }

  acreChanged ( newvalue)  {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = (parseFloat(tempValue) / (247.105));
    this.sqkmChanged(this.sqkilometer);
  }

  hectareChanged  ( newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = (parseFloat(tempValue) / (100));
    this.sqkmChanged(this.sqkilometer);
  }

  sqfootChanged ( newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.sqkilometer = (parseFloat(tempValue) / (1.076e+7));
    this.sqkmChanged(this.sqkilometer);
  }

}



