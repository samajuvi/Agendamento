import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from "app/dashboard/usuarios/usuarios.component";
import { AdicionarUsuarioComponent } from "app/dashboard/usuarios/adicionar-usuario/adicionar-usuario.component";
import { PlataformasComponent } from "app/dashboard/plataformas/plataformas.component";
import { AdicionarPlataformaComponent } from "app/dashboard/plataformas/adicionar-plataforma/adicionar-plataforma.component";

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent,
    data: {
      title: 'Usuarios'
    }
  },
  {
    path: 'usuario',
    component: AdicionarUsuarioComponent,
    data: {
      title: 'usuario detalhe'
    }
  },
  {
    path: 'plataformas',
    component: PlataformasComponent,
    data: {
      title: 'plataformas'
    }
  },
  {
    path: 'plataforma',
    component: AdicionarPlataformaComponent,
    data: {
      title: 'Adicionar Plataforma'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}