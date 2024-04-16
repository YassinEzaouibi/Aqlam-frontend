import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../../../services/person.service";
import {Person} from "../../../models/person";
import {AdminService} from "../../../services/admin.service";
import {Admin} from "../../../models/admin";

@Component({
  selector: 'app-supervisors-profile',
  templateUrl: './supervisors-profile.component.html',
  styleUrls: ['./supervisors-profile.component.css']
})
export class SupervisorsProfileComponent implements OnInit {

  // @ts-ignore
  user: Person = new Person();

  // @ts-ignore
  admin: Admin = new Admin();
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPersonById(this.id).subscribe(data => {
      this.user = data;
    });

    this.personService.getAllPersons();
  }

  redirectToUpdateSuperVisor() {
    this.router.navigate(['/admins/update-supervisor/',this.id]);
  }
}
