import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent implements OnInit {
  loginForm: FormGroup;
  titulo = 'Login';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router:Router,
    private _clienteService: ClienteService,
    private aRouter: ActivatedRoute) {
    this.loginForm = this.fb.group({
      cliente: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    
   }

   ngOnInit(): void {
    
  }

  loginClient(){
    this._clienteService.clientLogin(this.loginForm.value).subscribe(
      (data: any) => {
        let token = data._id;
        console.log(data);
        localStorage.setItem('cliente', token);
        location.reload();
        this.router.navigate([ '' ]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }

  clienteLocal(){
    this.loginForm.setValue({error: 'Cliente o Contraseña Incorrectos'})
  }
  
}
