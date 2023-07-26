import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/users-response-interface';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.css'],
})
export class UsersItemComponent implements OnInit {
  isLoading: boolean = false;
  users: User | null = null;
  usersId: number = 0;
  errorRequest: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private snackBar: MatSnackBar
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
        this.errorRequest = 'Error Request';
        this.snackBar.open(this.errorRequest, 'Close', {
          duration: 2000,
        });
      }
    );
  }
}
