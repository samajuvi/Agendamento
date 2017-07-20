import { Http, Headers } from "@angular/http";
import { AppConfig } from "../config/appConfig";
import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AgendamentoController { 
  constructor(private _http: Http){ }
  
  getAgendamento() {
    let baseUrl = 'http://localhost:3000/agendamentos';
    console.log("URL ", baseUrl);
    return this._http.get(baseUrl).map(res => res.json());
  }

  getEspera() {
    let baseUrl = 'http://localhost:3000/espera';
    console.log("URL ", baseUrl);
    return this._http.get(baseUrl).map(res => res.json());
  }

  getResumo(dados) {
    let baseUrl = 'http://localhost:3000/resumo'+ dados;
    console.log("URL ", baseUrl);
    return this._http.get(baseUrl).map(res => res.json());
  }

}


