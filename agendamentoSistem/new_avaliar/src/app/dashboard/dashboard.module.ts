import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from "app/dashboard/dashboard-routing.module";
import { DashboardService } from "app/services/dashboard.service";
import { DatePipe } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';
import { OrderByPipe } from "app/pipes/order-by.pipe";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdicionarUsuarioComponent } from './usuarios/adicionar-usuario/adicionar-usuario.component';
import { FormsModule } from "@angular/forms";
import { PermissoesComponent } from './usuarios/common/permissoes/permissoes.component';
import { DadosPessoaisComponent } from './usuarios/common/dados-pessoais/dados-pessoais.component';
import { PlataformasComponent } from './plataformas/plataformas.component';
import { AdicionarPlataformaComponent } from './plataformas/adicionar-plataforma/adicionar-plataforma.component';
import {RlTagInputModule} from 'angular2-tag-input';
import { FuncionalidadeComponent } from './plataformas/common/funcionalidade/funcionalidade.component';
import { ModuloComponent } from './plataformas/common/modulo/modulo.component';
import { Slugifyer } from "app/services/slugifyer.service";
import { PlataformaComponent } from "app/dashboard/plataformas/common/plataforma/plataforma.component";
import { PlataformaService } from "app/services/plataforma.service";
import { UsuarioService } from "app/services/usuario.service";
import { AbaPermissoesComponent } from './usuarios/common/aba-permissoes/aba-permissoes.component';
import { AlertService } from "app/services/alert.service";
import { AlertComponent } from "app/comuns/alert/alert.component";

import { AlertModule } from 'ngx-bootstrap';
import { AlerttagComponent } from './common/alerttag/alerttag.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    RlTagInputModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot()
  ],
  declarations: [
    OrderByPipe, 
    UsuariosComponent, 
    AdicionarUsuarioComponent, 
    PermissoesComponent, 
    DadosPessoaisComponent, 
    PlataformasComponent, 
    PlataformaComponent, 
    AdicionarPlataformaComponent, 
    FuncionalidadeComponent, 
    ModuloComponent, 
    AbaPermissoesComponent, AlerttagComponent
  ],
  providers: [ 
    AlertService, 
    DashboardService, 
    DatePipe, 
    Slugifyer, 
    PlataformaService, 
    UsuarioService
  ]
})
export class DashboardModule { }
