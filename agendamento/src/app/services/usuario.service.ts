import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { AppConfig } from "app/app.config";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Usuario } from "app/model/usuario";

@Injectable()
export class UsuarioService {

    endPointlistar = "usuario";

    endPointAdicionar = "registraUsuario";

    public usuarioSelecionado : Usuario;
    

    constructor(private _http: Http, private config: AppConfig) { }

    adicionar (usuario: any) {
        let body = JSON.stringify(usuario);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.config.mongoAPI + this.endPointAdicionar + "/"
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

    public getUsuarioSelecionado(): Usuario {
        return this.usuarioSelecionado;
    }

    public setUsuarioSelecionado(usuario: any): void {
        this.usuarioSelecionado = usuario;
    }

}
