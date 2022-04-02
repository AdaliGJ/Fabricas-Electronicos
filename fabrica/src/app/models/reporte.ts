import { NumberSymbol } from "@angular/common";

export class Reporte{
    _id? : number;
	modelo : string;
    color: string;
	fechaVentas : Date;
	serie: number;
	precioVenta: number;
	empresa : string;
	categoria : string;
    marca : string;


    constructor(
        modelo: string,
        color : string,
        fechaVentas: Date,
        serie: number,
        precioVenta : number,
        empresa: string,
        categoria : string,
        marca: string

        )
        {
        this.modelo = modelo;
        this.color = color;
        this.fechaVentas = fechaVentas;
        this.serie = serie;
        this.precioVenta = precioVenta;
        this.empresa = empresa;
        this.categoria = categoria;
        this.marca = marca;
        
    }

}