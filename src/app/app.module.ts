import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdFormFieldModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdRadioModule,
  MdSelectModule,
  MdSidenavModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';
import {ProfileComponent} from './auth/profile/profile.component';
import {AlertSettingsComponent} from './alert/alert-settings/alert-settings.component';
import {AlertDetailsComponent} from './alert/alert-details/alert-details.component';
import {PatientListComponent} from './patient/patient-list/patient-list.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './auth/login/login.component';
import {PasswordResetComponent} from './auth/password-reset/password-reset.component';
import {PasswordChangeComponent} from './auth/password-change/password-change.component';
import {PatientFamilyComponent} from './patient/patient-family/patient-family.component';
import {PatientPendantComponent} from './patient/patient-pendant/patient-pendant.component';
import {PatientHistoryComponent} from './patient/patient-history/patient-history.component';
import {PatientGeneralComponent} from './patient/patient-general/patient-general.component';
import {PatientNewComponent} from './patient/patient-new/patient-new.component';
import {PatientEditComponent} from './patient/patient-edit/patient-edit.component';
import {PatientFamilyMemberComponent} from './patient/patient-family-member/patient-family-member.component';
import {AuthComponent} from './auth/auth.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: PatientListComponent},

  {path: 'users', component: UserListComponent},
  {path: 'users/new', component: UserDetailsComponent},
  {path: 'users/:id', component: UserDetailsComponent},

  {path: 'patients', component: PatientListComponent},
  {
    path: 'patients/new', component: PatientNewComponent,
    data: {mode: 'new'},
    children: [
      {path: 'general', component: PatientGeneralComponent},
      {path: 'family', component: PatientFamilyComponent},
      {path: '', redirectTo: 'general', pathMatch: 'full'},
    ]
  },
  {
    path: 'patients/:id', component: PatientEditComponent,
    data: {mode: 'edit'},
    children: [
      {path: 'general', component: PatientGeneralComponent},
      {path: 'history', component: PatientHistoryComponent},
      {path: 'pendant', component: PatientPendantComponent},
      {path: 'family', component: PatientFamilyComponent},
      {path: '', redirectTo: 'general', pathMatch: 'full'},
    ]
  },

  {path: 'alerts', component: AlertSettingsComponent},
  {path: 'alerts/new', component: AlertDetailsComponent},
  {path: 'alerts/:id', component: AlertDetailsComponent},

  {path: 'profile', component: ProfileComponent},
  {path: 'settings', component: UnderConstructionComponent},


  {
    path: 'auth', component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'password/reset', component: PasswordResetComponent},
      {path: 'password/change', component: PasswordChangeComponent},
    ]
  },
  {
    path: '',
    redirectTo: 'auth/login',
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
    LoginComponent,
    PasswordResetComponent,
    PasswordChangeComponent,
    PatientFamilyComponent,
    PatientPendantComponent,
    PatientHistoryComponent,
    PatientGeneralComponent,
    PatientNewComponent,
    PatientEditComponent,
    PatientFamilyMemberComponent,
    AuthComponent,
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
    MdDatepickerModule,
    MdNativeDateModule,
    MdProgressBarModule,
    Ng2GoogleChartsModule,
  ],
  entryComponents: [
    PatientFamilyMemberComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
