import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from "app/model/usuario";

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  @Input() usuario:Usuario = new Usuario();

  @Output() dadosAtualizados = new EventEmitter();
 
  constructor() { }

  ngOnInit() {
  }

  salvarDadosBasicos () {
    this.dadosAtualizados.emit(this.usuario);
  }

}
