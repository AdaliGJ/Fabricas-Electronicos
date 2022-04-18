import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = 'http://localhost:4000/api/pedidos/';
  url2 = 'http://localhost:4000/api/pedidos/enviar/';
  constructor (private http: HttpClient) {
   }

   getPedidos(): Observable<any>{
    return this.http.get(this.url);
  }
  editarPedidoEstado(id:string, estado:String): Observable<any>{
    return this.http.put(this.url + id, estado);
  }
  obtenerPedido(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  postOracle(estado:any): Observable<any>{
    return this.http.post(this.url2, estado);
  }
}
