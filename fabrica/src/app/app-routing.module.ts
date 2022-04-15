import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearElectronicoComponent } from './components/crear-electronico/crear-electronico.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ListarElectronicosComponent } from './components/listar-electronicos/listar-electronicos.component';
import { ListarUsuarioComponent } from './components/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { LoginClienteComponent } from './components/login-cliente/login-cliente.component';
import {CatalogoComponent} from './components/catalogo/catalogo.component'
import { DetallesComponent } from './components/detalles/detalles.component';
import { DatosExtraComponent } from './components/datos-extra/datos-extra.component';

import { CompraComponent } from './components/compra/compra.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ListarGarantiasComponent } from './components/listar-garantias/listar-garantias.component';
import { CrearGarantiaComponent } from './components/crear-garantia/crear-garantia.component';


const localUser=localStorage.getItem("usuario");
const localClient=localStorage.getItem("cliente");

var routes: Routes;

if((localUser=="" || localUser==null || localUser=="error") && (localClient=="" || localClient==null || localClient=="error") ){
  routes  = [
   {path: 'login', component: LoginComponent},
   {path: 'login-cliente', component: LoginClienteComponent},
    {path:'**', redirectTo: 'login', pathMatch: 'full'}
  ];
}
else if(localUser=="" || localUser==null || localUser=="error"){
  routes  = [
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'detalles/:id', component: DetallesComponent},
     {path:'**', redirectTo: 'catalogo', pathMatch: 'full'}
   ];
}
else{
  routes  = [
    {path: '', component: ListarClienteComponent},
    {path: 'crear-cliente', component: CrearClienteComponent},
    {path: 'crear-electronico', component: CrearElectronicoComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent},
    {path: 'editar-cliente/:id', component: CrearClienteComponent},
    {path: 'editar-usuario/:id', component: CrearUsuarioComponent},
    {path: 'lista-electronicos', component: ListarElectronicosComponent},
    {path: 'lista-usuarios', component: ListarUsuarioComponent},
    //{path: 'login-cliente', component: LoginClienteComponent},
    {path: 'login-cliente', component: LoginClienteComponent},
    {path: 'datos-extra/:id', component: DatosExtraComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'detalles/:id', component: DetallesComponent},
    {path: 'compra/:id', component: CompraComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'pedidos', component: PedidosComponent},
    {path: 'garantias', component: ListarGarantiasComponent},
    {path: 'crear-garantia', component: CrearGarantiaComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}
  ];
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }