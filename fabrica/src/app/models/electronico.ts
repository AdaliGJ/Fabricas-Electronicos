export class Electronico{
    _id? : number;
	idInventario : number;
	marca : string;
	existencias: number;
	precio: number;
	color : number;
	modelo : string;
    descripcion : string;

    constructor(
        idInventario : number,
        marca : string,
        existencias: number,
        precio: number,
        color : number,
        modelo : string,
        descripcion: string)
        {
        this.idInventario = idInventario;
        this.marca = marca;
        this.existencias = existencias;
        this.precio = precio;
        this.color = color;
        this.modelo = modelo;
        this.descripcion = descripcion;
    }

}