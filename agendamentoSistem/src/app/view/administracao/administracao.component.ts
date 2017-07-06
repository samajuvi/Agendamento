import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AdministracaoController } from "app/controllers/AdministracaoController";

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css']
})
export class AdministracaoComponent implements OnInit {
resultadoAdministracao : any = [];

  constructor(private http: Http, private controller: AdministracaoController) { }

  ngOnInit() {
        this.getConsultaAdministracao();

  }

  getConsultaAdministracao(){
    console.log("antes da função dados");
    this.controller.getConsultaAdministracao().subscribe(res => {
    this.resultadoAdministracao = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoAdministracao));
    });
    
  }
}
