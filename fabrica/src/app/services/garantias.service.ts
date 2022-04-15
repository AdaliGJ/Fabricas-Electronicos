import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Garantia } from '../models/garantias';

@Injectable({
  providedIn: 'root'
})
export class GarantiaService {

  url = 'http://localhost:4000/api/garantia/';

  constructor (private http: HttpClient) {
   }

   getGarantias(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarGarantias(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  nuevoGarantia(garantia: Garantia): Observable<any>{
    return this.http.post(this.url, garantia);
  }
  
  obtenerGarantia(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarGarantia(id:string, garantia: Garantia): Observable<any>{
    return this.http.put(this.url + id, garantia);
  }
}
