import { Component } from '@angular/core';
import { Users } from 'src/app/interfaces/users-interface';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css']
})
export class UsersItemComponent {
  users: Users | null = null;

  constructor() {
    this.users = {
      Name: 'John Doe',
      Email: 'john@example.com',
      PhoneNumber: '123-456-7890',
      JobTitle: 'Developer',
      Area: 'IT',
    };
  }

}
