import { Component, OnInit } from '@angular/core';
import { Usuario } from "app/models/usuario";
import { Router, ActivatedRoute} from "@angular/router";
import { AlertService } from "app/services/alert.service";
import { PropertiesService } from "app/services/properties.service";
import * as global from '../shared/global';
import { AuthService } from "app/security/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading: boolean;
    static _plataforma = global.plataforma;
    public isRequesting: boolean;
    usuario: Usuario;

  constructor(private authService: AuthService, 
              private router: Router,
              private route: ActivatedRoute,
              private alertService: AlertService, 
              private _proper: PropertiesService) { }

  ngOnInit() {
    this.authService.logout();
    this.usuario = new Usuario();
    this._proper.carregaArquivoProperties();
  

this.router.navigate(['/home']);

}

  login(usuario: any) {
    console.log(usuario);
    if (usuario === undefined) {
      this.alertService.error('Usuário ou senha inválidos');
      return this.loading = false;
    }
   // usuario.plataforma = LoginComponent._plataforma;
   /* this.authService.autentica(usuario).subscribe(resp1 => {
      //if (resp1) {
        //var usuario = resp1;
       // window.sessionStorage.setItem(global.userSession, JSON.stringify(usuario));
        this.router.navigate(['/home']);
        this.alertService.success('sucesso');
     // }
   // }, (err) => {
      try {
        this.alertService.error('Usuário ou senha inválidos');
        this.loading = false;
      } catch (err) {
        this.alertService.error('Usuário ou senha inválidos');
        this.loading = false;
        console.log(err);
      }
    });*/
  }
}