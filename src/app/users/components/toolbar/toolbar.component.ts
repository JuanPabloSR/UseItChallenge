import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl('/auth/login', { replaceUrl: true });

  }
}
