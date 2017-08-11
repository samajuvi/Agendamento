import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from "app/model/usuario";
import { UsuarioService } from "app/services/usuario.service";
import { AlertService } from "app/services/alert.service";

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.css']
})
export class AdicionarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  AbaDadosAtivo = "active";

  AbaPermissoesAtivo = ""

  constructor(private service:UsuarioService,
              private alertService: AlertService) { }

  ngOnInit() {
    var usuarioSelecionado = this.service.getUsuarioSelecionado();      
    console.log(usuarioSelecionado);
    if (usuarioSelecionado != undefined) {
      this.usuario = usuarioSelecionado;
    }
  }



  ngOnDestroy() {
    this.service.setUsuarioSelecionado(null);
  }


  ativarAba (aba) {
    //aba = "permissoes";
    console.log('======');
    console.log(aba);
    if (aba == "permissoes") {
      this.AbaPermissoesAtivo = "active";
      this.AbaDadosAtivo = "";
    } else {
      this.AbaPermissoesAtivo = "";
      this.AbaDadosAtivo = "active";
    }
  }

  atualizarUsuario(usuario: Usuario) {
    console.log('emitter ....');
    console.log(usuario);
    var result;
    result = this.service.adicionar(usuario)
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
