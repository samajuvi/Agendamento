import { NgModule, ModuleWithProviders } from '@angular/core';
import { AdministracaoComponent } from './view/administracao/administracao.component';
import { MeusAgendamentosComponent } from './view/agendamento/meus-agendamentos.component';
import { LoginComponent } from './view/login/login.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { DatasDisponiveisComponent} from './view/datas-disponiveis/datas-disponiveis.component';



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
    path: 'administracao', 
    component: AdministracaoComponent ,
    data: {
      title: 'Administração' 
    }
},
 

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  imports: [RouterModule.forRoot(this.Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
