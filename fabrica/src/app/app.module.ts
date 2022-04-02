import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';

import {HttpClientModule} from '@angular/common/http';
import { ListarElectronicosComponent } from './components/listar-electronicos/listar-electronicos.component';
import { CrearElectronicoComponent } from './components/crear-electronico/crear-electronico.component';
import { ListarUsuarioComponent } from './components/listar-usuarios/listar-usuarios.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { LoginClienteComponent } from './components/login-cliente/login-cliente.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CompraComponent } from './components/compra/compra.component';
import { ReportesComponent } from './components/reportes/reportes.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    ListarElectronicosComponent,
    CrearElectronicoComponent,
    ListarUsuarioComponent,
    CrearUsuarioComponent,
    LoginComponent,
    LoginClienteComponent,
    DetallesComponent,
    CatalogoComponent,
    CompraComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }