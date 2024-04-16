import { Component, OnInit } from '@angular/core';
import {Sex} from "../../../models/enum/Sex";
import {DatePipe} from "@angular/common";
import {Admin} from "../../../models/admin";
import {AdminService} from "../../../services/admin.service";
import {AccountType} from "../../../models/enum/AccountType";

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  // @ts-ignore
  admin: Admin = new Admin();
  gender = Object.values(Sex)

  constructor(
    private datePipe: DatePipe,
    public adminService: AdminService
) { }

  ngOnInit(): void {
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

}
