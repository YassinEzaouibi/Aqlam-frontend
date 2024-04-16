export class Collection {
  title: string;
  description: string;
  bookIds: number[];
  userId: number;

  constructor(title: string, description: string, bookIds: number[], userId: number) {
    this.title = title;
    this.description = description;
    this.bookIds = bookIds;
    this.userId = userId;
  }
}
