import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/security/auth.service";
import { UsuarioLogado } from "app/models/usuario-logado";
import { Router } from "@angular/router";
import * as global from '../../shared/global';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  usuario:any;
  
  plataformas: any;
  modulos: any;
  

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.montaMenu();
    this.usuario = global.recuperaUsuarioSession();
    if (this.usuario) {
      if (this.usuario.email) {
        this.router.navigate(['/home']);
      }
    }
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public montaMenu() {
    this.plataformas = global.recuperaMenuSession();
    this.modulos = [];
    for (var i = 0; i < this.plataformas.length; i++) {
      if (this.plataformas[i].nome == global.plataforma) {
        this.modulos = this.plataformas[i].modulos;
      }
    }
  }

  logout()  {
    console.log('chamando logout');
    this.authService.logout();
  }

  

}