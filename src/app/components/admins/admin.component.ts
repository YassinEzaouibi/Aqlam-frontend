import { Component, OnInit } from '@angular/core';
import {Admin} from "../../models/admin";
import {Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-admins',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminsComponent implements OnInit {

  admins: Admin[] | undefined ;

  constructor(
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.adminService.getAllAdmins().subscribe(data => {
      this.admins = data;
      this.admins.sort((a, b) => a.id - b.id);
    });
  }

  moreAboutAdmin(id: number) {
    this.router.navigate(['/admins/info', id]);
  }

}
