import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book-model';
import { GenreModel } from 'src/app/models/genre-model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  genres: GenreModel[] = []

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

  public getBooks(): BookModel[] {
    this.bookService.getAllBooks()
  }

}
