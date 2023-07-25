import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersListComponent } from './users/pages/users-list/users-list.component';
import { UsersItemComponent } from './users/pages/users-item/users-item.component';
import { ToolbarComponent } from './users/components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersItemComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
