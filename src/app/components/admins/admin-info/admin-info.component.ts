import { Component, OnInit } from '@angular/core';
import {Admin} from "../../../models/admin";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../../services/admin.service";


@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

  // @ts-ignore
  admin: Admin = new Admin();
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminService.getAdminById(this.id).subscribe(data => {
      this.admin = data;
    });
  }

  deleteAdmin(id: number) {
    this.adminService.deleteUser(id).subscribe(
      data => {
        this.adminService.toAdminsList();
      }
    )
    console.log("admin with this id: "+ id +" is deleted")
  }

  updateAboutAdmin(id: number) {
    this.router.navigate(['/admins/update', id])
  }
}
