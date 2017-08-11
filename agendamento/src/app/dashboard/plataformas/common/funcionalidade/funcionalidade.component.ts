import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Funcionalidade } from "app/model/funcionalidade";
import { Slugifyer } from "app/services/slugifyer.service";

@Component({
  selector: 'app-funcionalidade',
  templateUrl: './funcionalidade.component.html',
  styleUrls: ['./funcionalidade.component.css']
})
export class FuncionalidadeComponent implements OnInit {

  tags = [];

  @Output() listaAtualizada = new EventEmitter();
  @Input() funcionalidades : Array<Funcionalidade> = new Array(); 

  constructor(private slugifyer:Slugifyer) { }

  ngOnInit() {
    console.log(this.funcionalidades.length);
    if (this.funcionalidades.length != undefined && this.funcionalidades.length > 0) {
        this.funcionalidades.forEach(element => {
          this.tags.push(element.nome);
        });
    }

  }

  tagAdicionada (tag) {
    console.log('evento de adicionar tag');
    console.log(tag);
    var func = new Funcionalidade();
    func.nome = tag;
    func.rota = this.slugifyer.slugify(tag);
    this.funcionalidades.push(func);
    console.log(this.funcionalidades);
    this.listaAtualizada.emit(this.funcionalidades);
  }

  tagRemovida(tag) {
    console.log('evento de remover tag');
    console.log(tag);
    console.log(this.funcionalidades);

    this.funcionalidades = this.funcionalidades.filter(item => item.nome !== tag);
    console.log(this.funcionalidades);
    this.listaAtualizada.emit(this.funcionalidades);
  }

}
