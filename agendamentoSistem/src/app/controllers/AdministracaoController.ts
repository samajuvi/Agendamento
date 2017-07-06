import { Http, Headers } from "@angular/http";
import { AppConfig } from "../config/appConfig";
import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdministracaoController { 
  constructor(private _http: Http){ }
  
  getConsultaAdministracao() {
    let baseUrl = 'http://localhost:3000/administra';
    console.log("URL ", baseUrl);
    return this._http.get(baseUrl).map(res => res.json());
  }

  getRegra() {
    let baseUrl = 'http://localhost:3000/regras';
    console.log("URL ", baseUrl);
    return this._http.get(baseUrl).map(res => res.json());
  }

  getProcedimentos() {
    let baseUrl = 'http://localhost:3000/procedimentos';
    console.log("URL ", baseUrl);
    return this._http.get(baseUrl).map(res => res.json());
  }


}


