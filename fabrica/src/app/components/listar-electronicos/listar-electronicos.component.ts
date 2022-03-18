import { Component, OnInit } from '@angular/core';
import { Electronico } from 'src/app/models/electronico';
import { ElectronicoService } from 'src/app/services/electronico.service';

@Component({
  selector: 'app-listar-electronicos',
  templateUrl: './listar-electronicos.component.html',
  styleUrls: ['./listar-electronicos.component.scss']
})
export class ListarElectronicosComponent implements OnInit {

  listCliente: Electronico[] = [];



  constructor(private _electronicoService: ElectronicoService) { }
  
  ngOnInit(): void {
    this.obtenerElectronicos();
  }

  obtenerElectronicos(){
    this._electronicoService.getElectronicos().subscribe(data=>{
      console.log(data);
      this.listCliente = data;
    },error =>{
      console.log(error);
    })
  }

  eliminarCliente(id:any){
    this._electronicoService.eliminarElectronicos(id).subscribe(data=>{
      this.obtenerElectronicos();
    }, error => {
      console.log(error)
    })
  }

}
