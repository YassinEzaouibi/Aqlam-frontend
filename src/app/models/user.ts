import {BookDto, OwnedBookCollectionDto} from "./userDtoData";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  sex: string;
  userName: string;
  profilePicture: string;
  booksCollections: OwnedBookCollectionDto[];
  favoriteBookCollectionIds: number[];
  books: BookDto[];


  constructor(id: number, firstName: string, lastName: string, email: string, password: string, dateOfBirth: Date, sex: string, userName: string, profilePicture: string, booksCollections: OwnedBookCollectionDto[], favoriteBookCollectionIds: number[], books: BookDto[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.sex = sex;
    this.userName = userName;
    this.profilePicture = profilePicture;
    this.booksCollections = booksCollections;
    this.favoriteBookCollectionIds = favoriteBookCollectionIds;
    this.books = books;
  }
}
