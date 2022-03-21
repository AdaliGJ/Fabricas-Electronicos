import { NumberSymbol } from "@angular/common";

export class Electronico{
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
    pulgadasReloj: number;
    sistemaOperativo: string;
    ram: number;
    memoria: number;
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
        resolucion: string,
        bits: number,
        pulgadas: number,
        hdmi: number,
        pulgadasReloj: number,
        sistemaOperativo: string,
        ram: number,
        memoria: number,
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
        this.resolucion = resolucion;
        this.bits = bits;
        this.pulgadas = pulgadas;
        this.hdmi = hdmi;
        this.pulgadasReloj = pulgadasReloj;
        this.sistemaOperativo = sistemaOperativo;
        this.ram = ram;
        this.memoria = memoria; 
        this.maximoJugadores = maximoJugadores;
        this.graficos = graficos;
        this.consola = consola;
    }

}