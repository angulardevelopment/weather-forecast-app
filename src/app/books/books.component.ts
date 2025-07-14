import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books = [
    {
      id: 1, authorId: 1, title: 'The Color of Magic'
    },
    {
      id: 2, authorId: 1, title: 'The Light Fantastic'
    },
    {
      id: 3, authorId: 2, title: 'The Name of the Wind'
    },
    {
      id: 4, authorId: 2, title: 'The Wise Man\'s Fear'
    },
    {
      id: 5, authorId: 3, title: 'The Hunger Games'
    },
    {
      id: 6, authorId: 3, title: 'Catching Fire'
    },
    {
      id: 7, authorId: 3, title: 'Mockingjay'
    }
  ]

   authorsBooks: {id:number, authorId:number, title:string}[] = [];

  @Input() 
  set authorId(id: string) {
    this.authorsBooks = this.books.filter(i => i.authorId === +id)
  }
}
