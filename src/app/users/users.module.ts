import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    MaterialModule,
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
