import { NumberSymbol } from "@angular/common";

export class Pedido{
    _id? : number;
	fecha : Date;
    cliente: Number;
	idInventario : Number;
	estado: String;
	entrega: Number;
    cantidad: Number;
    empresa: string;
    idPedidoVentas: number;
    categoria: string;
    modelo: string;



    constructor(
        fecha: Date,
        cliente : Number,
        idInventario: Number,
        estado: String,
        entrega : Number,
        cantidad: Number,
        empresa: string,
        idPedidoVentas: number,
        categoria: string,
        modelo: string
        )
        {
        this.fecha = fecha;
        this.cliente = cliente;
        this.idInventario = idInventario;
        this.estado = estado;
        this.entrega = entrega;
        this.cantidad = cantidad;
        this.empresa = empresa;
        this.idPedidoVentas = idPedidoVentas;
        this.categoria = categoria;
        this.modelo = modelo;
    }

}