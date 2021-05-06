
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
    {
        path: 'temperature',
        loadChildren: () => import('./temperature/weather/weather.module').then(m => m.WeatherModule)
      },
    {
    path: '',
    redirectTo: '/temperature',
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
