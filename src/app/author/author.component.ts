import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-author',
 standalone: true,
  imports: [RouterLink],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  authors = [
    {
      id: 1,
      name: 'James',
    },
    {
      id: 2,
      name: 'John',
    },
    {
      id: 3,
      name: 'Abigail',
    },
  ];
}
