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

  /**
 * Obtiene una lista de users utilizando los criterios de filtro proporcionados.
 * @param filter Los criterios de filtro para la consulta de users.
 * 
 * Se uso una operación simple para implementar la paginacion correctamente,
 * Ya que el backend no contaba con un filtro de paginas, pero si de skip consultas
 * si estamos en la página 2 y hay 10 elementos por página,
 * queremos omitir los primeros 10 elementos (página 1) y mostrar los siguientes 10 elementos (página 2).
 * 
 * @returns Un Observable que emite un objeto User.
 */
  getUsers(filter: FilterOptions): Observable<UsersReponse> {
    const { count, page, keyword } = filter;
    const skip: number = page * count - count;
    const params = new HttpParams()
      .set('limit', count)
      .set('skip', skip)
      .set('q', keyword);

    return this.http.get(`${BASE_URL}/users/search`, { params });
  }

  /**
   * Obtiene los detalles de un user por su ID.
   * @param usersId El ID del user.
   * @returns Un Observable que emite los detalles del user.
   */
  getUsersId(usersId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/users/${usersId}`);
  }
}
