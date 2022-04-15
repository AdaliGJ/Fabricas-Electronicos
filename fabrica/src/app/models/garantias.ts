import { NumberSymbol } from "@angular/common";

export class Garantia{
    _id? : number;
	idInventario : number;
    mesesGarantia: number;
	detalle : string;


    constructor(
        idInventario : number,
        mesesGarantia: number,
        detalle : string,
        )
        {
        this.idInventario = idInventario;
        this.mesesGarantia = mesesGarantia;
        this.detalle = detalle;

    }

}