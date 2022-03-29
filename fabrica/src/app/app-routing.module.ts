import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearElectronicoComponent } from './components/crear-electronico/crear-electronico.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ListarElectronicosComponent } from './components/listar-electronicos/listar-electronicos.component';
import { ListarUsuarioComponent } from './components/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {path: '', component: ListarClienteComponent},
  {path: 'crear-cliente', component: CrearClienteComponent},
  {path: 'crear-electronico', component: CrearElectronicoComponent},
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: 'editar-cliente/:id', component: CrearClienteComponent},
  {path: 'editar-usuario/:id', component: CrearUsuarioComponent},
  {path: 'lista-electronicos', component: ListarElectronicosComponent},
  {path: 'lista-usuarios', component: ListarUsuarioComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
