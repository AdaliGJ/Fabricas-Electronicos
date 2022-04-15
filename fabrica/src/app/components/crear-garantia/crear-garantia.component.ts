import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Garantia } from 'src/app/models/garantias';
import { GarantiaService } from 'src/app/services/garantias.service';

@Component({
  selector: 'app-crear-garantia',
  templateUrl: './crear-garantia.component.html',
  styleUrls: ['./crear-garantia.component.scss']
})
export class CrearGarantiaComponent implements OnInit {

  garantiaForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router:Router,
    private _garantiaService: GarantiaService,
    private aRouter: ActivatedRoute) {
    this.garantiaForm = this.fb.group({
      mesesGarantia: ['', Validators.required],
      detalle: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarGarantia(){
    

    const GARANTIA: Garantia ={
      idInventario: 1,
      mesesGarantia: this.garantiaForm.get('mesesGarantia')?.value,
      detalle: this.garantiaForm.get('detalle')?.value,
    }

    if(this.id !== null){
      this._garantiaService.editarGarantia(this.id, GARANTIA).subscribe(data=>{
        this.router.navigate(['/'])
      }, error =>{
        console.log(error);
        this.garantiaForm.reset();
    })
    }else{
      console.log(GARANTIA);

      this._garantiaService.nuevoGarantia(GARANTIA).subscribe(data => {
      this.router.navigate(['/']);
    }, error =>{
        console.log(error);
        this.garantiaForm.reset();
    })
    }

  }

    esEditar(){
      if(this.id !== null){
        this.titulo = 'Editar Garantia';
        this._garantiaService.obtenerGarantia(this.id).subscribe(data=>{
          this.garantiaForm.setValue({
            empresa: data.empresa,
            encargado: data.encargado,
            correo: data.correo,
            telefono: data.telefono,
            pais: data.pais,
          })
        })
      }
    }
}