import { Injectable } from "@angular/core";
import { BookModel } from "../models/book-model";
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { GenreModel } from "../models/genre-model";

@Injectable({
  providedIn: 'root'
})

export class BookService  {

  constructor(private http: HttpClient) { }
  dataPath = '../assets/';

  public getAllGenres(): Observable<GenreModel[]> {
    return this.http.get<GenreModel[]>(this.dataPath + 'genres.json');
  }

  public getBooksByGenre(id: number): Observable<BookModel[]> {
    const books = this.http.get<BookModel[]>(this.dataPath + 'books.json');

    const booksByGenre = books.pipe( // RzJS pipe creates a pipeline of operations on the observable
      map(books => books.filter((b) => b.genreId === id)) // map operator returns a new array with filtered books
    )
    return booksByGenre;
  }
}
