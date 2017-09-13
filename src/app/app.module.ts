import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdFormFieldModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdPaginatorModule,
  MdSidenavModule,
  MdTableModule,
  MdToolbarModule
} from "@angular/material";


import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
  {path: 'dashboard', component: NotFoundComponent}, // todo: dashboard here

  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent}, // todo: add user details

  {path: 'patients', component: NotFoundComponent},
  {path: 'alerts', component: NotFoundComponent},
  {path: 'settings', component: NotFoundComponent},

  {
    path: 'users/new',
    component: UserDetailsComponent, // todo: add new user
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule, NoopAnimationsModule,
    MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdIconModule,
    MdSidenavModule, MdTableModule, MdFormFieldModule, MdInputModule,
    MdCardModule, MdListModule, MdPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


