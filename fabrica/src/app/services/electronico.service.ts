import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Electronico } from '../models/electronico';

@Injectable({
  providedIn: 'root'
})
export class ElectronicoService {

  url = 'http://localhost:4000/api/electronico/';
  constructor (private http: HttpClient) {
   }

   getElectronicos(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarElectronicos(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  nuevoElectronico(cliente: Electronico): Observable<any>{
    return this.http.post(this.url, cliente);
  }
  obtenerElectronico(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  editarElectronico(id:string, cliente: Electronico): Observable<any>{
    return this.http.put(this.url + id, cliente);
  }
}
