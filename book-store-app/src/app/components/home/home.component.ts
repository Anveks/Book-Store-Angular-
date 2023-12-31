import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookModel } from 'src/app/models/book-model';
import { GenreModel } from 'src/app/models/genre-model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  @Output() cardClick = new EventEmitter<Event>();

  genres: GenreModel[] = [];

  books: BookModel[] = [];

  constructor (private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllGenres().subscribe(
      data => {
        this.genres = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  public getBooks(id: number) {
    console.log(id); // getting the id from event binding

    this.bookService.getBooksByGenre(id).subscribe(
      data => {
        this.books = data;
        console.log(data);
      }
    )
  }

  public onCardClick(event: any) {
    this.cardClick.emit(event); // Emit the event when the card is clicked
  }

}
