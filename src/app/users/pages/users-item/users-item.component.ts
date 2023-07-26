import { Component } from '@angular/core';
import { UsersReponse } from 'src/app/interfaces/users-response-interface';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css']
})
export class UsersItemComponent {
  users: UsersReponse | null = null;

  constructor() {
    this.users = {
      firstName: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      username: '2jhonsito',
      bloodGroup: 'A+',
    };
  }

}
