import { Component, OnInit } from '@angular/core';

import { ngxCsv } from 'ngx-csv/ngx-csv';
import { PedidoService } from 'src/app/services/pedido.service';
import {Pedido} from 'src/app/models/pedido'



@Component({
  selector: 'app-listar-pedido',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  listPedido: Pedido[] = [];
  listPedido2: Pedido[] = [];



  constructor(private _pedidoService: PedidoService,) { }
  
  ngOnInit(): void {
    this.obtenerPedidos();
  }

  obtenerPedidos(){
    this._pedidoService.getPedidos().subscribe(data=>{

      this.listPedido = data;
    for(var i =0; i<this.listPedido.length; i++){
      if(this.listPedido[i]['estado'] == "generado" ){
        this.listPedido2.push(this.listPedido[i]);
      }
    }     
    },error =>{
      console.log(error);
    });
    

    
  }

  cambioEstado(id:any){

    var prueba = {
      "idPedido": id,
      "estado": "entregado"
  };
    this._pedidoService.postOracle(prueba).subscribe(data=>{
      console.log("servicio conectado");
    }, error => {
      console.log(error);
    })  
   
   this._pedidoService.editarPedidoEstado(id, "entregado").subscribe(data=>{
    //window.location.reload();
  }, error =>{
    console.log(error);
})

  

  }
  
}
