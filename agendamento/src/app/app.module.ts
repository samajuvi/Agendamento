import { ObitoService } from './services/obito.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';

import { DashboardModule } from "app/dashboard/dashboard.module";


import { AppComponent } from './app.component';

import { NotFoundComponent } from './comuns/not-found/not-found.component';

import { AppRoutingModule } from "app/app.routing";

import { AppConfig } from "app/app.config";

import { AuthGuard } from "app/guards/auth.guard";

import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

import { NAV_DROPDOWN_DIRECTIVES } from "app/comuns/directives/nav-dropdown.directive";
import { MENU_DROPDOWN_DIRECTIVES } from "app/comuns/directives/menu-dropdown.directive";

import { SIDEBAR_TOGGLE_DIRECTIVES } from "app/comuns/directives/sidebar.directive";

import { AlertService } from "app/services/alert.service";
import { LoginComponent } from "app/login/login.component";
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { Decode64Pipe } from './pipes/decode64.pipe';

import { AlertComponent } from './comuns/alert/alert.component';
import { ConsultaComponent } from './obito/consulta/consulta.component';
import { IncluirComponent } from './obito/incluir/incluir.component';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PropertiesService } from "app/services/properties.service";
import { AuthService } from "app/security/auth.service";
import { AuxiliarService } from "app/services/AuxiliarService";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    LoginComponent,
    AlertComponent,
    NotFoundComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES,
    MENU_DROPDOWN_DIRECTIVES,
    SimpleLayoutComponent,
    ConsultaComponent,
    IncluirComponent,
    HomeComponent,
    Decode64Pipe
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DashboardModule,
    Ng2TableModule,
    PaginationModule.forRoot()
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthService, 
    AuthGuard,
    AppConfig,
    AlertService,
    AuxiliarService,
    PropertiesService,
    ObitoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
