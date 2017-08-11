import { Component, OnInit, Input, OnChanges, Output, EventEmitter  } from '@angular/core';
import { Plataforma } from "app/model/plataforma";
import { Funcionalidade } from "app/model/funcionalidade";
import { Modulo } from "app/model/modulo";

@Component({
  selector: 'app-permissoes',
  templateUrl: './permissoes.component.html',
  styleUrls: ['./permissoes.component.css']
})
export class PermissoesComponent implements OnInit {

  @Input() plataforma: Plataforma = new Plataforma();

  @Input() plataformasUsuario =  new Array();

  @Output() atualizar = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  atualizarPermissao(plataforma, modulo, funcionalidade, evento) {

    if (evento.srcElement.checked) {
      this.adicionarPermissao(plataforma, modulo, funcionalidade);
    } else {
      this.removerPermissao(plataforma, modulo, funcionalidade);
    }

    this.atualizar.emit(this.plataformasUsuario);

  } 

  adicionarPermissao (plataforma, modulo, funcionalidade) { 

    var plataformaLocalizada = this.plataformasUsuario.filter(item => item.nome == plataforma.nome)[0];
   
    if (plataformaLocalizada == undefined) {
      var plat = this.buildPlataforma(plataforma, modulo, funcionalidade);
      this.plataformasUsuario.push(plat);
    } else {
      // a plataforma existe, adicionar novo modulo ou nova funcionalidade.
      var modulos = plataformaLocalizada.modulos;
      var moduloLocalizado = modulos.filter(item => item.nome == modulo.nome)[0];

      //Não existe o módulo selecionado.
      if (moduloLocalizado == undefined) {
        console.log(plataformaLocalizada);
        var mod = this.buildModulo(modulo, funcionalidade);
        this.plataformasUsuario.filter(item => item.nome == plataforma.nome)[0].modulos.push(mod);
      } else {
        //Módulo Existe adicionar apenas a funcionalidade.
        var func = this.buildFuncionalidade(funcionalidade);
        this.plataformasUsuario.filter(item => item.nome == plataforma.nome)[0].modulos.filter(item => item.nome == modulo.nome)[0].funcionalidades.push(func);
      }
      
    }

  }

  removerPermissao (plataforma, modulo, funcionalidade) { 

    var pE = this.plataformasUsuario.filter(item => item.nome == plataforma.nome)[0];
    var indexPlataforma = this.plataformasUsuario.indexOf(pE);

    var mE = this.plataformasUsuario.filter(item => item.nome == plataforma.nome)[0].modulos
      .filter(item => item.nome == modulo.nome)[0];
    
    var indexModulo = this.plataformasUsuario[indexPlataforma].modulos.indexOf(mE);

    var fe = this.plataformasUsuario.filter(item => item.nome == plataforma.nome)[0].modulos.filter(item => item.nome == modulo.nome)[0].funcionalidades.filter(item => item.nome == funcionalidade.nome)[0];

    var indexFuncionalidade = this.plataformasUsuario[indexPlataforma].modulos[indexModulo].funcionalidades.indexOf(fe);

    var funcionalidadesDoModulo = this.plataformasUsuario.filter(item => item.nome == plataforma.nome)[0].modulos
      .filter(item => item.nome == modulo.nome)[0].funcionalidades;

    funcionalidadesDoModulo.splice(indexFuncionalidade, 1);

    this.plataformasUsuario[indexPlataforma].modulos[indexModulo].funcionalidades = funcionalidadesDoModulo;
  }

  buildPlataforma (plataforma, modulo, funcionalidade) {

    var mod = this.buildModulo(modulo, funcionalidade);

    var plat = new Plataforma();
    plat.nome = plataforma.nome;
    plat.modulos.push(mod);

    return plat;
  }

  buildModulo (modulo, funcionalidade) {
    var func = this.buildFuncionalidade(funcionalidade);

    var mod = new Modulo();
    mod.nome = modulo.nome;
    mod.rota = modulo.rota;
    mod.funcionalidades.push(func);

    return mod;
  }
  buildFuncionalidade (funcionalidade) {
    var func = new Funcionalidade();
    func.nome = funcionalidade.nome;
    func.rota = funcionalidade.rota;
    return func;
  }


  verificaSeTemPermissao (plataforma, modulo, funcionalidade) {

    var plataformaLocalizada = this.plataformasUsuario.filter(item => item.nome == plataforma.nome)[0];

    if (plataformaLocalizada != undefined) {
      var modulos = plataformaLocalizada.modulos;
      
      var moduloLocalizado = modulos.filter(item => item.nome == modulo.nome)[0];

      if (moduloLocalizado != undefined) {
        var funcionalidades = moduloLocalizado.funcionalidades;

        var func = funcionalidades.filter(item => item.nome == funcionalidade.nome)[0];

        if (func != undefined) {
          return true;
        }

      }
    }
    return false;
  }

}
