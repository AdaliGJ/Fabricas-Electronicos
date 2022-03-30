import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  listUsuario: Usuario[] = [];



  constructor(private _usuarioService: UsuarioService) { }
  
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data=>{
      console.log(data);
      this.listUsuario = data;
    },error =>{
      console.log(error);
    })
  }

  eliminarUsuario(id:any){
    this._usuarioService.eliminarUsuarios(id).subscribe(data=>{
      this.obtenerUsuarios();
    }, error => {
      console.log(error)
    })
  }

}
