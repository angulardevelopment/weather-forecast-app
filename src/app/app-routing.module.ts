import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { MainComponent } from './main/main.component';
import { DigitComponent } from './digit/digit.component';
import { CurrencyComponent } from './currency/currency.component';
import { BiteComponent } from './bite/bite.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WeightComponent } from './weight/weight.component';
import { EssayComponent } from './essay/essay.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { TodoComponent } from './todo/todo.component';


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
        loadChildren: () => import('./temperature/weather/weather.module').then(m => m.WeatherModule)
      },
    {
        path: 'weight',
        component: WeightComponent
    },
    {
        path: 'essayWriter',
        component: EssayComponent
    },
    {
        path: 'calculator',
        component: CalculatorComponent
    },
    {
        path: 'chatBot',
        component: ChatbotComponent
    },
    {
        path: 'todoList',
        component: TodoComponent
    },
    {
    path: '',
    redirectTo: '/convertentries',
    pathMatch: 'full' // prefix
},
    {
        path: '**',
        component: NotFoundComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),  // optional usehash
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
