import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // @ts-ignore
  user: User = new User();
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    });

  }

  deleteAdmin(id: number) {
    this.userService.deleteUser(id).subscribe(
      data => {
        this.userService.toUsersList();
      }
    )
    console.log("admin with this id: "+ id +" is deleted")
  }

}
