import { Component, OnInit } from '@angular/core';
import {Person} from "../../models/person";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  person: Person | undefined;
  id: number = 1;
  isDropdownVisible: boolean = false;

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.getPersonById(this.id);
  }

  toggleDropdown(){
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  getPersonById(id: number){
    this.personService.getPersonById(id).subscribe(data => {
      this.person = data;
    });
  }
}
