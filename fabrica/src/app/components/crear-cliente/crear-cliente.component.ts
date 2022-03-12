import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router:Router,
    private _clienteService: ClienteService) {
    this.clienteForm = this.fb.group({
      empresa: ['', Validators.required],
      encargado: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      pais: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarCliente(){
    

    const CLIENTE: Cliente ={
      idEmpresa: 0,
      empresa: this.clienteForm.get('empresa')?.value,
      encargado: this.clienteForm.get('encargado')?.value,
      correo: this.clienteForm.get('correo')?.value,
      telefono: this.clienteForm.get('telefono')?.value,
      pais: this.clienteForm.get('pais')?.value
    }

    console.log(CLIENTE);

    this._clienteService.nuevoCliente(CLIENTE).subscribe(data => {
      this.router.navigate(['/']);
    }, error =>{
      console.log(error);
      this.clienteForm.reset();
    })
    this.router.navigate(['/']);
  }

}
