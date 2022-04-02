import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra';


@Injectable({
  providedIn: 'root'
})
export class CompraService {

  url = 'http://localhost:4000/api/compra/';
  constructor (private http: HttpClient) {
   }

  

  
  nuevoCompra(compra: Compra): Observable<any>{
    return this.http.post(this.url, compra);
  }
  getCompra(): Observable<any>{
    return this.http.get(this.url);
  }
  
}
