import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdFormFieldModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdPaginatorModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdTableModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';
import {ProfileComponent} from './profile/profile.component';
import {AlertSettingsComponent} from './alert-settings/alert-settings.component';
import {AlertDetailsComponent} from './alert-details/alert-details.component';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientDetailsComponent} from './patient-details/patient-details.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PatientFamilyComponent } from './patient-family/patient-family.component';
import { PatientPendantComponent } from './patient-pendant/patient-pendant.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: PatientListComponent},

  {path: 'users', component: UserListComponent},
  {path: 'users/new', component: UserDetailsComponent},
  {path: 'users/:id', component: UserDetailsComponent},

  {path: 'patients', component: PatientListComponent},
  {path: 'patients/new', component: PatientDetailsComponent},
  {path: 'patients/:id', component: PatientDetailsComponent},
  {path: 'patients/:id/history', component: PatientHistoryComponent},
  {path: 'patients/:id/pendant', component: PatientPendantComponent},
  {path: 'patients/:id/family', component: PatientFamilyComponent},

  {path: 'alerts', component: AlertSettingsComponent},
  {path: 'alerts/new', component: AlertDetailsComponent},
  {path: 'alerts/:id', component: AlertDetailsComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: UnderConstructionComponent},

  {path: 'login', component: LoginComponent},
  {path: 'password/reset', component: PasswordResetComponent},
  {path: 'password/change', component: PasswordChangeComponent},

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {path: '**', component: NotFoundComponent},
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
    AlertDetailsComponent,
    PatientListComponent,
    PatientDetailsComponent,
    LoginComponent,
    PasswordResetComponent,
    PasswordChangeComponent,
    PatientFamilyComponent,
    PatientPendantComponent,
    PatientHistoryComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdTableModule,
    MdFormFieldModule,
    MdInputModule,
    MdCardModule,
    MdListModule,
    MdPaginatorModule,
    MdSelectModule,
    MdGridListModule,
    MdRadioModule,
    MdChipsModule,
    MdTabsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
