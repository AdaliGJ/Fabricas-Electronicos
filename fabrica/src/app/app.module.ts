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
<<<<<<< HEAD
import { DatosExtraComponent } from './components/datos-extra/datos-extra.component';
=======
import { ListarUsuarioComponent } from './components/listar-usuarios/listar-usuarios.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { LoginComponent } from './components/login/login.component';
>>>>>>> 0837f99476c2a50ef688c7f19533c6a2746f22cb

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    ListarElectronicosComponent,
    CrearElectronicoComponent,
<<<<<<< HEAD
    DatosExtraComponent
=======
    ListarUsuarioComponent,
    CrearUsuarioComponent,
    LoginComponent
>>>>>>> 0837f99476c2a50ef688c7f19533c6a2746f22cb
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
