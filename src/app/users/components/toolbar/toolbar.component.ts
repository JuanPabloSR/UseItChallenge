import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() showBackButton: boolean = false;
  isSmallScreen: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService

  ) {}

  ngOnInit(): void {
    this.checkScreenSize();

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 768;
  }


  public signOut(): void {
    this.authService.logout();

  }
}
