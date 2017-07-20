
import { AppConfig } from './../../config/AppConfig';
import { Component, OnInit } from '@angular/core';
import { AgendamentoController } from '../../controllers/AgendamentoController';
import { Http, Headers } from "@angular/http";

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.css'],
  providers:[AgendamentoController]
})
export class MeusAgendamentosComponent implements OnInit {
  
  resultadoAgendamento : any = [];
  resultadoListaEspera : any = [];
  resultadoRegra : any = [];
  resultadoResumo : any = [];
  
  

  constructor(private http: Http, private controller: AgendamentoController) { }

  ngOnInit() {
        this.getResumo();
  }

  getAgendamento(){
    console.log("antes da função dados");
    this.controller.getAgendamento().subscribe(res => {
    this.resultadoAgendamento = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoAgendamento));
  });
    }
 
    getEspera(){
    console.log("antes da função dados");
    this.controller.getEspera().subscribe(res => {
    this.resultadoListaEspera = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoListaEspera));
  });
    }
   
    getResumo(){
    console.log("antes da função dados");
    this.controller.getResumo('/1/3').subscribe(res => {
    this.resultadoResumo = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoResumo));
  });
   
  }


}
