export class Cliente{
    _id? : number;
	idEmpresa : number;
	empresa : string;
	encargado: string;
	correo: string;
	telefono : number;
	pais : string;

    constructor(
        idEmpresa : number,
        empresa : string,
        encargado: string,
        correo: string,
        telefono : number,
        pais : string)
        {
        this.idEmpresa = idEmpresa;
        this.empresa = empresa;
        this.encargado = encargado;
        this.correo = correo;
        this.telefono = telefono;
        this.pais = pais;
    }

}