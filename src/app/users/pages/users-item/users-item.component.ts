import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  User,
  UsersReponse,
} from 'src/app/interfaces/users-response-interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css'],
})
export class UsersItemComponent implements OnInit {
  users: User | null = null;
  usersId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.usersId = +params['id'];
      this.loadUsers();
    });
  }

  loadUsers() {
    this.usersService.getUsersId(this.usersId).subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }
}
