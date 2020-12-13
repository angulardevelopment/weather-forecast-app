import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { TechComponent } from './home/tech/tech.component';
import { MainComponent } from './home/main/main.component';
import { DigitComponent } from './home/digit/digit.component';
import { CurrencyComponent } from './home/currency/currency.component';
import { BiteComponent } from './home/bite/bite.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WeightComponent } from './home/weight/weight.component';
import { EssayComponent } from './home/essay/essay.component';
import { CalculatorComponent } from './home/calculator/calculator.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { TodoComponent } from './home/todo/todo.component';
import { StockComponent } from './home/stock/stock.component';


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
      path: 'average',
      component: StockComponent
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
    pathMatch: 'full'
},
    {
        path: '**',
        component: NotFoundComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
