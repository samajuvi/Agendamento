import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import * as global from '../shared/global';
import { AuxiliarService } from "app/services/AuxiliarService";

@Injectable()
export class AuthGuard implements CanActivate {

  isAcessoValid: Boolean;
 
    constructor(private router: Router, private _aux: AuxiliarService) { }
 
    canActivate(rota: any) {
        console.log(rota);
        var rota = rota.url[0].path;
        var rotaPermitida = this.verificaRotaPermitida(rota);
        if (rotaPermitida) {
            var usuario = global.recuperaUsuarioSession();
            if (usuario.email) {
                this.isAcessoValid = this.getCacheLogin(usuario.email);
                if (this.getCacheLogin(usuario.email)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                // not logged in so redirect to login page
                this.router.navigate(['/']);
                return false;
            }
        } else {
            return false;
        }
    }
 
    public getCacheLogin(chave: any) {
        var isOk = this._aux.getCacheLogin(chave);
        if (isOk) {
            return true;
        } else {
            return false;
        }
    }
 
    public verificaRotaPermitida(rota: any) {
        var funcs = global.recuperaRotasPermitidasSession();
        console.log(funcs)
        var rotaPermitida = false;

         if (funcs === undefined) {
            return rotaPermitida;
        }
        funcs.forEach(function (item) {

            console.log(item);
            console.log(item.rota);
            console.log(rota);

            if (item.rota == rota) {
                rotaPermitida = true;
            }
        });

        console.log(rotaPermitida);
        return rotaPermitida;
    }
}