import { Component, OnInit } from '@angular/core';
import { PlataformaService } from "app/services/plataforma.service";
import { UsuarioService } from "app/services/usuario.service";
import { Router } from '@angular/router';
import { AlertService } from "app/services/alert.service";


@Component({
  selector: 'app-aba-permissoes',
  templateUrl: './aba-permissoes.component.html',
  styleUrls: ['./aba-permissoes.component.css']
})
export class AbaPermissoesComponent implements OnInit {

  plataformas = new Array();

  plataformasUsuario = new Array();

  constructor(private service:PlataformaService,
              private usuarioService:UsuarioService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {

    var usuario = this.usuarioService.getUsuarioSelecionado();

    // if (usuario == undefined) {
    //   this.router.navigate(['dashboard/usuarios']);
    // }

    console.log(usuario);
    console.log('aba permissoes component...');

    if (usuario != undefined) {
      this.plataformasUsuario = usuario.plataformas;
    } else {
      this.plataformasUsuario = new Array();
    }


    this.service.listar()
      .subscribe(res => {
        console.log('buscando plataformas no servidor');
        console.log(res);
        
        this.plataformas = res
      });

        
      
  }

  atualizarPlataforma(event) {
    console.log('emiter');
    console.log(this.plataformasUsuario);
  }

  salvarAlteracoes () {
    console.log(this.plataformasUsuario);

    var usuario = this.usuarioService.getUsuarioSelecionado();

    usuario.plataformas = this.plataformasUsuario;

    var result;
    result = this.usuarioService.adicionar(usuario)
      .subscribe(
        data => {
          console.log('sucesso no login');
          this.alertService.success('Usuário atualizado com sucesso');
        },
        error => {
          console.log('erro no login');
          this.alertService.error('Ocorreu um erro ao tentar atualizar o usuário.');
        }
      );
  }

}
