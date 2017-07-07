

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
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatasDisponiveisComponent,
    MeusAgendamentosComponent,
    AdministracaoComponent,
    DetalharComponent
    
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
    DetalharController
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
