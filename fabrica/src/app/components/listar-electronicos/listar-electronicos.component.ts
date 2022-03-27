import { Component, OnInit } from '@angular/core';
import { Electronico } from 'src/app/models/electronico';
import { ElectronicoService } from 'src/app/services/electronico.service';

@Component({
  selector: 'app-listar-electronicos',
  templateUrl: './listar-electronicos.component.html',
  styleUrls: ['./listar-electronicos.component.scss']
})
export class ListarElectronicosComponent implements OnInit {

  listElectronico: Electronico[] = [];



  constructor(private _electronicoService: ElectronicoService) { }
  
  ngOnInit(): void {
    this.obtenerElectronicos();
  }

  obtenerElectronicos(){
    this._electronicoService.getElectronicos().subscribe(data=>{
      this.listElectronico = data;
    },error =>{
      console.log(error);
    })
    
  }

  eliminarElectronico(id:any){
    this._electronicoService.eliminarElectronicos(id).subscribe(data=>{
      this.obtenerElectronicos();
    }, error => {
      console.log(error)
    })
  }

}
