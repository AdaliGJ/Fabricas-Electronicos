import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/models/compra';
import { ElectronicoService } from 'src/app/services/electronico.service';
import { CompraService } from 'src/app/services/compra.service';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  id: string | null;
  compraForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router:Router,
    private _compraService: CompraService,
    private _electronicoService: ElectronicoService,
    private aRouter: ActivatedRoute) {
    

      this.compraForm = this.fb.group({
        nit: ['', Validators.required],
        cantidad: ['', Validators.required],
        usuario: ['', Validators.required],
        idElectronico: ['', Validators.required],
      })
    this.id = this.aRouter.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    
  }

  agregarCompra(){
    
    
    const COMPRA: Compra ={
      nit: this.compraForm.get('nit')?.value,
      cantidad: this.compraForm.get('cantidad')?.value,
      usuario: localStorage.getItem('usuario'),
      idElectronico: this.id,
      
    };
    
    this._compraService.nuevoCompra(COMPRA).subscribe(data => {
      alert("Compra Realizaada");
      this.router.navigate(['/catalogo']);
    }, error =>{
        console.log(error);
        this.compraForm.reset();
    });

    
    console.log(COMPRA);
      
  }
}

  

    

   
   

    
  