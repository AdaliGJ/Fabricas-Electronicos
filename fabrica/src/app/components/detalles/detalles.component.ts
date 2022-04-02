import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Electronico } from 'src/app/models/electronico';
import { ElectronicoService } from 'src/app/services/electronico.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

   
  electronicoForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null;
  tipoElectronico: number;
  constructor(private fb: FormBuilder,
    private router:Router,
    private _electronicoService: ElectronicoService,
    private aRouter: ActivatedRoute) {
    this.electronicoForm = this.fb.group({
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      existencia: ['', Validators.required],
      precio: ['', Validators.required],
      color: ['', Validators.required],
      modelo: ['', Validators.required],
      descripcion: ['', Validators.required],
      resolucion: ['', Validators.required],
      bits: ['', Validators.required],
      pulgadas: ['', Validators.required],
      hdmi: ['', Validators.required],
      pulgadasReloj: ['', Validators.required],
      sistemaOperativo: ['', Validators.required],
      ram: ['', Validators.required],
      memoria: ['', Validators.required],
      maximoJugadores: ['', Validators.required],
      graficos: ['', Validators.required],
      consola: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.tipoElectronico = 0;
   }

  ngOnInit(): void {
    
    this.esEditar();
    
  }


  

    

   
    retornoTipo(){
      return this.tipoElectronico;
    }

    esEditar(){
      if(this.id !== null){
        this.titulo = 'Editar Electronico';
        this._electronicoService.obtenerElectronico(this.id).subscribe(data=>{
          this.electronicoForm.setValue({
            categoria: data.categoria,
            marca: data.marca,
            existencia: data.existencia,
            precio: data.precio,
            color: data.color,
            modelo: data.modelo,
            descripcion: data.descripcion,
            resolucion: "",
            bits: "",
            pulgadas: "",
            hdmi: "",
            pulgadasReloj: "",
            sistemaOperativo: "",
            ram: "",
            memoria: "",
            maximoJugadores: "",
            graficos: "",
            consola: "",
          })
        })
      }
    }
}
