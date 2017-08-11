import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import * as global from '../shared/global';
import * as moment from 'moment/moment';
 
 
@Injectable()
export class AuxiliarService {
 
    private addUrl: string;
    private userCache: any;
    private retorno: any;
 
    constructor(private http: Http) {
        this.retorno = global.recuperaPropertiesSession();
        if (this.retorno) {
            this.addUrl = "http://localhost:8181";//this.retorno.urlGtaService;
        }
    }
 
    getURL() {
        return this.addUrl;
    }
 
    getAuth() {
        this.userCache = this.getCache();
        if (this.userCache) {
            return this.userCache;
        } else {
            return null;
        }
    }
 
    getCache() {//pegar token do cache, e enviar como cabeçalho nos serviços
        var usuario = global.recuperaUsuarioSession();
        if (usuario) {
            return this.getCacheLogin(usuario.email);
        } else {
            console.log('Token inválido');
            return null;
        }
    }
 
    verificaCache(chave: any): Observable<any> {
        var urlCache = this.retorno.urlCache;
        var label = this.retorno.labelCacheLogin;
 
        return this.http.get(urlCache + label + chave).map(res => res.json()).catch(this.handleError);
    }
 
    getCacheLogin(chave: any) {
        return this.verificaCache(chave).subscribe(resp1 => {
            if (this.isTokenValid(resp1)) {
                return true;
            } else {
                return false;
            }
        }, (err) => {
            try {
                console.log(err.json().mensagem);
                return false;
            } catch (err) {
                console.log(err);
                return false;
            }
        });
    }
 
    isTokenValid(resp: any) {
        if (resp) {
            return moment().isBefore(moment(resp.expires));
        } else {
            return false;
        }
    }
 
    private handleError(error: any): Promise<any> {
        console.error('an error occured', error); //for demo purposes only
        return Promise.reject(error.message || error);
    }
}