import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AppConfig } from "app/app.config";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ObitoService {

   
  endPointConsulta ="consultardocs";
  endPointinsere = "inserirdocs";
  interval:number = 3000;

    //registraPlataforma = "registraPlataforma/";

    token=  '?gw-app-key=5e9c4d6013e60135e6590a7aff8a70b7';

    constructor(private _http: Http, private config: AppConfig) { }

     
     buscaDocumentos(){
    var urlGravameUrl = this.config.gravameUrl + this.endPointConsulta;
    return this._http.get(urlGravameUrl).map(res=>res.json());
     }
     
     inserirDocumentos(){
    var urlGravameUrl = this.config.gravameUrl + this.endPointinsere;
    //---------------------**************
    return this._http.get(urlGravameUrl).map(res=>res.json());
     }

}