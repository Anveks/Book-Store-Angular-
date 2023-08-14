import { Injectable } from "@angular/core";
import { BookModel } from "../models/book-model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
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

  public getAllBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.dataPath + 'books.json');
  }
}
