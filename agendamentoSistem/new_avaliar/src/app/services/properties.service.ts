import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as global from 'app/shared/global';

@Injectable()
export class PropertiesService {

  key: String = "plataforma-contabilidade";
   //key: String = "gravame";
 
    private endPoint: string = 'http://util/properties?key=' + this.key;
 
    constructor(private _http: Http) { }
 
    carregaArquivoProperties() {
        if (!global.recuperaPropertiesSession()) {
            this._http.get(this.endPoint)
                .map(res => res.json()).subscribe(res => {
                    window.sessionStorage.setItem(global.propertiesDTO, JSON.stringify(res));
                }, (err) => {
                    console.log('Erro ao consultar o arquivo properties: ' + err);
                });
        }
    }

}
