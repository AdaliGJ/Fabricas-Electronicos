import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ListarElectronicosComponent } from './components/listar-electronicos/listar-electronicos.component';

const routes: Routes = [
  {path: '', component: ListarClienteComponent},
  {path: 'crear-cliente', component: CrearClienteComponent},
  {path: 'editar-cliente/:id', component: CrearClienteComponent},
  {path: 'lista-electronicos', component: ListarElectronicosComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
