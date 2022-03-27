import { NumberSymbol } from "@angular/common";

export class ElectronicoSmartWatch{
    _id? : number;
	idInventario : number;
    categoria: string;
	marca : string;
	existencia: number;
	precio: number;
	color : number;
	modelo : string;
    descripcion : string;
    pulgadasReloj: number;
    sistemaOperativo: string;
    ram: number;
    memoria: number;

    constructor(
        idInventario : number,
        categoria: string,
        marca : string,
        existencia: number,
        precio: number,
        color : number,
        modelo : string,
        descripcion: string,
        pulgadasReloj: number,
        sistemaOperativo: string,
        ram: number,
        memoria: number,
        )
        {
        this.idInventario = idInventario;
        this.categoria = categoria;
        this.marca = marca;
        this.existencia = existencia;
        this.precio = precio;
        this.color = color;
        this.modelo = modelo;
        this.descripcion = descripcion;
        this.pulgadasReloj = pulgadasReloj;
        this.sistemaOperativo = sistemaOperativo;
        this.ram = ram;
        this.memoria = memoria; 
    }

}