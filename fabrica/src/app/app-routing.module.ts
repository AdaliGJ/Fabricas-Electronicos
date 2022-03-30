import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearElectronicoComponent } from './components/crear-electronico/crear-electronico.component';
<<<<<<< HEAD
import { DatosExtraComponent } from './components/datos-extra/datos-extra.component';
=======
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
>>>>>>> 0837f99476c2a50ef688c7f19533c6a2746f22cb
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ListarElectronicosComponent } from './components/listar-electronicos/listar-electronicos.component';
import { ListarUsuarioComponent } from './components/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './components/login/login.component';

<<<<<<< HEAD
const routes: Routes = [
  {path: '', component: ListarClienteComponent},
  {path: 'crear-cliente', component: CrearClienteComponent},
  {path: 'crear-electronico', component: CrearElectronicoComponent},
  {path: 'editar-cliente/:id', component: CrearClienteComponent},
  {path: 'lista-electronicos', component: ListarElectronicosComponent},
  {path: 'datos-extra/:id', component: DatosExtraComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];
=======
const localUser=localStorage.getItem("usuario");

var routes: Routes;

if(localUser=="" || localUser==null || localUser=="error"){
  routes  = [
   {path: 'login', component: LoginComponent},
    {path:'**', redirectTo: 'login', pathMatch: 'full'}
  ];
}else{
  routes  = [
    {path: '', component: ListarClienteComponent},
    {path: 'crear-cliente', component: CrearClienteComponent},
    {path: 'crear-electronico', component: CrearElectronicoComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent},
    {path: 'editar-cliente/:id', component: CrearClienteComponent},
    {path: 'editar-usuario/:id', component: CrearUsuarioComponent},
    {path: 'lista-electronicos', component: ListarElectronicosComponent},
    {path: 'lista-usuarios', component: ListarUsuarioComponent},
    //{path: 'login', component: LoginComponent},
    {path:'**', redirectTo: '', pathMatch: 'full'}
  ];
}
>>>>>>> 0837f99476c2a50ef688c7f19533c6a2746f22cb

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
