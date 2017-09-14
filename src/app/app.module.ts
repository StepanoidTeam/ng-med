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
  MdPaginatorModule, MdSelectModule,
  MdSidenavModule,
  MdTableModule,
  MdToolbarModule
} from "@angular/material";


import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UnderConstructionComponent} from "./under-construction/under-construction.component";
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
  {path: 'dashboard', component: UnderConstructionComponent}, // todo: dashboard here

  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent}, // todo: add user details

  {path: 'patients', component: UnderConstructionComponent},
  {path: 'alerts', component: UnderConstructionComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: UnderConstructionComponent},

  {
    path: 'users/new',
    component: UserDetailsComponent, // todo: add new user
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    NotFoundComponent,
    UnderConstructionComponent,
    ProfileComponent
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
    MdCardModule, MdListModule, MdPaginatorModule, MdSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


