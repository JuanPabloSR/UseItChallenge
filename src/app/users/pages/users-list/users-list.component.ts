import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/interfaces/users-response-interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements AfterViewInit, OnInit {
  usersDataSource: MatTableDataSource<User> =
    new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'options'];
  searchControl: FormControl = new FormControl();
  isLoading: boolean = false;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private usersService: UsersService
  ) {}
  ngOnInit(): void {
    this.loadUsers();
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.usersDataSource.sort = this.sort;
  }

  loadUsers(){
    this.isLoading = true;

    this.usersService.getUsers().subscribe((response: any) => {
      this.usersDataSource.data = response.users;
      this.isLoading = false;
    })
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  clearSearch() {
    this.searchControl.setValue('');
  }
}
