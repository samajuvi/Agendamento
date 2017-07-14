import { NgModule, ModuleWithProviders } from '@angular/core';
import { AdministracaoComponent } from './view/administracao/administracao.component';
import { MeusAgendamentosComponent } from './view/agendamento/meus-agendamentos.component';
import { LoginComponent } from './view/login/login.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { DatasDisponiveisComponent} from './view/datas-disponiveis/datas-disponiveis.component';
import { DetalharComponent} from './view/detalhar/detalhar.component';
import {FilaEsperaComponent} from './view/fila-espera/fila-espera.component';
//import {DetalharFilaEsperaComponent} from './view/detalhar-fila-espera/detalhar-fila-espera.component';
import {DetalharMeusAgendamentosComponent} from './view/detalhar-meus-agendamentos/detalhar-meus-agendamentos.component';
import {DetalharRegrasComponent} from './view/detalhar-regras/detalhar-regras.component';

export const APP_ROUTES: Routes = [
  {
      path: '',
      component: LoginComponent,
      data: {
        title: 'Tela de Login'
    }
  },
  
  {
      path: 'agendamento',
      component: MeusAgendamentosComponent,
      data: {
        title: 'Agendamentos'
    }
  },
  {
      path: 'agendar',
      component: DatasDisponiveisComponent ,
      data: {
        title: 'Horarios Disponiveis'
    }
  },
  {
      path: 'detalhar',
      component: DetalharComponent ,
      data: {
        title: 'Detalhe dos Horarios Disponiveis'
    }
  },
  {
      path: 'administracao', 
      component: AdministracaoComponent ,
      data: {
        title: 'Administração' 
    }
  },
  
  {
      path: 'espera', 
      component: FilaEsperaComponent ,
      data: {
        title: 'Fila de Espera' 
    }
  },
  
  {
      path: 'detalhar-regras', 
      component: DetalharRegrasComponent ,
      data: {
        title: 'Detalhe das Regars' 
    }
  },
  
 /* {
      path: 'detalhar-fila-espela', 
      component: DetalharFilaEsperaComponent ,
      data: {
        title: 'Detalhamento de Minha Fila de Espera' 
    }
  },
 */ 
  {
      path: 'detalhar-meus-agendamentos', 
      component: DetalharMeusAgendamentosComponent ,
      data: {
        title: 'Detalhamento dos Meus Agendamentos' 
    }
  },
  

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  imports: [RouterModule.forRoot(this.Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
