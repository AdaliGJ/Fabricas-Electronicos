import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
