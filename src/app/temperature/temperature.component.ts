import { Component, inject, OnInit } from '@angular/core';
import { UiService } from './weather/services/ui.service';


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
  standalone: false
})
export class TemperatureComponent implements OnInit {

// https://practice.geeksforgeeks.org/contest/coderita-2021

  showMenu = false;
  darkModeActive: boolean;

  constructor(public ui: UiService) {

  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });


  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }


}
