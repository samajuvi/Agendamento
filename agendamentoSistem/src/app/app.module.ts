import { DetalharRegrasController } from './controllers/DetalharRegrasController';
import { DetalharMeusAgendamentosController } from './controllers/DetalharMeusAgendamentosController';
import { FilaEsperaComponent } from './view/fila-espera/fila-espera.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { DatasDisponiveisComponent } from './view/datas-disponiveis/datas-disponiveis.component';
import { MeusAgendamentosComponent } from './view/agendamento/meus-agendamentos.component';
import { AdministracaoComponent } from './view/administracao/administracao.component';
import { DetalharComponent } from './view/detalhar/detalhar.component';
import { AgendamentoController} from './controllers/AgendamentoController';
import { DetalharController} from './controllers/DetalharController';
import { DatasController} from './controllers/DatasController';
import { FilaEsperaController } from './controllers/FilaEsperaController';
import { routing } from './app.routing';
//import { DetalharFilaEsperaComponent } from './view/detalhar-fila-espera/detalhar-fila-espera.component';
import { DetalharMeusAgendamentosComponent } from './view/detalhar-meus-agendamentos/detalhar-meus-agendamentos.component';
import { DetalharRegrasComponent } from './view/detalhar-regras/detalhar-regras.component';
//import { DetalharFilaEsperaController} from './controllers/DetalharFilaEsperaController';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatasDisponiveisComponent,
    MeusAgendamentosComponent,
    AdministracaoComponent,
    FilaEsperaComponent,
    DetalharComponent,
    //DetalharFilaEsperaComponent,
    DetalharMeusAgendamentosComponent,
    DetalharRegrasComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  
  ],

  providers: [
    AgendamentoController,
    DatasController,
    DetalharController,
    FilaEsperaController,
    //DetalharFilaEsperaController,
    DetalharMeusAgendamentosController,
    DetalharRegrasController
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
