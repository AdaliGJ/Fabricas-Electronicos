import { Component, OnInit } from '@angular/core';
import { Garantia } from 'src/app/models/garantias';
import { GarantiaService } from 'src/app/services/garantias.service';

@Component({
  selector: 'app-listar-garantias',
  templateUrl: './listar-garantias.component.html',
  styleUrls: ['./listar-garantias.component.scss']
})
export class ListarGarantiasComponent implements OnInit {

  listGarantia: Garantia[] = [];



  constructor(private _garantiaService: GarantiaService) { }
  
  ngOnInit(): void {
    this.obtenerGarantias();
  }

  obtenerGarantias(){
    this._garantiaService.getGarantias().subscribe(data=>{
      this.listGarantia = data;
    },error =>{
      console.log(error);
    })
    
  }

  eliminarGarantia(id:any){
    this._garantiaService.eliminarGarantias(id).subscribe(data=>{
      this.obtenerGarantias();
    }, error => {
      console.log(error)
    })
  }

  logout(){
    localStorage.setItem('usuario', '');
    window.location.reload();
  }

}
