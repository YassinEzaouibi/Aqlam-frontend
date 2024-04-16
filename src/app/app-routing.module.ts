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
import {SupervisorsProfileComponent} from "./components/users/supervisors-profile/supervisors-profile.component";
import {SupervisorsUpdateComponent} from "./components/users/supervisors-update/supervisors-update.component";
import {BooksComponent} from "./components/books/books.component";
import {CollectionsComponent} from "./components/collections/collections.component";


const routes: Routes = [
  { path: 'home', component: MainComponent },

  { path: 'admins', component: AdminsComponent },
  { path: 'admins/add', component: AddAdminComponent },
  { path: 'admins/info/:id', component: AdminInfoComponent },
  { path: 'admins/update/:id', component: UpdateAdminComponent },

  { path: 'admins/profile/:id', component: SupervisorsProfileComponent },
  { path: 'admins/update-supervisor/:id', component: SupervisorsUpdateComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/info/:id', component: UserProfileComponent },

  { path: 'calendar', component: CalendarComponent },

  { path: 'books', component: BooksComponent },

  { path: 'collection', component: CollectionsComponent },

  { path: '', component: MainComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
