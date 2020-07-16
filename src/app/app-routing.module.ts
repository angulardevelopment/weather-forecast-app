import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import { TechComponent } from './tech/tech.component';
import { MainComponent } from './main/main.component';
import { DigitComponent } from './digit/digit.component';
import { CurrencyComponent } from './currency/currency.component';
import { BiteComponent } from './bite/bite.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeightComponent } from './weight/weight.component';


const routes: Routes = [
	{
		path: 'convertentries',
		component: TechComponent
    },
    {
		path: 'landunits',
		component: MainComponent
    },
    {
		path: 'digit',
		component: DigitComponent
    },
    {
		path: 'currency',
		component: CurrencyComponent
    },
    {
		path: 'techunits',
		component: BiteComponent
	},
	{
		path: 'temperature',
		component: TemperatureComponent
	},
	{
		path: 'weight',
		component: WeightComponent
	},
	{
	path: '',
	redirectTo: '/convertentries',
	pathMatch: 'full'   
},
	{
		path: '**',
		component: NotFoundComponent
	}
	
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),  //optional usehash
		CommonModule
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
