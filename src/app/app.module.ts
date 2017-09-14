import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdFormFieldModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdPaginatorModule, MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdTableModule,
  MdToolbarModule
} from "@angular/material";


import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UnderConstructionComponent} from "./under-construction/under-construction.component";
import {ProfileComponent} from "./profile/profile.component";
import {AlertSettingsComponent} from "./alert-settings/alert-settings.component";
import {AlertDetailsComponent} from "./alert-details/alert-details.component";


const appRoutes: Routes = [
  {path: 'dashboard', component: UnderConstructionComponent}, // todo: dashboard here

  {path: 'users', component: UserListComponent},
  {path: 'users/new', component: UserDetailsComponent}, // todo: add user details
  {path: 'users/:id', component: UserDetailsComponent}, // todo: add user details

  {path: 'patients', component: UnderConstructionComponent},
  {path: 'patients/new', component: UnderConstructionComponent},
  {path: 'patients/:id', component: UnderConstructionComponent},

  {path: 'alerts', component: AlertSettingsComponent},
  {path: 'alerts/new', component: AlertDetailsComponent},
  {path: 'alerts/:id', component: AlertDetailsComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: UnderConstructionComponent},

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
    ProfileComponent,
    AlertSettingsComponent,
    AlertDetailsComponent
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
    MdCardModule, MdListModule, MdPaginatorModule, MdSelectModule, MdGridListModule,
    MdRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


