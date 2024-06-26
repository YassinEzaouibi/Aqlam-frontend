import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminsComponent} from "./components/admins/admin.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MainComponent} from "./components/main/main.component";
import {HeaderComponent} from "./components/header/header.component";
import {LoginComponent} from "./components/login-register/login/login.component";
import {RegisterComponent} from "./components/login-register/register/register.component";
import {HttpClientModule} from "@angular/common/http";
import { AdminInfoComponent } from './components/admins/admin-info/admin-info.component';
import { AddAdminComponent } from './components/admins/add-admin/add-admin.component';
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { UpdateAdminComponent } from './components/admins/update-admin/update-admin.component';
import {UsersComponent} from "./components/users/users.component";
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SupervisorsProfileComponent } from './components/users/supervisors-profile/supervisors-profile.component';
import { SupervisorsUpdateComponent } from './components/users/supervisors-update/supervisors-update.component';
import { BooksComponent } from './components/books/books.component';
import { CollectionsComponent } from './components/collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminsComponent,
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminInfoComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    UsersComponent,
    UserProfileComponent,
    CalendarComponent,
    SupervisorsProfileComponent,
    SupervisorsUpdateComponent,
    BooksComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
