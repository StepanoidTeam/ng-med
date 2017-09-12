import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdToolbarModule,MdIconModule,MdSidenavModule,MdTableModule} from '@angular/material';



import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,NoopAnimationsModule,
    MdButtonModule, MdCheckboxModule,
    MdToolbarModule,MdIconModule,
    MdSidenavModule,MdTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
