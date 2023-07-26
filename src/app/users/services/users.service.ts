import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOptions } from 'src/app/interfaces/filter-options-interface';
import { User, UsersReponse } from 'src/app/interfaces/users-response-interface';

const BASE_URL = 'https://dummyjson.com';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(filter: FilterOptions):Observable<UsersReponse>{
    const {  count, page, keyword  } = filter;
    const skip: number=(page*count)-count;
    const params = new HttpParams()
    .set('limit', count)
    .set('skip', skip)
    .set('keyword', keyword)

    return this.http.get(`${BASE_URL}/users`, {params})
  }

  getUsersId(usersId: number):Observable<any>{
    return this.http.get(`${BASE_URL}/users/${usersId}`)
  }
}
