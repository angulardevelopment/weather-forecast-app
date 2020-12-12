import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {

  constructor() { }

  form;
  b = 0;
  h = 0;
  o = 0;
  ELEMENT_DATA = [
    {position: 1, name: 'binary', weight: '0,1', symbol: '2'},
    {position: 2, name: 'octal', weight: '0,1,2,3,4,5,6,7', symbol: '8'},
    {position: 3, name: 'decimal', weight: '0,1,2,3,4,5,6,7,8,9', symbol: '10'},
    {position: 4, name: 'Hexadecimal', weight: '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F', symbol: '16'},
  ];
  ngOnInit() {
    this.form = new FormGroup({
      decimal: new FormControl(''),
      binary: new FormControl(''),
      octal: new FormControl(''),
      hexa: new FormControl('')
    });
  }


  decimalChanged = ( newvalue) => {
    if (newvalue !== '') {
      this.form.patchValue({ binary: parseInt(newvalue, 10).toString(2) });
      this.form.patchValue({ octal: parseInt(newvalue, 10).toString(8) });
      this.form.patchValue({ hexa: parseInt(newvalue, 10).toString(16) });
    } else {
      this.form.patchValue({ binary: '' });
      this.form.patchValue({ octal: '' });
      this.form.patchValue({ hexa: '' });
    }
  }


  binaryChanged = ( newvalue) => {
    this.b = this.b + 1;
    if (this.b === 1) {
      if (newvalue !== '') {
        this.form.patchValue({ decimal: parseInt(newvalue, 2).toString(10) });
      } else {
        this.form.patchValue({ decimal: '' });
      }
      this.b = 0;
    }
  }

  octalChanged = function ( newvalue) {
    this.o = this.o + 1;
    if (this.o === 1) {
      if (newvalue !== '') {
        this.form.patchValue({ decimal: parseInt(newvalue, 8).toString(10) });
      } else {
        this.form.patchValue({ decimal: '' });
      }
      this.o = 0;
    }
  };

  hexaChanged = function ( newvalue) {
    this.h = this.h + 1;
    if (this.h === 1) {
      if (newvalue !== '') {
        this.form.patchValue({ decimal: parseInt(newvalue, 16).toString(10) });
      } else {
        this.form.patchValue({ decimal: '' });
      }
      this.h = 0;
    }
  };


}


