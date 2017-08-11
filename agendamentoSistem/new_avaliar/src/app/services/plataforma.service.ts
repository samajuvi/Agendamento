import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AppConfig } from "app/app.config";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Plataforma } from "app/model/plataforma";
@Injectable()
export class PlataformaService {

    registraPlataforma = "registraPlataforma";
    endPointlistar = "plataforma";

    public plataformaSelecionada : Plataforma;

    constructor(private _http: Http, private config: AppConfig) { }

    adicionar (plataforma: any) {
        let body = JSON.stringify(plataforma);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.config.mongoAPI + this.registraPlataforma + "/"
        return this._http.post( url /*+ this.token*/, body, {"headers":headers})
            .map(res => res.json());
    }

    listar () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.config.mongoAPI + this.endPointlistar;
        return this._http.get( url /*+ this.token*/, {"headers":headers})
            .map(res => res.json());
    }

    public getPlataformaSelecionada(): Plataforma {
        return this.plataformaSelecionada;
    }

    public setPlataformaSelecionada(plataforma: any): void {
        this.plataformaSelecionada = plataforma;
    }
    

}
