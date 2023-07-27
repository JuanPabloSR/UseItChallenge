import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/users-response-interface';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
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
  ) { }

  /**
* Realiza la inicialización del componente.
* Obtiene el ID del suscriptor de los parámetros de la ruta y carga los datos del user.
*/
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.usersId = +params['id'];
      this.loadUsers();
    });
  }

  /**
   * Carga los datos del user.
   * Realiza una solicitud al servicio de users para obtener los detalles del user especificado por su ID.
   * Los detalles del user se asignan a la propiedad 'user'.
   * Muestra una alerta al usuario en caso de un error.
   */
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
