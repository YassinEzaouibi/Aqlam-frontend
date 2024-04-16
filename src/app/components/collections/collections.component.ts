import { Component, OnInit } from '@angular/core';
import {Collection} from "../../models/collection";
import {CollectionService} from "../../services/book.collection.service";

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Collection[] | undefined;

  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit(): void {
    this.getAllCollection();
  }

  getAllCollection(){
    console.log('Getting all Collections');
    this.collectionService.getAllCollections().subscribe(
      data => {
        this.collections = data;
      }
    );
  }

}
