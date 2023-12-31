import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersItemComponent } from './pages/users-item/users-item.component';
import { authGuard } from '../auth/guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        canMatch: [authGuard],
        component: UsersListComponent
      },
      {
        path: 'details/:id',
        canMatch: [authGuard],
        component: UsersItemComponent
      },
      {
        path: 'profile',
        canMatch: [authGuard],
        component: ProfileComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
