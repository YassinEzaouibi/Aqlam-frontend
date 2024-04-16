import { Component, OnInit } from '@angular/core';
import {Admin} from "../../../models/admin";
import {Sex} from "../../../models/enum/Sex";
import {DatePipe} from "@angular/common";
import {AdminService} from "../../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountType} from "../../../models/enum/AccountType";

@Component({
  selector: 'app-supervisors-update',
  templateUrl: './supervisors-update.component.html',
  styleUrls: ['./supervisors-update.component.css']
})
export class SupervisorsUpdateComponent implements OnInit {


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

  toHome() {
    this.router.navigate(['/home'])
  }

}
