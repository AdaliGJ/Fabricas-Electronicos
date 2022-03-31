import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearElectronicoComponent } from './components/crear-electronico/crear-electronico.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { DatosExtraComponent } from './components/datos-extra/datos-extra.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ListarElectronicosComponent } from './components/listar-electronicos/listar-electronicos.component';
import { ListarUsuarioComponent } from './components/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/login/login.component';

const localUser=localStorage.getItem("usuario");

var routes: Routes;

  routes  = [
    {path: '', component: ListarClienteComponent},
    {path: 'crear-cliente', component: CrearClienteComponent},
    {path: 'crear-electronico', component: CrearElectronicoComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent},
    {path: 'editar-cliente/:id', component: CrearClienteComponent},
    {path: 'editar-electronico/:id', component: CrearElectronicoComponent},
    {path: 'editar-usuario/:id', component: CrearUsuarioComponent},
    {path: 'lista-electronicos', component: ListarElectronicosComponent},
    {path: 'lista-usuarios', component: ListarUsuarioComponent},
    {path: 'datos-extra/:id', component: DatosExtraComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'detalles/:id', component: DetallesComponent },
    //{path: 'login', component: LoginComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
