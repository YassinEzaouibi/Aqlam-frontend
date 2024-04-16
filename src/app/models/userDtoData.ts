export class OwnedBookCollectionDto {

  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

}


export class BookDto {

  id: number;
  title: string;
  reference: string;

  constructor(id: number, title: string, reference: string) {
    this.id = id;
    this.title = title;
    this.reference = reference;
  }

}
