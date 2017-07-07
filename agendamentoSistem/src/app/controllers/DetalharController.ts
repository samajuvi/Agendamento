import { Http, Headers } from "@angular/http";
import { AppConfig } from "../config/appConfig";
import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DetalharController { 
  constructor(private _http: Http){ }
  
  getDetalhamento() {
    let baseUrl = 'http://localhost:3000/disponibilidade';
    console.log("URL ", baseUrl);
    return this._http.get(baseUrl).map(res => res.json());
  }

}


