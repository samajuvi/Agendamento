import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AppConfig } from "app/app.config";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class DashboardService {

    interval:number = 5000;

    registraPlataforma = "registraPlataforma/";

    token=  '?gw-app-key=5e9c4d6013e60135e6590a7aff8a70b7';

    constructor(private _http: Http, private config: AppConfig) { }

    adicionarPlataforma (data: string) {
        var url = this.config.mongoAPI + this.registraPlataforma + "/"
        return this._http.post( url + this.token, data)
            .map(res => res.json());
    }

}
