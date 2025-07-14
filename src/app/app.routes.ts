import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    {
        path: 'temperature',
        loadChildren: () => import('./temperature/weather/weather.module').then(m => m.WeatherModule)
      },
//     {
//     path: '',
//     redirectTo: '/temperature',
//     pathMatch: 'full'
// },
{
    path: 'test/:testId',
    loadComponent: () => import('./test/test.component').then(m => m.TestComponent),
    data: {
      permission: 'admin',
    },
  },

   {
    path: 'author',
    component: AuthorComponent,
  },
  {
    path: 'books/:authorId',
    component: BooksComponent,
  },

  {
    path: '',
    redirectTo: 'author',
    pathMatch: 'full',
  },
    {
        path: '**',
        component: NotFoundComponent
    }

];