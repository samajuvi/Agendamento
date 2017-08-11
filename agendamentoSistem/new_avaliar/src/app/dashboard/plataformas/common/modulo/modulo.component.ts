import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Modulo } from "app/model/modulo";
import { Funcionalidade } from "app/model/funcionalidade";

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  @Input() modulo: Modulo = new Modulo();

  @Output() remover = new EventEmitter();
  funcionalidades: Array<Funcionalidade> = new Array(); 

  constructor() { }

  ngOnInit() {
    console.log('dentro do componente de modulo');
    console.log(this.modulo);
    if (this.modulo.funcionalidades.length > 0) {
      this.funcionalidades = this.modulo.funcionalidades;
    }

  }

  atualizarFuncionalidades (funcionalidades) {
    console.log('recebendo o evento do emitter de funcionaldiade');
    console.log(funcionalidades);
    this.modulo.funcionalidades = funcionalidades;
  }

  excluirModulo() {
    this.remover.emit(this.modulo);
  }

}
