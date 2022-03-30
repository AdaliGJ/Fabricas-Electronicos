import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  titulo = 'Login';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router:Router,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    
   }

   ngOnInit(): void {
    
  }

  loginUser(){
    this._usuarioService.userLogin(this.loginForm.value).subscribe(
      (data: any) => {
        let token = data._id;
        console.log(data);
        localStorage.setItem('usuario', token);
        location.reload();
        this.router.navigate([ '' ]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }
  
}
