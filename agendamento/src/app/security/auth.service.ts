import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Router, NavigationStart } from "@angular/router";
import { AuxiliarService } from "app/services/AuxiliarService";
import { AuthInfo } from "app/security/auth-info";
import * as moment from 'moment/moment';
import * as global from 'app/shared/global';

@Injectable()
export class AuthService {
  
  private addUrl: string;
  private addURI: string;
  private headers = new Headers();
  isAcessoValid: Boolean;

  static UNKNOWN_USER = new AuthInfo(null);

  authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

  constructor(private _http: Http, private _aux: AuxiliarService, private router: Router) {
      this.addUrl = this._aux.getURL();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('authorization', this._aux.getAuth());
  }

  autentica(usuario: any): Observable<any> {
        this.addURI = '/login/';
        return this._http.post(this.addUrl + this.addURI, usuario, this.headers).map(res => res.json()).catch(this.handleError);
    }
 
    private handleError(error: any): Promise<any> {
        console.error('an error occured', error); //for demo purposes only
        return Promise.reject(error.message || error);
    }

  logout() {
    console.log('chamando logout');
    window.sessionStorage.removeItem(global.userSession);
    this.router.navigate(['/']);
  }
  
}