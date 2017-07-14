import { Http, Headers } from "@angular/http";
import { AppConfig } from "../config/appConfig";
import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DetalharMeusAgendamentosController { 
  constructor(private _http: Http){ }
  
  getDatasDisponiveis() {
    let baseUrl = 'http://localhost:3000/resumohorario';
    console.log("URL ", baseUrl);
    return this._http.get(baseUrl).map(res => res.json());
  }

}


