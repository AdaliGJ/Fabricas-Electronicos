import { NumberSymbol } from "@angular/common";

export class ElectronicoTelevisor{
    _id? : number;
	idInventario : number;
    categoria: string;
	marca : string;
	existencia: number;
	precio: number;
	color : number;
	modelo : string;
    descripcion : string;
    resolucion: string;
    bits: number;
    pulgadas: number;
    hdmi: number;

    constructor(
        idInventario : number,
        categoria: string,
        marca : string,
        existencia: number,
        precio: number,
        color : number,
        modelo : string,
        descripcion: string,
        resolucion: string,
        bits: number,
        pulgadas: number,
        hdmi: number,
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
        this.resolucion = resolucion;
        this.bits = bits;
        this.pulgadas = pulgadas;
        this.hdmi = hdmi;
    }

}