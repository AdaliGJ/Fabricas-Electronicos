import { NumberSymbol } from "@angular/common";

export class Pedido{
    _id? : number;
	fecha : Date;
    cliente: Number;
	idInventario : Number;
	estado: String;
	entrega: Number;



    constructor(
        fecha: Date,
        cliente : Number,
        idInventario: Number,
        estado: String,
        entrega : Number,


        )
        {
        this.fecha = fecha;
        this.cliente = cliente;
        this.idInventario = idInventario;
        this.estado = estado;
        this.entrega = entrega;

        
    }

}