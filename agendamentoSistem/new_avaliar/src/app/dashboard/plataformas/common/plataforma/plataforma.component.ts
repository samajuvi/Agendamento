import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Plataforma } from "app/model/plataforma";
import { Modulo } from "app/model/modulo";
import { Funcionalidade } from "app/model/funcionalidade";
import { Slugifyer } from "app/services/slugifyer.service";

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  hideInputNomeFuncionalidade = true;
  hideInputNomeModulo = true;

  tags = [];
  nomePlataforma: string;
  nomeModulo: string;
  nomeFuncionalidade: string;

  moduloSelecionado: Modulo;

  @Input() plataforma: Plataforma = new Plataforma();

  @Output() alterarDados = new EventEmitter();

  created = false;

  constructor(private slugifyer: Slugifyer) { }

  ngOnInit() {

    console.log(this.plataforma);
    console.log(this.plataforma.nome);
    if (this.plataforma.nome != undefined) {
      this.created = true;
    }
  }

  private handleKeyDownPlataforma(event: any) {
    if (event.keyCode == 13) {
      this.adicionarPlataforma();
    }
  }

  private handleKeyDown(event: any) {
    if (event.keyCode == 13) {
      console.log('enter pressed .... ');
      var modulo = new Modulo();
      modulo.nome = this.nomeModulo;
      modulo.rota = this.slugifyer.slugify(this.nomeModulo);
      console.log(modulo)
      if (this.plataforma.modulos != undefined && this.plataforma.modulos.length > 0) {
        this.plataforma.modulos.unshift(modulo);
      } else {
        this.plataforma.modulos.push(modulo);
      }
      this.nomeModulo = "";
      this.hideInputNomeModulo = true;
      console.log(this.plataforma);
    }
  }


  exibirInputModulo() {
    this.nomeModulo = "";
    this.hideInputNomeModulo = false;
  }

  adicionarPlataforma() {
    console.log('adicionar plataforma');
    this.plataforma.nome = this.nomePlataforma;
    this.created = true;
  }

  exibirInputFuncionalidade(modulo: Modulo) {
    this.nomeFuncionalidade = "";
    this.hideInputNomeFuncionalidade = false;
    this.moduloSelecionado = modulo;
  }

  removerModulo(modulo) {
      this.plataforma.modulos = this.plataforma.modulos.filter(item => item.nome !== modulo.nome);
  }

  salvarAlteracoes() {
    console.log("-----");
    console.log(this.plataforma);
    this.alterarDados.emit(this.plataforma);
  }

}
