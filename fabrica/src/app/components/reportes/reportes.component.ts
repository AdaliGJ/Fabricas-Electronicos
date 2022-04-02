import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/models/reporte';
import { ReporteService } from 'src/app/services/reporte.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';



@Component({
  selector: 'app-listar-reporte',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  listReporte: Reporte[] = [];


  constructor(private _reporteService: ReporteService,) { }
  
  ngOnInit(): void {
    this.obtenerReportes();

    this.crearExcel();
  }

  obtenerReportes(){
    this._reporteService.getReportes().subscribe(data=>{
      this.listReporte = data;

      
      

    },error =>{
      console.log(error);
    });
    
    
  }

  crearExcel(){

    this._reporteService.getReportes().subscribe(data=>{
      this.listReporte = data;

      
      var options = { 
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true, 
        showTitle: true,
        title: 'Reporte',
        useBom: true,
        noDownload: false,
        headers: ["ID", "Modelo", "Color", "Fecha de venta", "# de serie", "Precio de venta", "Tienda", "Categoria", "Marca"]
      };
      console.log(data);
  
  
     new ngxCsv(this.listReporte, "Reporte", options);

    },error =>{
      console.log(error);
    });

    
   
  }
}
