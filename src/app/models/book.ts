import {BookCover} from "./enum/BookCover";
import {Language} from "./enum/Language";
import {Category} from "./enum/Category";

export class Book {
  id: number;
  title: string;
  author: string;
  publicationDate: Date;
  pages: number;
  description: string;
  cover: BookCover;
  language: Language;
  publisher: string;
  category: Category;
  reference: string;
  bookPicture?: string;
  userId: number;

  constructor(id: number, title: string, author: string, publicationDate: Date, pages: number, description: string, cover: BookCover, language: Language, publisher: string, category: Category, reference: string, bookPicture: string, userId: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.pages = pages;
    this.description = description;
    this.cover = cover;
    this.language = language;
    this.publisher = publisher;
    this.category = category;
    this.reference = reference;
    this.bookPicture = bookPicture;
    this.userId = userId;
  }
}
