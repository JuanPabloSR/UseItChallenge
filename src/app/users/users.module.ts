import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({

  imports: [
    MaterialModule,
    CommonModule,
    UsersRoutingModule,
  ],

  declarations: [
      

  ],


})
export class UsersModule { }
