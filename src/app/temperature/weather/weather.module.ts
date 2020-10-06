import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';

import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { TemperatureComponent } from '../temperature.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { WeatherService } from './services/weather.service';
import { UiService } from './services/ui.service';


const routes: Routes = [
  {path: '', component: TemperatureComponent,
  children: [
      { path: '', component: HomeComponent },
      {path: 'details/:city', component: DetailsComponent},
      {path: 'add', component: AddComponent},
    ],

  },


];

@NgModule({
  imports:
  [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  declarations: [

    WeatherCardComponent,
    AddComponent,
    DetailsComponent,
    HomeComponent,
    AddCardComponent,
    TemperatureComponent],
  providers: [
    WeatherService,
    UiService
  ],
  exports: [RouterModule],
})
export class WeatherModule { }
