import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Electronico } from 'src/app/models/electronico';
import { ElectronicoService } from 'src/app/services/electronico.service';


@Component({
  selector: 'app-crear-electronico',
  templateUrl: './crear-electronico.component.html',
  styleUrls: ['./crear-electronico.component.scss']
})
export class CrearElectronicoComponent implements OnInit {

  
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

  agregarElectronico(){
    

    const ELECTRONICO: Electronico ={
      idInventario: 0,
      categoria: this.electronicoForm.get('categoria')?.value,
      marca: this.electronicoForm.get('marca')?.value,
      existencia: this.electronicoForm.get('existencia')?.value,
      precio: this.electronicoForm.get('precio')?.value,
      color: this.electronicoForm.get('color')?.value,
      modelo: this.electronicoForm.get('modelo')?.value,
      descripcion: this.electronicoForm.get('descripcion')?.value,
      resolucion: this.electronicoForm.get('resolicion')?.value,
      bits: this.electronicoForm.get('bits')?.value,
      pulgadas: this.electronicoForm.get('pulgadas')?.value,
      hdmi: this.electronicoForm.get('hdmi')?.value,
      pulgadasReloj: this.electronicoForm.get('pulgadasReloj')?.value,
      sistemaOperativo: this.electronicoForm.get('sistemaOperativo')?.value,
      ram: this.electronicoForm.get('ram')?.value,
      memoria: this.electronicoForm.get('memoria')?.value,
      maximoJugadores: this.electronicoForm.get('maximoJugadores')?.value,
      graficos: this.electronicoForm.get('graficos')?.value,
      consola: this.electronicoForm.get('consola')?.value,
    }

    if(this.id !== null){
      this._electronicoService.editarElectronico(this.id, ELECTRONICO).subscribe(data=>{
        this.router.navigate(['/'])
      }, error =>{
        console.log(error);
        this.electronicoForm.reset();
    })
    }else{
      console.log(ELECTRONICO);

      this._electronicoService.nuevoElectronico(ELECTRONICO).subscribe(data => {
      this.router.navigate(['/']);
    }, error =>{
        console.log(error);
        this.electronicoForm.reset();
    })
    }

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
          })
        })
      }
    }

    onChange(e:any){
      var seleccion = e.target.value;
      if(seleccion == 'Televisor'){
        this.tipoElectronico = 1;
      }else if(seleccion == 'Smartwatch'){
        this.tipoElectronico = 2;
      }else if(seleccion == 'Videojuego'){
        this.tipoElectronico = 3;
      }else{
        this.tipoElectronico = 0;
      }
      console.log(this.tipoElectronico);
    }
}
