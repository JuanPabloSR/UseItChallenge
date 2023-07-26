import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersReponse } from 'src/app/interfaces/users-response-interface';

const BASE_URL = 'https://dummyjson.com';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers():Observable<UsersReponse>{
    return this.http.get(`${BASE_URL}/users`)
  }

  getUsersId(usersId: number):Observable<any>{
    return this.http.get(`${BASE_URL}/users/${usersId}`)
  }
}
