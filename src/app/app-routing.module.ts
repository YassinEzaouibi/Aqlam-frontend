import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AdminsComponent} from "./components/admins/admin.component";
import {AdminInfoComponent} from "./components/admins/admin-info/admin-info.component";
import {AddAdminComponent} from "./components/admins/add-admin/add-admin.component";
import {UpdateAdminComponent} from "./components/admins/update-admin/update-admin.component";
import {UsersComponent} from "./components/users/users.component";
import {UserProfileComponent} from "./components/users/user-profile/user-profile.component";
import {CalendarComponent} from "./components/calendar/calendar.component";


const routes: Routes = [
  { path: 'home', component: MainComponent },

  { path: 'admins', component: AdminsComponent },
  { path: 'admins/add', component: AddAdminComponent },
  { path: 'admins/info/:id', component: AdminInfoComponent },
  { path: 'admins/update/:id', component: UpdateAdminComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/info/:id', component: UserProfileComponent },

  { path: 'calendar', component: CalendarComponent },

  { path: '', component: MainComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
