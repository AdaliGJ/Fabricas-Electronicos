import { NumberSymbol } from "@angular/common";

export class Compra{
    _id? : number;
	nit : Number;   
    cantidad: string;
	usuario : string | null;
    idElectronico : string | null;

    constructor(
        nit : Number,
        cantidad: string,
        usuario : string,
        idElectronico : string | null ,
        )
        {
        this.nit = nit;
        this.cantidad = cantidad;
        this.usuario = usuario;
        this.idElectronico = idElectronico;
    }

}