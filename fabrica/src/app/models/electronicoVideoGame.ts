import { NumberSymbol } from "@angular/common";

export class ElectronicoVideoGame{
    _id? : number;
	idInventario : number;
    categoria: string;
	marca : string;
	existencia: number;
	precio: number;
	color : number;
	modelo : string;
    descripcion : string;
    maximoJugadores: number;
    graficos: string;
    consola: string;

    constructor(
        idInventario : number,
        categoria: string,
        marca : string,
        existencia: number,
        precio: number,
        color : number,
        modelo : string,
        descripcion: string,
        maximoJugadores: number,
        graficos: string,
        consola: string
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
        this.maximoJugadores = maximoJugadores;
        this.graficos = graficos;
        this.consola = consola;
    }

}