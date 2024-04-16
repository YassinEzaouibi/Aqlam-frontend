import { Component, OnInit } from '@angular/core';
import {Admin} from "../../../models/admin";
import {Sex} from "../../../models/enum/Sex";
import {DatePipe} from "@angular/common";
import {AdminService} from "../../../services/admin.service";
import {AccountType} from "../../../models/enum/AccountType";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  // @ts-ignore
  admin: Admin = new Admin();
  gender = Object.values(Sex)
  id: number = 0;

  constructor(
    private datePipe: DatePipe,
    public adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminService.getAdminById(this.id).subscribe(data => {
      this.admin = data;
      this.admin.password = "";
    });
    this.saveAdmin()
    console.log(this.admin)
  }

  formatDate(date: Date){
    return this.datePipe.transform(date,'yyyy-MM-dd')
  }

  saveAdmin(){
    this.admin.accountType = AccountType.ADMIN
    this.adminService.addAdmin(
      this.admin
    ).subscribe(
      data =>
        this.adminService.toAdminsList()
    )
    console.log(this.admin)
  }

  onSubmit(){
    this.saveAdmin();
  }

  toAdmin() {
    this.router.navigate(['/admins/info', this.id])
  }
}
