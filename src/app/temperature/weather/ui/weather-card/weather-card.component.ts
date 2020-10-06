import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {


  condition = [];
  currentTemp = [];
  maxTemp = [];
  minTemp = [];
  darkMode: boolean;

  constructor(public weather: WeatherService,
              public router: Router,
              public ui: UiService) {
  }

tempCity = ['Paris', 'India'];
  ngOnInit() {

    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
    this.minTemp = [];
for (let i = 0; i < this.tempCity.length; i++) {
    this.weather.getWeatherState(this.tempCity[i])
      .subscribe((data: string) => {
        this.condition.push(data);
      });

    this.weather.getCurrentTemp(this.tempCity[i]).subscribe((data: number) => {
      this.currentTemp.push(data);
    });
    this.weather.getMinTemp(this.tempCity[i]).subscribe((data: number) => {
      this.minTemp.push(data);
    });
    this.weather.getMaxTemp(this.tempCity[i]).subscribe((data: number) => {
      this.maxTemp.push(data);
    });
  }
  }


  openDetails(i) {
    this.router.navigateByUrl('/temperature/details/' + i);
  }

}


