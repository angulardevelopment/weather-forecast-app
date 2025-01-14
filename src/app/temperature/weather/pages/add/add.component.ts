import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  standalone: false
})
export class AddComponent implements OnInit {
  cels = 0;
  fahr = 32;
  cityName;
  constructor(public router: Router, ) { }

  ngOnInit() {
  }

  details() {
// sessionStorage.setItem("df",this.cityName);
this.router.navigate(['']);

  }

  celsiusChanged(newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.fahr = ((parseFloat(tempValue) * 9) / 5) + 32;
  }

  fahrChanged(newvalue) {
    const tempValue = newvalue === '' ? '0' : newvalue;
    this.cels = ((parseFloat(tempValue) - 32) * 5) / 9;

  }
}
