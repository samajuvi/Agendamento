
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
  resultadoAgendadoHoje : any = [];
  resultadoHorarioDisponivel : any = [];
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
  

    getAgendadoHoje(){
    console.log("antes da função dados");
    this.controller.getAgendadoHoje().subscribe(res => {
    this.resultadoAgendadoHoje = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoAgendadoHoje));
  });
    }

    getHorarioDisponivel(){
    console.log("antes da função dados");
    this.controller.getHorarioDisponivel().subscribe(res => {
    this.resultadoHorarioDisponivel = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoHorarioDisponivel));
  });
    }
    getEspera(){
    console.log("antes da função dados");
    this.controller.getEspera().subscribe(res => {
    this.resultadoListaEspera = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoListaEspera));
  });
    }
   
    getRegra(){
    console.log("antes da função dados");
    this.controller.getEspera().subscribe(res => {
    this.resultadoRegra = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoRegra));
  });
    }

    getResumo(){
    console.log("antes da função dados");
    this.controller.getResumo().subscribe(res => {
    this.resultadoResumo = res[0];
    console.log("depois da função, resposta: "+ JSON.stringify(this.resultadoResumo));
  });
   
  }

    exibeAbertos() {
       window.location.href = "/meus-agendamentos.component.1.html";
    }


}
