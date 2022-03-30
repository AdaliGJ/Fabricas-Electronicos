import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Electronico } from 'src/app/models/electronico';
import { ElectronicoService } from 'src/app/services/electronico.service';


@Component({
  selector: 'app-datos-extra',
  templateUrl: './datos-extra.component.html',
  styleUrls: ['./datos-extra.component.scss']
})
export class DatosExtraComponent implements OnInit {

  ElectronicoForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null;

  datosElectronicos : any;

  constructor(private fb: FormBuilder,
    private router:Router,
    private _ElectronicoService: ElectronicoService,
    private aRouter: ActivatedRoute
   
    ) {
    this.ElectronicoForm = this.fb.group({
      empresa: ['', Validators.required],
      encargado: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      pais: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

    esEditar(){
      if(this.id !== null){
        this._ElectronicoService.obtenerElectronico(this.id).subscribe(data=>{

          this.datosElectronicos = data;
          if(data['categoria']=="Televisor"){
            this.datosElectronicos[0] = data['resolucion'];
            this.datosElectronicos[1] = data['bits'];
            this.datosElectronicos[2] = data['pulgadas'];
            this.datosElectronicos[3] = data['hdmi'];

          }else if(data['categoria']=="Smartwatch"){
            this.datosElectronicos[0] = data['pulgadasReloj'];
            this.datosElectronicos[1] = data['sistemaOperativo'];
            this.datosElectronicos[2] = data['ram'];
            this.datosElectronicos[3] = data['memoria'];

          }else if(data['categoria']=="Videojuego"){
            this.datosElectronicos[0] = data['maximoJugadores'];
            this.datosElectronicos[1] = data['graficos'];
            this.datosElectronicos[2] = data['consola'];
          }
        })
      }
    }

    show(){
      if(this.datosElectronicos['categoria']=="Televisor"){
        console.log("Hola");

      }
    }

    
}
