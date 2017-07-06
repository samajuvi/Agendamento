

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { DatasDisponiveisComponent } from './view/datas-disponiveis/datas-disponiveis.component';
import { MeusAgendamentosComponent } from './view/agendamento/meus-agendamentos.component';
import { AdministracaoComponent } from './view/administracao/administracao.component';
import { AgendamentoController} from './controllers/AgendamentoController';
import { DatasController} from './controllers/DatasController';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatasDisponiveisComponent,
    MeusAgendamentosComponent,
    AdministracaoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AgendamentoController,
    DatasController
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
