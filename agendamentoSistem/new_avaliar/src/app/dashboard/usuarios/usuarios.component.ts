import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "app/services/usuario.service";
import { Router } from '@angular/router';
import { Usuario } from "app/model/usuario";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = new Array(); 

  constructor(private service:UsuarioService, private router: Router) { }

  ngOnInit() {
    this.service.listar()
      .subscribe(res => {
        console.log(res);
        this.usuarios = res
        console.log(res);
      });
  }

  selecionar (usuario) {
    console.log(usuario);
    this.service.setUsuarioSelecionado(usuario);
    this.router.navigate(['dashboard/usuario']);
  }

}
