import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] | undefined

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  private getUsersList() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.users.sort((a, b) => a.id - b.id);
    });
  }

  viewUserProfile(id: number) {
    this.router.navigate(['/users/info', id]);
  }

}
