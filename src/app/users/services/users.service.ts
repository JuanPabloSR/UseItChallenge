import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOptions } from 'src/app/interfaces/filter-options-interface';
import { UsersReponse } from 'src/app/interfaces/users-response-interface';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.URL_API;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(filter: FilterOptions): Observable<UsersReponse> {
    const { count, page, keyword } = filter;
    const skip: number = page * count - count;
    const params = new HttpParams()
      .set('limit', count)
      .set('skip', skip)
      .set('q', keyword);

    return this.http.get(`${BASE_URL}/users/search`, { params });
  }

  getUsersId(usersId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/users/${usersId}`);
  }
}
