import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plataforma } from "app/model/plataforma";
import { PlataformaService } from "app/services/plataforma.service";
import { AlertService } from "app/services/alert.service";

@Component({
  selector: 'app-adicionar-plataforma',
  templateUrl: './adicionar-plataforma.component.html',
  styleUrls: ['./adicionar-plataforma.component.css']
})
export class AdicionarPlataformaComponent implements OnInit {

  plataforma: Plataforma = new Plataforma();

  constructor(private service: PlataformaService,
              private alertService: AlertService) { }

  ngOnInit() {

    var plataformaSelecionada = this.service.getPlataformaSelecionada();      
    console.log(plataformaSelecionada);
    if (plataformaSelecionada != undefined) {
      this.plataforma = plataformaSelecionada;
    }
  }

  ngOnDestroy() {
    this.service.setPlataformaSelecionada(null);
  }

  atualizarPlataforma(plataforma: Plataforma) {
    console.log('emitter ....');
    console.log(plataforma);
    var result;
    result = this.service.adicionar(plataforma)
      .subscribe(
        data => {
          this.alertService.success('Dados alterados com sucesso.');
        },
        error => {
          this.alertService.error('Ocorreu um erro ao realizar as alterações.');
        }
      );

  }
}
