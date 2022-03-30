export class Usuario{
    _id? : number;
	usuario : string;
	nombre: string;
	password: string;


    constructor(
        usuario : string,
        nombre: string,
        password: string)
        {
        this.usuario = usuario;
        this.nombre = nombre;
        this.password = password;
    }

}