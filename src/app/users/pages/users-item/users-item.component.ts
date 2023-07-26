import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/users-response-interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css'],
})
export class UsersItemComponent implements OnInit {
  isLoading: boolean = false;
  users: User | null = null;
  usersId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.usersId = +params['id'];
      this.loadUsers();
    });
  }

  loadUsers() {
    this.isLoading = true;
    this.usersService.getUsersId(this.usersId).subscribe(
      (response) => {
        this.users = response;
        this.isLoading = false;

      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }
}
