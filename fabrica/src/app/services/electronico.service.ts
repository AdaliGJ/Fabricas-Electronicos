import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Electronico } from '../models/electronico';
import { ElectronicoTelevisor } from '../models/electronicoTelevisor';
import { ElectronicoSmartWatch } from '../models/electronicoSmartWatch';
import { ElectronicoVideoGame } from '../models/electronicoVideoGame';

@Injectable({
  providedIn: 'root'
})
export class ElectronicoService {

  url = 'http://localhost:4000/api/electronico/';
  urlTelevisor = 'http://localhost:4000/api/electronicoTelevisor/';
  urlSmartWatch = 'http://localhost:4000/api/electronicoSmartWatch/';
  constructor (private http: HttpClient) {
   }

   getElectronicos(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarElectronicos(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  nuevoElectronico(electronico: Electronico): Observable<any>{
    return this.http.post(this.url, electronico);
  }
  nuevoElectronicoTelevisor(electronicoTelevisor: ElectronicoTelevisor): Observable<any>{
    return this.http.post(this.urlTelevisor, electronicoTelevisor);
  }
  nuevoElectronicoSmartWatch(electronicoSmartWatch: ElectronicoSmartWatch): Observable<any>{
    return this.http.post(this.urlSmartWatch, electronicoSmartWatch);
  }
  nuevoElectronicoVideoGame(electronicoVideoGame: ElectronicoVideoGame): Observable<any>{
    return this.http.post(this.url, electronicoVideoGame);
  }
  obtenerElectronico(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  obtenerElectronicoCompra(id: string | null): Observable<any>{
    return this.http.get(this.url + id);
  }
  editarElectronico(id:string, electronico: Electronico): Observable<any>{
    return this.http.put(this.url + id, electronico);
  }
}
