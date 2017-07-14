import { AppConfig } from './../../config/AppConfig';
import { Component, OnInit } from '@angular/core';
import { DetalharController } from '../../controllers/DetalharController';
import { Http, Headers } from "@angular/http";


@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar-fila-espera.component.html',
  styleUrls: ['./detalhar-fila-espera.component.css'],
  providers:[DetalharController]
})
export class DetalharFilaEspelaController implements OnInit {


 resultadoDetalhe : any = [];

   constructor(private http: Http, private controller: DetalharController) { }

  ngOnInit() {
    this.getDetalhamento();
  }


 getDetalhamento(){
    console.log("antes da função dados");
    this.controller.getDetalhamento().subscribe(res => {
    this.resultadoDetalhe = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoDetalhe));
  });
    }

}

@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'detalhar.component.html',
})
export class SlideToggleOverviewExample {}