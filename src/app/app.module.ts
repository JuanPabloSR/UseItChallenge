import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersListComponent } from './users/pages/users-list/users-list.component';
import { UsersItemComponent } from './users/pages/users-item/users-item.component';
import { ToolbarComponent } from './users/components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './users/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersItemComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
