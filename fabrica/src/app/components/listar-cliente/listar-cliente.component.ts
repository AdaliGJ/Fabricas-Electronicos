import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {

  listCliente: Cliente[] = [];



  constructor(private _clienteService: ClienteService) { }
  
  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(){
    this._clienteService.getClientes().subscribe(data=>{
      console.log(data);
      this.listCliente = data;
    },error =>{
      console.log(error);
    })
  }

  eliminarCliente(id:any){
    this._clienteService.eliminarClientes(id).subscribe(data=>{
      this.obtenerClientes();
    }, error => {
      console.log(error)
    })
  }

}
