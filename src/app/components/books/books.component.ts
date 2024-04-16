import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] | undefined;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.getAllBooks();
  }


  getAllBooks(){
    console.log('Getting all books');
    this.bookService.retrieveAllBooks().subscribe(
      data => {
        this.books = data;
      }
    );
  }

}
