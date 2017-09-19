import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule, MdChipInput,
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
  MdTableModule,
  MdToolbarModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { ProfileComponent } from './profile/profile.component';
import { AlertSettingsComponent } from './alert-settings/alert-settings.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { FormsModule, NgModel } from '@angular/forms';

const appRoutes: Routes = [
    { path: 'dashboard', component: PatientListComponent },

    { path: 'users', component: UserListComponent },
    { path: 'users/new', component: UserDetailsComponent },
    { path: 'users/:id', component: UserDetailsComponent },

    { path: 'patients', component: PatientListComponent },
    { path: 'patients/new', component: PatientDetailsComponent },
    { path: 'patients/:id', component: PatientDetailsComponent },

    { path: 'alerts', component: AlertSettingsComponent },
    { path: 'alerts/new', component: AlertDetailsComponent },
    { path: 'alerts/:id', component: AlertDetailsComponent },

    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: UnderConstructionComponent },

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    { path: '**', component: NotFoundComponent },
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
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
