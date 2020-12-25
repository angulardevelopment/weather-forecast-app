import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bite',
  templateUrl: './bite.component.html',
  styleUrls: ['./bite.component.scss']
})
export class BiteComponent implements OnInit {

  constructor() { }

  form;
  b = 0;
  h = 0;
  o = 0;
  i = 0;
  p = 0;
  ELEMENT_DATA = [
    {position: 1, name: 'bit', weight: '1 bit', symbol: 'b'},
    {position: 2, name: 'byte', weight: '8 bits', symbol: 'B'},
    {position: 3, name: 'Kilobyte', weight: '1024 bytes', symbol: 'KB'},
    {position: 4, name: 'Megabyte', weight: '1024 kilobytes', symbol: 'MB'},
    {position: 5, name: 'Gigabyte', weight: '1024 megabytes', symbol: 'GB'},
    {position: 6, name: 'Terabyte', weight: '1024 gigabytes', symbol: 'TB'},
  ];

  ngOnInit() {
    this.form = new FormGroup({
      gigab: new FormControl(''),
      terab: new FormControl(''),
      megab: new FormControl(''),
      kilob: new FormControl(''),
      byt: new FormControl(''),
      bit: new FormControl('')
    });
  }



  teraChanged = (newvalue) => {
    if (newvalue !== '') {
      this.form.patchValue({ gigab: parseFloat(newvalue) * 1024 });
      this.form.patchValue({ megab: parseFloat(newvalue) * 1048576 });
      this.form.patchValue({ kilob: parseFloat(newvalue) * 1073741824 });
      this.form.patchValue({ byt: parseFloat(newvalue) * 1099511627776 });
      this.form.patchValue({ bit: parseFloat(newvalue) * 8.796093e+12 });
    } else {
      this.form.patchValue({ gigab: '' });
      this.form.patchValue({ megab: '' });
      this.form.patchValue({ kilob: '' });
      this.form.patchValue({ byt: '' });
      this.form.patchValue({ bit: '' });
    }
  }


  gigaChanged = (newvalue) => {
    this.b = this.b + 1;
    if (this.b === 1) {
      if (newvalue !== '') {
        this.form.patchValue({ terab: parseFloat(newvalue) / 1024 });
      } else {
        this.form.patchValue({ terab: '' });
      }
      this.b = 0;
    }
  }

  magaChanged = (newvalue) => {
    this.h = this.h + 1;
    if (this.h === 1) {
      if (newvalue !== '') {
        this.form.patchValue({ terab: parseFloat(newvalue) / 1048576 });
      } else {
        this.form.patchValue({ terab: '' });
      }
      this.h = 0;
    }
  }

  kiloChanged = ( newvalue) => {
    this.o = this.o + 1;
    if (this.o === 1) {
      if (newvalue !== '') {
        this.form.patchValue({ terab: parseFloat(newvalue) / 1073741824 });
      } else {
        this.form.patchValue({ terab: '' });
      }
      this.o = 0;
    }
  }

  bytChanged = ( newvalue) => {
    this.i = this.i + 1;
    if (this.i === 1) {
      if (newvalue !== '') {
        this.form.patchValue({ terab: parseFloat(newvalue) / 1099511627776 });
      } else {
        this.form.patchValue({ terab: '' });
      }
      this.i = 0;
    }
  }

  bitChanged = ( newvalue) => {
    this.p = this.p + 1;
    if (this.p === 1) {
      if (newvalue !== '') {
        this.form.patchValue({ terab: parseFloat(newvalue) / 8.796093e+12 });
      } else {
        this.form.patchValue({ terab: '' });
      }
      this.p = 0;
    }
  }

}




