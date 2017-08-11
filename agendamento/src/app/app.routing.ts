import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from "app/comuns/not-found/not-found.component";

import { AuthGuard } from "app/guards/auth.guard";
import { FullLayoutComponent } from "app/layouts/full-layout/full-layout.component";
import { ConsultaComponent } from "app/obito/consulta/consulta.component"
import { IncluirComponent } from "app/obito/incluir/incluir.component";;
import { HomeComponent } from "app/components/home/home.component";

export const routes: Routes = [

   // { path: '', component: LoginComponent },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'home',
                component : HomeComponent,
                canActivate: [AuthGuard],
            }
            ,
            {
                path: 'consultar-documento',
                component : ConsultaComponent,
                canActivate: [AuthGuard],
            }
            ,
            {
                path: 'incluir-documento',
                component : IncluirComponent,
                canActivate: [AuthGuard],
            }
        ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }