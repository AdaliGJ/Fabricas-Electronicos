import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  titulo = 'Crear Usuario';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router:Router,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute) {
    this.usuarioForm = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUsuario(){
    

    const USUARIO: Usuario ={
      usuario: this.usuarioForm.get('usuario')?.value,
      nombre: this.usuarioForm.get('nombre')?.value,
      password: this.usuarioForm.get('password')?.value,
    }

    if(this.id !== null){
      this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data=>{
        this.router.navigate(['lista-usuarios'])
      }, error =>{
        console.log(error);
        this.usuarioForm.reset();
    })
    }else{
      console.log(USUARIO);

      this._usuarioService.nuevoUsuario(USUARIO).subscribe(data => {
      this.router.navigate(['lista-usuarios']);
    }, error =>{
        console.log(error);
        this.usuarioForm.reset();
    })
    }

  }

    esEditar(){
      if(this.id !== null){
        this.titulo = 'Editar Usuario';
        this._usuarioService.obtenerUsuario(this.id).subscribe(data=>{
          this.usuarioForm.setValue({
            usuario: data.usuario,
            nombre: data.nombre,
            password: data.password,
          })
        })
      }
    }
}
