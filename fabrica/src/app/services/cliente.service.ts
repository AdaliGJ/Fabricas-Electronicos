import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:4000/api/cliente/';
  constructor (private http: HttpClient) {
   }

   getClientes(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarClientes(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  nuevoCliente(cliente: Cliente): Observable<any>{
    return this.http.post(this.url, cliente);
  }
  obtenerCliente(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  editarCliente(id:string, cliente: Cliente): Observable<any>{
    return this.http.put(this.url + id, cliente);
  }
  clientLogin(payload:string) {
    return this.http.post(this.url + 'login', payload);
  }
}
