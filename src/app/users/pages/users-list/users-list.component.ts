import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/interfaces/users-response-interface';
import { FilterOptions } from 'src/app/interfaces/filter-options-interface';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements AfterViewInit, OnInit {
  usersDataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'age', 'details'];
  pageSizeOptions: number[] = [5, 10, 25, 50];
  totalUsers: number = 0;
  searchControl: FormControl = new FormControl();
  isLoading: boolean = false;

  filterOptions: FilterOptions = {
    page: 1,
    count: 10,
    keyword: '',
  };

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => {
        this.filterOptions.page = 1;
        this.applyFilter();
      });
    this.loadUsers();
  }

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.usersDataSource.sort = this.sort;
  }

  loadUsers() {
    this.isLoading = true;

    this.usersService
      .getUsers(this.filterOptions)
      .subscribe((response: any) => {
        this.usersDataSource.data = response.users;
        this.totalUsers = response.total;
        this.isLoading = false;
      });
  }

  onPageChange(event: any) {
    this.paginator.pageIndex = event.pageIndex;
    this.filterOptions.page = event.pageIndex + 1;
    this.filterOptions.count = event.pageSize;
    this.loadUsers();
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter() {
    const filterValue = this.searchControl.value.trim().toLowerCase();
    this.filterOptions.keyword = filterValue;
    this.loadUsers();
  }

  clearSearch() {
    this.searchControl.setValue('');
  }
}
