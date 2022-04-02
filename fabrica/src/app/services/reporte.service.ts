import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  url = 'http://localhost:4000/api/reporte/';
  constructor (private http: HttpClient) {
   }

   getReportes(): Observable<any>{
    return this.http.get(this.url);
  }

 
}
